// import React, { useState, useEffect } from "react";
// import axios from "axios";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: "lightgray",
  },
}));

export default function Todo() {
  const classes = useStyles();
  return (
    <Grid container justify="center" spacing={2}>
      <Grid item xs={12} md={6} lg={3}>
        <Paper className={classes.paper}>①</Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <Paper className={classes.paper}>②</Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <Paper className={classes.paper}>③</Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <Paper className={classes.paper}>④</Paper>
      </Grid>
    </Grid>
  );
}
