function auth(req, res, next) {
    try {
        console.log(req.cookies);
    } catch (err) {
        console.log(`Error is: ${err}`);
        res.sendStatus(401);
    }
};

module.exports = auth;