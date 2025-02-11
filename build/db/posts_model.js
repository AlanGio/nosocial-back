import { MongoDBSocketClient } from './mongo_db_server_client.js';
export async function insertPost(post) {
    const client = await MongoDBSocketClient.getInstance();
    const result = await client
        .db()
        .collection('posts')
        .insertOne(post);
    return result.insertedId;
}
export async function listPosts() {
    const client = await MongoDBSocketClient.getInstance();
    const posts = await client
        .db()
        .collection('posts')
        .find()
        .sort('created_at', -1)
        .limit(10)
        .toArray();
    return posts;
}
