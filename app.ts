import Database from "./db/db.js";
import Server from "./server.js";
//-------------------------------------------------------------------

Database.connect();
new Server();
