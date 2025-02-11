import application_controller from './application_controller.js';
import { insertPost, listPosts } from '../db/posts_model.js';
const post = async (req) => {
    const post = { ...req.body, created_at: new Date() };
    const id = await insertPost(post);
    return { response: { insertedId: id } };
};
const index = async () => {
    const posts = await listPosts();
    return { response: { posts } };
};
export default { ...application_controller, post, index };
