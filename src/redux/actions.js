import axios from "axios";
import {
  OPEN_CLOSE_SIDE_BAR,
  GET_USER_LEAD_LIST,
  UPDATE_CALL_STATUS,
  CLOSE_ALERT_BOX,
  OPEN_ALERT_BOX,
  OPEN_SNACKBAR_NOTIFICATION,
  CLOSE_SNACKBAR_NOTIFICATION,
  PAGE_CHANGE,
  ROWS_PER_PAGE,
  UPDATE_USER_LOGIN_DETAILS,
} from "./type";
import { PlaylistAddOutlined } from "@mui/icons-material";
import useHistory from "use-history";
const history=useHistory
export const handleSideBar = (payload) => ({
  type: OPEN_CLOSE_SIDE_BAR,
  payload: payload,
});

export const saveUserLeadList = (payload) => ({
  type: GET_USER_LEAD_LIST,
  payload: payload,
});

export const updateCallStatus = (payload) => ({
  type: UPDATE_CALL_STATUS,
  payload: payload,
});

export const openAlertBox = (payload) => ({
  type: OPEN_ALERT_BOX,
  payload: payload,
});

export const closeAlertBox = () => ({
  type: CLOSE_ALERT_BOX,
  payload: false,
});

export const openSnackBarNotification = (payload) => ({
  type: OPEN_SNACKBAR_NOTIFICATION,
  payload: payload,
});

export const closeSnackBarNotification = () => ({
  type: CLOSE_SNACKBAR_NOTIFICATION,
  payload: false,
});

export const handlePageChange = (payload) => ({
  type: PAGE_CHANGE,
  payload: payload,
});
export const handleRowPerPage = (payload) => ({
  type: ROWS_PER_PAGE,
  payload: payload,
});

export const updateUserLoginDetails = (payload) => ({
  type: UPDATE_USER_LOGIN_DETAILS,
  payload: payload,
});

export const getUserLeadData =
  (page = 1, rowsPerPage = 10) =>
  async (dispatch) => {
    try {
      const response = await axios.get(
        "http://localhost:5001/usersLeads/getUserLeadList",
        {
          params: {
            page: page,
            rowsPerPage: rowsPerPage, // Assuming pageSize is used on the server side
          },
        }
      );
      const payload = response?.data?.data;
      console.log(payload, "payload");
      dispatch(saveUserLeadList(payload));
    } catch (error) {
      console.error("Error fetching user leads:", error);
    }
  };

export const handleCallStatus = (payload) => async (dispatch) => {
  const data = {
    _id: payload._id,
    callUser: !payload.callUser,
  };

  try {
    const response = await axios.post(
      "http://localhost:5001/usersLeads/updateCallUser",
      data
    );

    if (response?.data?.success) {
      const notification = {
        isOpen: true,
        notificationMessage: "User Lead Updated Successfully!",
        notificationType: "success",
      };
      dispatch(openSnackBarNotification(notification));
      dispatch(getUserLeadData());
    } else {
      const notification = {
        isOpen: true,
        notificationMessage: "Something Went Wrong!",
        notificationType: "error",
      };
      dispatch(openSnackBarNotification(notification));
    }
  } catch (error) {
    console.error("Error Updating User Leads:", error);
  }
};

export const handleStudentStatus = (payload) => async (dispatch) => {
  const data = {
    _id: payload.row._id,
    studentStatus: payload.event.target.value,
  };
 console.log(data,"check")
  try {
    const response = await axios.post(
      "http://localhost:5001/usersLeads/updateStudentStatus",
      data
    );
    if (response?.data?.success) {
      const notification = {
        isOpen: true,
        notificationMessage: "User Lead Updated  Successfully!",
        notificationType: "success",
      };
      dispatch(openSnackBarNotification(notification));
      dispatch(getUserLeadData());
    } else {
      const notification = {
        isOpen: true,
        notificationMessage: "Something Went Wrong!",
        notificationType: "error",
      };
      dispatch(openSnackBarNotification(notification));
    }
  } catch (error) {
    console.error("Error Updating User Leads:", error);
  }
};

export const getUserDetails = (payload) => async (dispatch) => {
  // Convert payload to a valid ObjectId
  const userId = payload;

  try {
    const response = await axios.get(
      `http://localhost:5001/userDetails/${userId}`
    );
    if (response?.data?.success) {
      const notification = {
        isOpen: true,
        notificationMessage: "Logged in Successful!",
        notificationType: "success",
      };
      dispatch(openSnackBarNotification(notification));
      dispatch(updateUserLoginDetails(response?.data?.data));
      history.push('/welcome')
    } else {
      const notification = {
        isOpen: true,
        notificationMessage: "Unable to Login!",
        notificationType: "error",
      };
      dispatch(openSnackBarNotification(notification));
    }
  } catch (error) {
    console.error("Error fetching user details:", error);
  }
};
