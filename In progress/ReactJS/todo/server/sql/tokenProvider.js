const { EnvironmentCredential } = require('@azure/identity');
const credential = new EnvironmentCredential();

//Gets access token
async function getToken() {
    const tokenResponse = await credential.getToken('https://database.windows.net/.default');
    return tokenResponse.token;
}

module.exports = { getToken };