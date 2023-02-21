import { mkdir, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import Database from "better-sqlite3";

const dir = mkdirSync("data");
const db = new Database("data/db.sqlite");

const schemaPath = join("database", "schema.sql");
const schema = readFileSync(schemaPath, "utf-8");
db.exec(schema);

export default db;
