import React from "react";
import Todo from "./components/Todo";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "1366px",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Todo />
    </div>
  );
};

export default App;
