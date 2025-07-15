const router = require('express').Router();
const { poolPromise, sql } = require('../sql/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const { createUser, logInUser, getUserData } = require('../models/usersModel');

router.use(cookieParser());

//Create user
router.post('/', async (req, res) => {
    try {
        const {firstName, lastName, secondLastName, email, pwd} = req.body;

        const salt = bcrypt.genSaltSync();
        const hashedPassword = await bcrypt.hash(pwd, salt);

        try {
            const addUser = createUser(firstName, lastName, secondLastName, email, hashedPassword);
            const user = addUser[0];

            //Signing JWT web token for user login
            const token = jwt.sign({
                id: addUser.personID
            }, process.env.JWT_SECRET);

            //Send token in HTTP-only cookie
            res.cookie("token", token, {
                maxAge: 2592000000,
                httpOnly: true,
                secure: true,
                sameSite: 'None'
            }).send();

        } catch (err) {
            console.error(err);
            res.status(500).send("Database query failed");
        }
    } catch (err) {
        res.status(500).send(`Query failed: ${err}`);
    }
});

//User log in
router.post('/login', async (req, res) => {
    const {email, password} = req.body;
    
    try {
        const userResults = await logInUser(email);

        //If no email or user is found
        if (userResults.length === 0) {
            return res.status(401).json({ message: "Invalid email or password"});
        }

        //Returns matching user
        const user = userResults[0];
        const dbPassword = user.Pwd; //Hashed password from database
        
        let matchNormal = false;

        //Compares values ONLY if dbPassword exists
        if (dbPassword) {
            matchNormal = await bcrypt.compare(password, dbPassword);
        }

        // If existing password and password input does not match, gives 401
        if (!matchNormal) {
            return res.status(401).json({ message: "Invalid email or password"});
        }

        //If password strings match, sign token
        const token = jwt.sign({
            id: user.personID
        }, process.env.JWT_SECRET);

        // send token in HTTP-only cookie
        res.cookie("token", token, {
            maxAge: 2592000000,
            httpOnly: true,
            secure: true,
            sameSite: 'None',
        }).send();

    } catch (err) {
        console.error(error);
        res.status(500).send("Database query failed");
    }
});

//user log out
router.get('/logout', (req, res) => {
    res.cookie("token", "", {
        maxAge: 0,
        httpOnly: true,
        secure: true,
        sameSite: 'None',
    })
    .send();
});

//Checks if user is logged in
router.get('/loggedIn', async (req, res) => {
    try {
        // Checks if token is in payload
        const token = req.cookies.token;

        //If no token, report as unauthorized (401)
        if (!token) {
            return res.status(401).json(false);
        }

        // If token exists, verify that signature is with appropraite JWT secret
        jwt.verify(token, process.env.JWT_SECRET);

        //Return true if token is correct and exists
        res.send(true);
    } catch (err) {
        console.log(err);
        return res.json(false);
    }
});

//Gets user data
router.get('/data/:email', async (req, res) => {
    const mail = req.params.email;
    try {
        const userData = await getUserData(mail);
        res.json(userData);
    } catch (err) {
        console.log(err);
        return res.status(500).send("Fetch user data failed: ", err);
    }
});

module.exports = router;