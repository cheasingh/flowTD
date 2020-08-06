const Task = require("../models/Task");

module.exports = {
  Query: {
    async getTasks() {
      try {
        const tasks = await Task.find();
        return tasks;
      } catch (err) {
        throw new Error(err);
      }
    },

    async getTask(_, { id }) {
      try {
        const task = await Task.findById(id);
        return task;
      } catch (err) {
        throw new Error(err);
      }
    },
  },

  Mutation: {
    async addTask(_, { taskname }) {
      const newTask = new Task({
        taskname,
        createdAt: new Date().toISOString(),
        status: {
          completed: false,
          updatedOn: new Date().toISOString(),
        },
      });

      const task = await newTask.save();
      return task;
    },

    async deleteTask(_, { id }) {
      try {
        const task = await Task.findById(id);
        await task.delete();
        return task;
      } catch (err) {
        throw new Error(err);
      }
    },

    async completeTask(_, { id, status }) {
      try {
        return await Task.findOneAndUpdate(
          { _id: id },
          {
            status: {
              completed: status,
              updatedOn: new Date().toISOString(),
            },
          },
          {
            new: true,
          }
        );
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
