import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";

// todo: change text box color for newTodo box

function Content() {
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
            <form>
              <TextField
                id="outlined-full-width"
                label="New Todo"
                style={{ margin: 10, width: "400px" }}
                helperText="your new task here!"
                margin="normal"
                variant="outlined"
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
                <div>
                  <FormControlLabel
                    control={<Checkbox name="completeChecked" />}
                    label="Bathing"
                    style={{ width: "248px" }}
                  />
                  <Typography variant="caption" display="inline" style={{}}>
                    11 Aug 20
                  </Typography>
                  <IconButton>
                    <EditIcon fontSize="small" />
                  </IconButton>
                  <IconButton color="secondary">
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </div>

                <div>
                  <FormControlLabel
                    control={<Checkbox name="completeChecked" />}
                    label="Eating"
                    style={{ width: "248px" }}
                  />
                  <Typography variant="caption" display="inline" style={{}}>
                    11 Aug 20
                  </Typography>
                  <IconButton>
                    <EditIcon fontSize="small" />
                  </IconButton>
                  <IconButton color="secondary">
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </div>

                <div>
                  <FormControlLabel
                    control={<Checkbox name="completeChecked" />}
                    label="Sleeping"
                    style={{ width: "248px" }}
                  />
                  <Typography variant="caption" display="inline" style={{}}>
                    11 Aug 20
                  </Typography>
                  <IconButton>
                    <EditIcon fontSize="small" />
                  </IconButton>
                  <IconButton color="secondary">
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

export default Content;
