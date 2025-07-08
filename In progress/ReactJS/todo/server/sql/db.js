const sql = require('mssql');

// Configure db connection
const config = {
    user: process.env.DB_USERNAME,
    password: process.env.DB_PWD,
    server: process.env.DB_SERVER,
    database: 'testdb',
    port: Number(process.env.DB_PORT) || 1433,
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
};

const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log(`Exitoso connect`);
        return pool;
    })
    .catch(err => {
        console.error(`Database connection failed: ${err}`)

        if (err.code) console.error('🔍 Error code:', err.code);
        if (err.name) console.error('🔍 Error name:', err.name);
        if (err.message) console.error('🔍 Error message:', err.message);
        if (err.stack) console.error('🔍 Stack trace:\n', err.stack);
    });

module.exports = {
    sql, poolPromise
}