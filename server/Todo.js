const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const todoSchema = new Schema(
  {
    title: {
      type: String,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    dateOfComplete: {
      type: String,
    },
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;
