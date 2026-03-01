import mongoose from 'mongoose';

const envUri = process.env.MONGODB_URI?.trim();
const hasValidScheme =
  typeof envUri === 'string' &&
  (envUri.startsWith('mongodb://') || envUri.startsWith('mongodb+srv://'));

const MONGODB_URI = hasValidScheme
  ? envUri
  : 'mongodb://127.0.0.1:27017/hotel-booking';

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectDB;
