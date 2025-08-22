const {sql, getConnectionPool } = require('../sql/db');

async function createUser(userName, userLName, userSecLN, userEmail, userAlias, userPwd) {
    try {
        var query = `INSERT INTO Users(firstName, LastName, secondLastName, email, userName, Pwd, dateCreated) VALUES (@fName, @lName, @sLName, @Email, @UName, @Password, GETDATE());`;
        //Calls in SQL pool
        const pool = await getConnectionPool();
        const result = await pool
            .request()
            .input("fName", sql.VarChar, userName)
            .input("lName", sql.VarChar, userLName)
            .input("sLName", sql.VarChar, userSecLN)
            .input("Email", sql.VarChar, userEmail)
            .input("UName", sql.VarChar, userAlias)
            .input("Password", sql.VarChar, userPwd)
            .query(query);
        return result.rowsAffected[0] //Returning number of affected rows
    } catch (error) {
        console.error(error);
    }
};

//Login logic
async function logInUser(userInput) {
    try {
        var query = `SELECT
                        email, userName, Pwd
                    FROM Users
                    WHERE email = @input OR userName= @input`;
        const pool = await getConnectionPool();
        const result = await pool
            .request()
            .input("input", sql.VarChar, userInput)
            .query(query);
        return result.recordset;
    } catch (err) {
        console.error(err);
    }
}

//Gets user data
async function getUserData(userInput) {
    try {
        var sqlQuery = `SELECT personID, firstName, LastName, email, userName
                        FROM Users
                        WHERE email = @Input OR userName = @Input;`
        const pool = await getConnectionPool();
        const result = await pool
            .request()
            .input("Input", sql.VarChar, userInput)
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