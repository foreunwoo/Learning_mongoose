var express = require('express');
var User = require('../schemas/user');

var router = express.Router();

// GET /user
router.get('/', function (req, res, next) {
  User.find({})
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});

router.post('/', function (req, res, next) {
  const user = new User({ // User.create()
    name: req.body.name,
    age: req.body.age,
    married: req.body.married,
  });
  user.save() // new User 저장
    .then((result) => {
      console.log(result);
      res.status(201).json(result);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});

module.exports = router;