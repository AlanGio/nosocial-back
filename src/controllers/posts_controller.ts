import { Request } from 'express';
import application_controller from './application_controller.js';
import { ObjectId } from 'mongodb';
import { insertPost, listPosts } from '../db/posts_model.js';
import { Post } from '../types/post.js';

const post = async (req: Request) => {
  const post: Post = { ...req.body, created_at: new Date() };
  const id: ObjectId = await insertPost(post);
  return { response: { insertedId: id } };
};

const index = async () => {
  const posts: Post[] = await listPosts();
  return { response: { posts } };
};

export default { ...application_controller, post, index };
