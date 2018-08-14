import * as mongoose from 'mongoose';

export const KidSchema = new mongoose.Schema({
  name: String,
  age: Number,
  points: Number,
  history: Array
});