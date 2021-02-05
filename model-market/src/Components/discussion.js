import React, { useState } from "react";

import {
  makeStyles,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';

import IconButton from "@material-ui/core/IconButton";
import { Brightness3, WbSunny } from "@material-ui/icons";
import Button from '@material-ui/core/Button';
import Comments from "./comments";
import { CssBaseline, Grid } from "@material-ui/core";
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';


const useStyles = makeStyles({
  spacing: {
    marginTop: "50px"
  },
  header: {
    marginTop: "40px",
    fontWeight: 600
  },
  button: {
    color: "orange"
  }
});
export default function Discuss() {
    const classes = useStyles();
  return (
    <ThemeProvider>
      <CssBaseline>
        <Container>
          <Grid container justify="space-between" className={classes.spacing}>
            <Grid item>
              <Typography className={classes.header} variant="h4" gutterBottom>
                Comments
              </Typography>
            </Grid>

            <Grid item>

            </Grid>
          </Grid>
          <TextField
          id="outlined-multiline-static"
          label="Post Comment"
          multiline
          rows={2}
          variant="outlined"
          fullWidth
          InputProps={{
            startAdornment: (
                <IconButton>
              <InputAdornment position='end'>
              <Button variant="outlined" color="secondary">
        Submit
      </Button>
              </InputAdornment>
              </IconButton>
            ),
          }}
        />
          <Comments />
        </Container>
      </CssBaseline>
    </ThemeProvider>
  );
}
