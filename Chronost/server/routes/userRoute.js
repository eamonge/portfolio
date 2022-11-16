const router = require('express').Router();
const User = require('../server/models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//Register POST
router.post('/', async (req, res) => {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email: email});

    try {

        //Validation for account
        //If user or email don't exist
        if (!email || !password) {
            return res.sendStatus(400);
        }

        //If password is less than 8 characters long
        if (password.length < 8) {
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
            email, passwordHash
        });

        //saves the created user to DB
        const savedUser = await newUser.save();

        //Create a jwt token
        const token = jwt.sign({
            user: savedUser._id
        }, 't8dp_pA=7H^+];XE}7.*c$G&Z%^}~--6#U^mD^3JG&WJ~Z\KW');

        //SNED token in HTTP-only cookie
        res.cookie("token", token, {
            httpOnly: true
        }).send();
    } catch (err) {
        console.log(`Error is: ${err}.`)
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
        const existingUser = await User.findOne({ email: email});

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
        }, '~t8dp_pA=7H^+];XE}7.*c$G&Z%^}~--6#U^mD^3JG&WJ~Z\KW');

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

module.exports = router;