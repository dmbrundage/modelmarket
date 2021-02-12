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
  const handlecomment = (comment) => {
    console.log(comment);
    props.handleComment(comment)
  }
  const [comment, setComment] = useState('');

  const handleSubmit = event => {

    setComment(event)
    event.preventDefault();
    console.log('Comment:', comment);
    props.filtered_comment_data.push({ "postid": "54", "email": "test.dmb4002@med.cornell.edu", "body": comment, "modelid": props.modelid, "name": "David Brundage" });
    document.getElementById("comment-form").reset();

    fetch('http://localhost:5000/api/comments', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'dmb4002@med.cornell.edu',
        body: comment,
        name: 'David Brundage',
        modelid: props.modelid,
        postid: 54
      })
    })
    //TODO: Instead of grabbing all comments again maybe only grab the specific comment posted and push to state?
    fetch('http://localhost:5000/api/comments')
      .then(res => res.json())
      .then((data) => {
        handlecomment(data)
        console.log(data)
      })
      .catch(console.log)
    //handlecomment(props.filtered_comment_data)

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
          <Comments filtered_comment_data={props.filtered_comment_data} />
        </Container>
      </CssBaseline>
    </ThemeProvider>
  );

}
