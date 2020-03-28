const mongoose = require('mongoose');

const { Schema } = mongoose;
const { Types: ObjectId } = Schema;
const commentSchema = new Schema({
  commenter: {
    type: ObjectId,
    required: true,
    ref: 'User', // 어떤 스키마의 아이디인지
  },
  comment: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Comment', commentSchema); //mongoose.model(모델명, 스키마, 컬렉션명)
