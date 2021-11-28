const router = require('express').Router();
const Workout = require('../models/workouts');
const { route } = require('./html');

router.get('/api/workouts', (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalD: {
          $sum: '$excercise.duration',
        },
      },
    },
  ])
    .then((workout) => {
      res.json(workout);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post('/api/workouts', (req, res) => {
  Workout.create({})
    .then((workout) => {
      res.json(workout);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put('/api/workouts/:id', (req, res) => {
  Workout.findByIdAndUpdate(
    req.params.id,
    { $push: { exercise: req.body } },
    { new: true, runValidators: true }
  )
    .then((workout) => {
      res.json(workout);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get('/api/workoutes/range', (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalD: {
          $sum: '$exercise.duration',
        },
        totalW: {
          $sum: '$exercise.weight',
        },
      },
    },
  ])
    .limit(20)
    .then((workout) => {
      res.json(workout);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
