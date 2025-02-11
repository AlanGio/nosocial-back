import application_controller from './application_controller.js';
import { insertPost, listPosts } from '../db/movies_model.js';
const post = async (req) => {
  const movie = { ...req.body, created_at: new Date() };
  const id = await insertPost(movie);
  return { response: { insertedId: id } };
};
const index = async () => {
  const movies = await listPosts();
  return { response: { movies: movies } };
};
export default { ...application_controller, post, index };
