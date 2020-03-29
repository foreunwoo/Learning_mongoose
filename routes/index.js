var express = require('express');
var router = express.Router();
const User = require('../schemas/user');

router.get('/', function (req, res, next) {
  User.find() // 모두 가져오기
    .then((users) => {
      res.render('mongoose', { title: 'Express', users: [] });
    })
    .catch((error) => {
      console.error(error);
      next(error);
    });
});

module.exports = router;