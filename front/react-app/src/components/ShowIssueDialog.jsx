import React from "react";
import PropTypes from "prop-types";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";

const ShowIssueDialog = ({ isOpenShowIssueDialog, handleClose, showIssue }) => {
  return (
    <Dialog open={isOpenShowIssueDialog} onClose={handleClose}>
      <DialogTitle>{showIssue.name}</DialogTitle>
    </Dialog>
  );
};
ShowIssueDialog.propTypes = {
  showIssue: PropTypes.object,
  isOpenShowIssueDialog: PropTypes.bool,
  handleClose: PropTypes.func,
};

export default ShowIssueDialog;
