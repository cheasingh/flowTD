import React from "react";
import { useMutation } from "@apollo/client";
import { GET_ALL_TASK, DELETE_TASK } from "../utils/gql";
import { Button } from "antd";
import { DeleteTwoTone } from "@ant-design/icons";

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
    <Button
      type="text"
      icon={<DeleteTwoTone twoToneColor="#ff0000" />}
      onClick={onClick}
    />
  );
}

export default DeleteTask;
