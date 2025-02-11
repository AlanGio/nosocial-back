import { MongoClient } from 'mongodb';

export class MongoDBSocketClient {
  private static _innerClient: MongoClient;

  public static async getInstance(): Promise<MongoClient> {
    if (!MongoDBSocketClient._innerClient) {
      MongoDBSocketClient._innerClient = new MongoClient(process.env.DB_URL!);
      await MongoDBSocketClient._innerClient.connect();
      console.log('Connected successfully to server');
    }
    return this._innerClient;
  }
}
