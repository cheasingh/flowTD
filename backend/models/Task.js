const { model, Schema } = require("mongoose");

const taskSchema = new Schema({
  taskname: String,
  createdAt: String,
  status: {
    completed: Boolean,
    updatedOn: String,
  },
});

module.exports = model("Task", taskSchema);
