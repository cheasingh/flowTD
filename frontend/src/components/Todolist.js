import React from "react";
import { useMutation } from "@apollo/client";
import { COMPLETE_TASK, ADD_TASK, GET_ALL_TASK } from "../utils/gql";
import { Checkbox, Input, Form, Button, List, Typography } from "antd";
import DeleteTask from "./DeleteTask";

function Todolist({ tasks }) {
  const [form] = Form.useForm();
  const { Text, Title } = Typography;

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const [createTask] = useMutation(ADD_TASK, {
    update(cache, { data: { addTask } }) {
      const existingTasks = cache.readQuery({ query: GET_ALL_TASK });
      cache.writeQuery({
        query: GET_ALL_TASK,
        data: { getTasks: [addTask, ...existingTasks.getTasks] },
      });
    },
    // refetchQueries: [{ query: GET_ALL_TASK }]
  });

  function onSubmit(e) {
    createTask({ variables: { taskname: e.task } });
    form.resetFields();
  }

  const [completeMutation] = useMutation(COMPLETE_TASK);

  const onToggle = ({ target: { value, checked } }) => {
    completeMutation({
      variables: { id: value, status: checked },
    });
  };

  return (
    <>
      <div style={{ padding: "40px 0 10px" }}>
        <List
          header={
            <div>
              <Text strong>All avialble Todo</Text>
            </div>
          }
          footer={
            <div>
              <Text type="secondary">@flowtd</Text>
            </div>
          }
          bordered
          dataSource={tasks}
          renderItem={(task) => (
            <List.Item>
              <Checkbox
                key={task.id}
                checked={task.status.completed}
                value={task.id}
                onClick={onToggle}
              >
                {task.status.completed === true ? (
                  <Text delete type="secondary">
                    {task.taskname}
                  </Text>
                ) : (
                  <Text>{task.taskname}</Text>
                )}
                <DeleteTask taskId={task.id} />
              </Checkbox>
            </List.Item>
          )}
        />
      </div>
      <Form {...layout} onFinish={onSubmit} form={form} name="control-hooks">
        <Form.Item name="task" rules={[{ required: true }]}>
          <Input placeholder="enter your task" />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default Todolist;
