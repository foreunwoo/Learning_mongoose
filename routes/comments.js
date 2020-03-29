var express = require('express');
var Comment = require('../schemas/comment');

var router = express.Router();

// GET /comments/:id
router.get('/:id', function (req, res, next) {
  Comment.find({ commenter: req.params.id })
    .then((comments) => {
      res.status(201).json(comments);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});

router.post('/', function (req, res, next) {
  const post = new Comment({
    commenter: req.body.id,
    comment: req.body.comment,
  });
  post.save()
    .then((result) => {
    res.status(201).json(result);
    })
    .catch((err) => {
    console.error(err);
    next(err);
    });
});

router.patch('/:id', function (req, res, next) {
  Comment.update({ // update({ 조건절 }, { 내용 }) sequelize랑 반대
    _id: req.params.id,
  }, {
    comment: req.body.comment,
  })
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});

router.delete('/:id', function (req, res, next) {
  Comment.remove({ _id: req.params.id })
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});

module.exports = router;