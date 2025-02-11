import { Request } from "express";
import application_controller from "./application_controller.js";
import { ObjectId } from "mongodb";
import { insertMovie, listMovies } from "../db/movies_model.js";
import { Movie } from "../types/movie.js";

const post = async (req: Request) => {
  const movie: Movie = { ...req.body, created_at: new Date() };
  const id: ObjectId = await insertMovie(movie);
  return { response: { insertedId: id } };
};

const index = async () => {
  const movies: Movie[] = await listMovies();
  return { response: { movies: movies } };
};

export default { ...application_controller, post, index };
