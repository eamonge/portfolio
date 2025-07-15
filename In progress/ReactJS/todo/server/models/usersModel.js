const { sql, poolPromise } = require('../sql/db');

async function createUser(userName, userLName, userSecLN, userEmail, userPwd) {
    try {
        var query = `INSERT INTO Users(firstName, LastName, secondLastName, email, Pwd, dateCreated) VALUES (@fName, @lName, @sLName, @Email, @Password, GETDATE());`;
        //Calls in SQL pool
        const pool1 = await poolPromise;
        const result = await pool1
            .request()
            .input("fName", sql.VarChar, userName)
            .input("lName", sql.VarChar, userLName)
            .input("sLName", sql.VarChar, userSecLN)
            .input("Email", sql.VarChar, userEmail)
            .input("Password", sql.VarChar, userPwd)
            .query(query);
        return result.rowsAffected[0] //Returning number of affected rows
    } catch (error) {
        console.error(error);
    }
};

//Login logic
async function logInUser(userEmail) {
    try {
        var query = `SELECT
                        email, Pwd
                    FROM Users
                    WHERE email = @Email`;
        const pool = await poolPromise;
        const result = await pool
            .request()
            .input("Email", sql.VarChar, userEmail)
            .query(query);
        return result.recordset;
    } catch (err) {
        console.error(err);
    }
}

//Gets user data
async function getUserData(email) {
    try {
        var sqlQuery = `SELECT personID, firstName, LastName, email
                        FROM Users
                        WHERE email = @UserEmail;`
        const pool = await poolPromise;
        const result = await pool
            .request()
            .input("UserEmail", sql.VarChar, email)
            .query(sqlQuery);
        
        return result.recordset;
    } catch (err) {
        console.error(`Failed querying user data: ${err}`);
    }
} 

module.exports = {
    createUser,
    logInUser,
    getUserData,
}