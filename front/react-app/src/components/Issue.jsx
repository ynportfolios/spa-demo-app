import React, { useState } from "react";
import PropTypes from "prop-types";
import EditForm from "./EditForm";
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

const Issue = ({
  issue,
  deleteIssue,
  setShowIssue,
  setIsOpenShowIssueDialog,
  updateIssue,
}) => {
  const classes = useStyles();

  const [editIssueName, setEditIssueName] = useState(null);
  const [isOpenEditIssueForm, setIsOpenEditIssueForm] = useState(false);

  return (
    <Grid item xs={12} md={6} lg={3}>
      <Card>
        <CardContent>
          <Typography variant="h3" className={classes.typography}>
            {issue.name}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            onClick={() => {
              setShowIssue(issue);
              setIsOpenShowIssueDialog(true);
            }}
          >
            SHOW
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              !editIssueName && setEditIssueName(issue.name);
              setIsOpenEditIssueForm(!isOpenEditIssueForm);
            }}
          >
            EDIT
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => deleteIssue(issue.id)}
          >
            DELETE
          </Button>
        </CardActions>
      </Card>
      {isOpenEditIssueForm && (
        <EditForm
          editIssueId={issue.id}
          editIssueName={editIssueName}
          setEditIssueName={setEditIssueName}
          updateIssue={updateIssue}
        />
      )}
    </Grid>
  );
};
Issue.propTypes = {
  issue: PropTypes.object,
  deleteIssue: PropTypes.func,
  setShowIssue: PropTypes.func,
  setIsOpenShowIssueDialog: PropTypes.func,
  updateIssue: PropTypes.func,
};

export default Issue;
