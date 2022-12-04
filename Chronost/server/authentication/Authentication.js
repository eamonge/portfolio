const jwt = require('jsonwebtoken');

function auth(req, res, next) {
    try {
        const token = req.cookies.token;
        if (!token) {
            console.log('Unauthorized');
            return res.sendStatus(401);
        } 

        //compares token against private key and/or secret
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified.user;
        next();
        
    } catch (err) {
        console.log(`Error is: ${err}`);
        res.sendStatus(401);
    }
};

module.exports = auth;