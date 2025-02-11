import { MongoClient } from 'mongodb';
export class MongoDBSocketClient {
    static _innerClient;
    static async getInstance() {
        if (!MongoDBSocketClient._innerClient) {
            MongoDBSocketClient._innerClient = new MongoClient(process.env.DB_URL);
            await MongoDBSocketClient._innerClient.connect();
            console.log('Connected successfully to server');
        }
        return this._innerClient;
    }
}
