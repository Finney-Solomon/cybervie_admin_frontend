import { Snackbar, SnackbarContent } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeSnackBarNotification } from "../redux/actions";

export const SnackBarNotification = () => {
  const dispatch = useDispatch();

  const isOpen = useSelector((state) => state.snackBarNotification?.isOpen);
  const notificationMessage = useSelector(
    (state) => state.snackBarNotification?.notificationMessage
  );
  const notificationType = useSelector(
    (state) => state.snackBarNotification?.notificationType
  );

  const handleCloseSnackBar = () => {
    dispatch(closeSnackBarNotification());
  };

  const getSnackbarContentProps = () => {
    let backgroundColor;

    switch (notificationType) {
      case "success":
        backgroundColor = "#176b1a"; // Green background for success
        break;
      case "error":
        backgroundColor = "#c52f24"; // Red background for error
        break;
      case "warning":
        backgroundColor = "#db9020"; // Orange background for warning
        break;
      default:
        backgroundColor = "#018dff"; // Default blue background
        break;
    }
    return {
      style: { backgroundColor },
    };
  };

  return (
    <>
      {isOpen ? (
        <Snackbar
          open={isOpen}
          autoHideDuration={5000}
          onClose={handleCloseSnackBar}
        >
          <SnackbarContent
            message={notificationMessage}
            sx={{ fontWeight: "800em" }}
            {...getSnackbarContentProps()}
          />
        </Snackbar>
      ) : (
        <></>
      )}
    </>
  );
};
