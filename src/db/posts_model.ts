import { ObjectId, InsertOneResult } from 'mongodb';
import { Post } from '../types/post.js';
import { MongoDBSocketClient } from './mongo_db_server_client.js';

export async function insertPost(post: Post): Promise<ObjectId> {
  const client = await MongoDBSocketClient.getInstance();
  const result: InsertOneResult = await client
    .db()
    .collection<Post>('posts')
    .insertOne(post);
  return result.insertedId;
}

export async function listPosts(): Promise<Post[]> {
  const client = await MongoDBSocketClient.getInstance();
  const posts: Post[] = await client
    .db()
    .collection<Post>('posts')
    .find()
    .sort('created_at', -1)
    .limit(10)
    .toArray();
  return posts;
}
