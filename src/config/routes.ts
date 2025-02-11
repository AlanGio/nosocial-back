import express from "express";
const router = express.Router();

import bodyParser from "body-parser";
var jsonParser = bodyParser.json();

import movies_controller from "../controllers/movies_controller.js";

router.post(
  "/movies",
  jsonParser,
  movies_controller.wrapped_method(movies_controller.post)
);

router.get(
  "/movies",
  movies_controller.wrapped_method(movies_controller.index)
);

export default router;
