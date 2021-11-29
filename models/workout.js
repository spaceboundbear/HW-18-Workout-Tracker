const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now(),
  },
  exercises: [
    {
      name: {
        type: String,
        trim: true,
        required: 'Enter Exercise name',
      },
      type: {
        type: String,
        trim: true,
        required: 'Enter Exercise type',
      },
      distance: {
        type: Number,
      },
      duration: {
        type: Number,
        required: 'Enter Exercise duration',
      },
      weight: {
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
});

const Workout = mongoose.model('workout', workoutSchema);

module.exports = Workout;
