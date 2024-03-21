import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeAlertBox } from "../redux/actions";

export const AlertBox = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.alertDialogBox?.isOpen);
  const title = useSelector((state) => state.alertDialogBox?.title);
  const alertMessage = useSelector((state) => state.alertDialogBox?.alertMessage);
  const onAgree = useSelector((state) => state.alertDialogBox?.onAgree);
  const onDisagree = useSelector((state) => state.alertDialogBox?.onDisagree);

  const handleClose = () => {
    dispatch(closeAlertBox(false));
  };

  return (
    <>
      <React.Fragment>
        {isOpen ? (
          <Dialog
            open={isOpen}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            sx={{
              "& .MuiDialog-container": {
                "& .MuiPaper-root": {
                  width: "100%",
                  maxWidth: "500px",
                  borderRadius: "8px",
                  minHeight: "150px"
                },
              },
            }}
          >
            <DialogTitle id="alert-dialog-title">
              {title}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {alertMessage}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={onDisagree}>Disagree</Button>
              <Button onClick={onAgree} autoFocus variant="contained">
                Agree
              </Button>
            </DialogActions>
          </Dialog>
        ) : (
          <></>
        )}
      </React.Fragment>
    </>
  );
};
