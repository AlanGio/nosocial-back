import { ObjectId, InsertOneResult } from "mongodb";
import { Movie } from "../types/movie.js";
import { MongoDBSocketClient } from "./mongo_db_server_client.js";

export async function insertMovie(movie: Movie): Promise<ObjectId> {
  const client = await MongoDBSocketClient.getInstance();
  const result: InsertOneResult = await client
    .db()
    .collection<Movie>("movies")
    .insertOne(movie);
  return result.insertedId;
}

export async function listMovies(): Promise<Movie[]> {
  const client = await MongoDBSocketClient.getInstance();
  const movies: Movie[] = await client
    .db()
    .collection<Movie>("movies")
    .find()
    .sort("created_at", -1)
    .limit(10)
    .toArray();
  return movies;
}
