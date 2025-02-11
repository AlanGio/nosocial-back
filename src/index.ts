import "dotenv/config";
import { MongoDBSocketClient } from "./db/mongo_db_server_client.js";

await MongoDBSocketClient.getInstance();
import server from "./server/server.js";

const port = process.env.PORT || 5006;

server.listen(port, function () {
  console.log("Server running in Port 3000!");
});
