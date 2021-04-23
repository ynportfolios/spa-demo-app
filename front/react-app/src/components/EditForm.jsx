import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

const EditForm = ({
  editIssueId,
  editIssueName,
  setEditIssueName,
  updateIssue,
}) => {
  return (
    <Grid container justify="center">
      <Grid item xs={12}>
        <TextField
          label="name"
          value={editIssueName}
          onChange={(e) => setEditIssueName(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <Box mt={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => updateIssue(editIssueId, editIssueName)}
          >
            UPDATE
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};
EditForm.propTypes = {
  editIssueId: PropTypes.number,
  editIssueName: PropTypes.string,
  setEditIssueName: PropTypes.func,
  updateIssue: PropTypes.func,
};

export default EditForm;
