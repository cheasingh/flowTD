import React from "react";
import { useMutation } from "@apollo/client";
import { GET_ALL_TASK, DELETE_TASK } from "../utils/gql";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

function DeleteTask({ taskId }) {
  const [removeTaskMutation] = useMutation(DELETE_TASK, {
    // refetchQueries: [{ query: GET_ALL_TASK }],
    update: (cache) => {
      const existingTodos = cache.readQuery({ query: GET_ALL_TASK });
      const newTodo = existingTodos.getTasks.filter((t) => t.id !== taskId);
      cache.writeQuery({
        query: GET_ALL_TASK,
        data: { getTasks: newTodo },
      });
    },
  });

  const onClick = () => {
    removeTaskMutation({ variables: { id: taskId } });
  };

  return (
    <IconButton onClick={onClick} color="secondary">
      <DeleteIcon fontSize="small" />
    </IconButton>
  );
}

export default DeleteTask;
