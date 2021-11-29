const path = require('path');
const router = require('express').Router();

//homepage
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/html/index.html'));
});

//exercise page
router.get('/exercise', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/html/exercise.html'));
});

//stats page
router.get('/stats', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/html/stats.html'));
});

module.exports = router;
