import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import compression from "compression";
import router from "../config/routes.js";

const server = express();

server.use(cors());
server.options("*", cors());

router.use(compression());

server.use(bodyParser.json({ limit: "50mb" }));
server.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

server.use("/", router);

export default server;
