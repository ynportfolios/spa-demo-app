import React from "react";
import Todo from "./components/Todo";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "1200px",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Todo />
    </div>
  );
}
