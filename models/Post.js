const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },

// date:{
//   type:Date,
//   default:Date.now


// }

  // imageUrl: {
  //   type: String,
  //   required: true
  // },
  // userId: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'User',
  //   required: true
  // }
});

module.exports = mongoose.model('Posts', PostSchema);