import React, { useState } from "react";

import { useMutation } from "@apollo/client";
import { COMPLETE_TASK, ADD_TASK, GET_ALL_TASK } from "../utils/gql";
import moment from "moment";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";

import DeleteTask from "./DeleteTask";

// todo: change text box color for newTodo box

function Content({ tasks }) {
  const [tasklist, setTasklist] = useState();
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
    e.preventDefault();
    createTask({ variables: { taskname: tasklist } });
    setTasklist("");
  }

  const [completeMutation] = useMutation(COMPLETE_TASK);

  const onToggle = (id, checked) => {
    completeMutation({
      variables: { id, status: checked },
    });
  };

  return (
    <div>
      <Grid container justify="center" style={{ marginTop: "50px" }}>
        <Card>
          <CardContent>
            <Typography
              //   className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Today Todo
            </Typography>
            <form onSubmit={onSubmit}>
              <TextField
                id="outlined-full-width"
                label="New Todo"
                style={{ margin: 10, width: "400px" }}
                helperText="your new task here!"
                margin="normal"
                variant="outlined"
                value={tasklist}
                onChange={(e) => setTasklist(e.target.value)}
              />
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  flexDirection: "column",
                  paddingLeft: "20px",
                }}
              >
                {/* each task action */}

                {tasks.map((task) => (
                  <div key={task.id}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="completeChecked"
                          checked={task.status.completed}
                          onChange={(e) => onToggle(task.id, e.target.checked)}
                        />
                      }
                      label={task.taskname}
                      style={{ width: "248px" }}
                    />
                    <Typography variant="caption" display="inline" style={{}}>
                      {moment(task.createdAt).fromNow()}
                    </Typography>
                    <IconButton>
                      <EditIcon fontSize="small" />
                    </IconButton>
                    <DeleteTask taskId={task.id} />
                  </div>
                ))}
              </div>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

export default Content;
