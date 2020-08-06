const { gql } = require("apollo-server");

module.exports = gql`
  type Task {
    id: ID!
    taskname: String!
    createdAt: String!
    status: Status
  }

  type Status {
    completed: Boolean
    updatedOn: String
  }

  type Query {
    getTasks: [Task]
    getTask(id: ID!): Task!
  }

  type Mutation {
    addTask(taskname: String!): Task!
    deleteTask(id: ID!): Task!
    completeTask(id: ID!, status: Boolean!): Task!
  }
`;
