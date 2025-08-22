const {sql, getConnectionPool } = require('../sql/db');

//Gets user tasks per user ID
async function getTasks(userID) {
    try {
        var sqlQuery = `SELECT *
                    FROM TaskData
                    WHERE UserID = @IdUser;`
        const pool = await getConnectionPool();
        const result = await pool
            .request()
            .input("IdUser", sql.Int, userID)
            .query(sqlQuery);
        return result.recordset;

    } catch (err) {
        console.error(err);
    }
}

//Adds tasks
async function addTask(userID, taskTitle) {
    try {
        var sqlQuery = `INSERT INTO TaskData(TaskTitle, isComplete, UserID)
                        VALUES (@taskTitle, 0, @IdUser);`
        const pool = await getConnectionPool();
        const result = await pool
            .request()
            .input("IdUser", sql.Int, userID)
            .input("taskTitle", sql.VarChar, taskTitle)
            .query(sqlQuery);
        return result.recordset;

    } catch (err) {
        console.error(err);
    }
}

async function deleteTask(taskID, userID) {
    try {
        var sqlQuery = `DELETE
                        FROM TaskData
                        WHERE taskID = @TaskId AND UserID = @UserId;`
        const pool = await getConnectionPool();
        const result = await pool
            .request()
            .input("UserId", sql.Int, userID)
            .input("TaskId", sql.Int, taskID)
            .query(sqlQuery);
        return result.rowsAffected[0];
    } catch (err) {
        console.error(err);
    }
}

async function updateTaskState(taskId, userId, completeValue) {
    try {
        var sqlQuery = `UPDATE TaskData
	                        SET isComplete = @updatedComplete
                        FROM TaskData
                        WHERE taskID = @taskId AND UserID = @userId;`;
        // var sqlQuery = `BEGIN TRANSACTION;

        //                 -- Updates task data to complete
        //                 UPDATE TaskData
	    //                     SET isComplete = 1
        //                 FROM TaskData
        //                 WHERE taskID = @taskId AND UserID = @userId;

        //                 --Moves data to completed tasks table
        //                 INSERT INTO TaskDataComplete(TaskTitle, TaskDesc, isComplete, UserID)
        //                 SELECT TaskTitle, TaskDesc, isComplete, UserID FROM TaskData
        //                 WHERE taskID = 48 AND UserID = 3 AND isComplete = @updatedComplete;

        //                 -- Deletes existing record in TaskData table
        //                 DELETE
        //                 FROM TaskData
        //                 WHERE taskID = @taskId AND UserID = @userId AND isComplete = @updatedComplete;
        //                 COMMIT;`;
        const pool = await getConnectionPool();
        const result = await pool
            .request()
            .input("userId", sql.Int, userId)
            .input("taskId", sql.Int, taskId)
            .input("updatedComplete", sql.Bit, completeValue)
            .query(sqlQuery);
        return result.rowsAffected[0];
    } catch (err) {
        console.error(err);
    }
};

//get pending tasks
async function getPendingTasks(userID) {
    try {
        var sqlQuery = `SELECT *
                        FROM TaskData
                        WHERE isComplete = 0 AND UserID = @IdUser;`
        const pool = await getConnectionPool();
        const result = await pool
            .request()
            .input("IdUser", sql.Int, userID)
            .query(sqlQuery);
        return result.recordset;

    } catch (err) {
        console.error(err);
    }
}

//get pending tasks
async function getCompletedTasks(userID) {
    try {
        var sqlQuery = `SELECT *
                        FROM TaskData
                        WHERE isComplete = 1 AND UserID = @IdUser;`
        const pool = await getConnectionPool();
        const result = await pool
            .request()
            .input("IdUser", sql.Int, userID)
            .query(sqlQuery);
        return result.recordset;

    } catch (err) {
        console.error(err);
    }
}

module.exports = {
    getTasks,
    addTask,
    deleteTask,
    updateTaskState,
    getPendingTasks,
    getCompletedTasks
}