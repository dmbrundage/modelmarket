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
  },
  TextField: { color: 'white' }
});


export default function Discuss(props) {

  const [comment, setComment] = useState('');

  const handleSubmit = event => {
    setComment(event)
    event.preventDefault();
    console.log('Comment:', comment);
    props.filtereddata.push({ "avatar": "4", "email": "test.test", "body": comment, "modelid": props.modelid, "name": "test" });
    document.getElementById("comment-form").reset();
    //console.log(commentdata)

    // You should see email and password in console.
    // ..code to submit form to backend here...

  }

  const classes = useStyles();
  //const commentdata = props.filtereddata
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
          <form id="comment-form" onSubmit={handleSubmit}>
            <TextField
              onInput={e => setComment(e.target.value)}
              style={{
                backgroundColor: "white"
              }}
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
                      <Button variant="outlined" color="secondary" type="submit">
                        Submit
      </Button>
                    </InputAdornment>
                  </IconButton>
                ),
              }}


            /></form>
          <Comments commentdata={props.filtereddata} />
        </Container>
      </CssBaseline>
    </ThemeProvider>
  );

}
