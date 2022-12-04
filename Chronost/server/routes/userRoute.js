const router = require('express').Router();
const User = require('../server/models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//Register POST
router.post('/', async (req, res) => {
    const { email, first_name, last_name, password, role } = req.body;
    const existingUser = await User.findOne({ email: email });

    try {
        
        //If password is less than 8 characters long
        if (password.length < 8) {
            console.log('Not complex enough');
            return res.sendStatus(400);
        }

        //If the email is already registered
        if (existingUser) {
            console.log('User already exists');
            return res.sendStatus(400);
        }

        //password is scrambled
        const salt = bcrypt.genSaltSync();
        const passwordHash = await bcrypt.hash(password, salt);

        //creating a new user
        const newUser = new User({
            email, first_name, last_name, passwordHash, role
        });

        //saves the created user to DB
        const savedUser = await newUser.save();

        //Create a jwt token
        const token = jwt.sign({
            user: savedUser._id
        }, process.env.JWT_SECRET);

        //SNED token in HTTP-only cookie
        res.cookie("token", token, {
            httpOnly: true
        }).send();
    } catch (err) {
        console.log(`Errorxfgdsf is: ${err}.`)
        res.sendStatus(500);
    }
});

//Log in ROUTE
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Making sure all inputs are placed
        if (!email || !password) {
            console.log('Make sure all inputs are correctly placed');
            res.sendStatus(400);
        }

        //Checking if user exists
        const existingUser = await User.findOne({ email: email });

        if (!existingUser) {
            console.log('Wrong username or password');
            res.sendStatus(404);
        }

        //Checking if password exist
        const passwordCheck = await bcrypt.compare(password, existingUser.passwordHash);

        //If password isn't correct
        if (!passwordCheck) {
            console.log('Wrong password');
            res.sendStatus(400);
        }

        //sign the token

        const token = jwt.sign({
            user: existingUser._id
        }, process.env.JWT_SECRET);

        // sned token in HTTP-only cookie
        res.cookie("token", token, {
            httpOnly: true
        }).send();

    } catch (err) {
        console.log(`Error is: ${err}`);
        res.sendStatus(500);
    }
});

//Log out ROUTE
router.get('/logout', (req, res) => {
    res.cookie("token", "", {
        httpOnly: true,
        expires: new Date(0)
    })
        .send();
    ;
})

//Verify if token exists
router.get('/loggedIn', (req, res) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.json(false);
        }

        const verified = jwt.verify(token, process.env.JWT_SECRET);
                
        res.send(true);
    } catch (err) {
        res.json(false);
    }
});

//Get user data by email
router.get('/:email', (req, res) => {
    //PATCH Placeholder
    User.findOne({
        'email': req.params.email
    })
    .then(user => res.send(user))
    .catch((error) => console.log(error));
});

//Get user data by role
router.get('/user/:role', (req, res) => {
    //PATCH Placeholder
    User.find({
        'role': req.params.role
    })
    .then(roleuser => res.send(roleuser))
    .catch((error) => console.log(error));
});

//Get user data by status
router.get('/status/:status', (req, res) => {
    //PATCH Placeholder
    User.find({
        'status': req.params.status
    })
    .then(statusUser => res.send(statusUser))
    .catch((error) => console.log(error));
});

//Path status
router.patch('/statuspatch/:email', (req, res) => {
    //PATCH placeholder
    User.updateOne({
        'email': req.params.email
    }, {
        $set: {
            status: req.body.status,
            statusModified: new Date()
        }
    })
    .then((user) => res.send(user))
    .catch((error) => console.log(error))
});
module.exports = router;