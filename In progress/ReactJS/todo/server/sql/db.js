const sql = require('mssql');
const { EnvironmentCredential } = require('@azure/identity');
const credential = new EnvironmentCredential();

let poolPromise = null;
let lastTokenRefreshTime = null;
const TOKEN_EXPIRATION_BUFFER_MS = 55 * 60 * 1000; //Refreshed AD token 5 mins before expiration

async function getAccessToken() {
    const tokenResponse = await credential.getToken('https://database.windows.net/.default');
    lastTokenRefreshTime = Date.now();
    return tokenResponse.token;
}

async function createPoolWithToken(token) {
    const config = {
        server: process.env.SQL_SERVER,
        database: process.env.SQL_DB,
        options: {
            encrypt: true
        },
        authentication: {
            type: 'azure-active-directory-access-token',
            options: {
                token: token
            }
        }
    };

    const pool = new sql.ConnectionPool(config);
    await pool.connect();
    console.log('✅ New connection pool created with Managed Identity');
    return pool;
}

async function getConnectionPool() {
    try {

        const now = Date.now();

        if (
            !poolPromise ||
            !lastTokenRefreshTime ||
            now - lastTokenRefreshTime > TOKEN_EXPIRATION_BUFFER_MS
        ) {
            console.log('🔄 Refreshing token and recreating connection pool (Managed Identity)');
            const token = await getAccessToken();
            poolPromise = createPoolWithToken(token);
        }

        return poolPromise;
    } catch (err) {
        console.log('❌ Unable to obtain fresh token: ', err)
    }
}

module.exports = {
    sql,
    getConnectionPool,
}