import { gql } from "@apollo/client";

export const GET_ALL_TASK = gql`
  query getTasks {
    getTasks {
      id
      taskname
      createdAt
      status {
        completed
        updatedOn
      }
    }
  }
`;

export const COMPLETE_TASK = gql`
  mutation completeTask($id: ID!, $status: Boolean!) {
    completeTask(id: $id, status: $status) {
      id
      taskname
      createdAt
      status {
        completed
        updatedOn
      }
    }
  }
`;

export const ADD_TASK = gql`
  mutation addTask($taskname: String!) {
    addTask(taskname: $taskname) {
      id
      taskname
      createdAt
      status {
        completed
        updatedOn
      }
    }
  }
`;

export const DELETE_TASK = gql`
  mutation deleteTask($id: ID!) {
    deleteTask(id: $id) {
      id
      taskname
      createdAt
      status {
        completed
        updatedOn
      }
    }
  }
`;
