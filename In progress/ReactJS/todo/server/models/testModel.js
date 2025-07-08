const { sql, poolPromise } = require('../sql/db');

async function getTestData() {
    var query = `SELECT *
                FROM TestData;`;
    try {
        const pool = await poolPromise;
        const result = await pool.request().query(query);
        return result.recordset;
    } catch (err) {
        console.error(`Querying failed: ${err}`);
    }
};

module.exports = {
    getTestData,
}