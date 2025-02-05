import mongoose from "mongoose";

const MeetingSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  startTime: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
    required: true,
  },
  location: {
    type: {
      type: String,
      enum: ["Point"],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  maximumGuest: {
    type: Number,
    default: 99,
  },
});

export default new mongoose.model("Meeting", MeetingSchema);
