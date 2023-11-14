import "reflect-metadata";
import Database from "./db/db.js";
import Server from "./server.js";
//-------------------------------------------------------------------
new Server();
Database.connect();
