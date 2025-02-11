import { MongoDBSocketClient } from './mongo_db_server_client.js';
export async function insertPost(movie) {
  const client = await MongoDBSocketClient.getInstance();
  const result = await client.db().collection('movies').insertOne(movie);
  return result.insertedId;
}
export async function listPosts() {
  const client = await MongoDBSocketClient.getInstance();
  const movies = await client
    .db()
    .collection('movies')
    .find()
    .sort('created_at', -1)
    .limit(10)
    .toArray();
  return movies;
}
