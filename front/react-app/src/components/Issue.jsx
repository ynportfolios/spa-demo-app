import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  typography: {
    overflowWrap: "break-word",
  },
}));

const Issue = ({ issues }) => {
  const classes = useStyles();

  return (
    <Grid container justify="center" spacing={2}>
      {issues.map((issue) => (
        <Grid item key={issue.id} xs={12} md={6} lg={3}>
          <Card>
            <CardContent>
              <Typography variant="h3" className={classes.typography}>
                {issue.name}
                {console.log(issues)}
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" color="primary">
                EDIT
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
Issue.propTypes = {
  issues: PropTypes.array,
};

export default Issue;
