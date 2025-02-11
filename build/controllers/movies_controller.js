import application_controller from "./application_controller.js";
import { insertMovie, listMovies } from "../db/movies_model.js";
const post = async (req) => {
    const movie = { ...req.body, created_at: new Date() };
    const id = await insertMovie(movie);
    return { response: { insertedId: id } };
};
const index = async () => {
    const movies = await listMovies();
    return { response: { movies: movies } };
};
export default { ...application_controller, post, index };
