import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputBase from "@material-ui/core/InputBase";

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
                  alignContent: "center",
                  flexDirection: "column",
                  paddingLeft: "20px",
                }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      name="completeChecked"
                      // style={{ paddingLeft: "20px" }}
                    />
                  }
                  label="Bathing"
                />
                <br />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="completeChecked"
                      // style={{ paddingLeft: "20px" }}
                    />
                  }
                  label="Eating"
                />
                <br />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="completeChecked"
                      // style={{ paddingLeft: "20px" }}
                    />
                  }
                  label="Swimming"
                />
              </div>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

export default Content;
