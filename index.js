const mongoConnector = require('./lib/mongo-connector');

const dbURL = "mongodb://localhost:27017";
const dbName = "lmb"; // Enter your DB name

async function execute(dbClient) {
    let db = await dbClient.db(dbName);
    let oppos = await db.collection("opportunities").find({}).toArray();
    for (let opp of oppos) {
        console.log("Name " + opp.opportunityName);
    }
}

(async () => {
    let dbClient = await mongoConnector.getConnection(dbURL);
    await execute(dbClient);
    mongoConnector.closeConnection();
})();


