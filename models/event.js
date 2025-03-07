import { Schema, model } from 'mongoose';

const eventSchema = new Schema({
  name: { type: String, required: true, unique: true, },
  date: { type: String, required: true, },
  time: { type: String, required: true, },
  location: { type: String, required: true, },


}, {
  timestamps: true

});

export const EventModel = model('event', eventSchema);



























