const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  exercise: [
    {
      type: {
        type: String,
        required: 'Enter Exercise Type',
      },
      name: {
        type: String,
        required: 'Enter Exercise Name',
      },
      duration: {
        type: Number,
        required: 'Enter Time (minutes)',
      },
      weight: {
        type: Number,
      },
      distance: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      reps: {
        type: Number,
      },
    },
  ],
  day: {
    type: Date,
    default: Date.now,
  },
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
