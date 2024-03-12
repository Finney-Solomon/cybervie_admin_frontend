import {
  OPEN_CLOSE_SIDE_BAR,
  GET_USER_LEAD_LIST,
  CLOSE_ALERT_BOX,
  OPEN_ALERT_BOX,
  CLOSE_SNACKBAR_NOTIFICATION,
  OPEN_SNACKBAR_NOTIFICATION,
} from "./type";

const initialState = {
  userLeadList: [],

  alertDialogBox: {
    isOpen: false,
    title: "",
    alertMessage: "",
    onAgree: () => {},
    onDisagree: () => {},
  },

  snackBarNotification: {
    isOpen: false,
    notificationType: "", // error, success ,warning etc.
    notificationMessage: "",
  },

  notification: false,
  notificationData: "",
  mobileView: false,
  sideBarOpenClose: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_USER_LEAD_LIST:
      return {
        ...state,
        userLeadList: payload,
      };
    case OPEN_CLOSE_SIDE_BAR:
      return {
        ...state,
        sideBarOpenClose: payload,
      };

    case OPEN_ALERT_BOX:
      return {
        ...state,
        alertDialogBox: {
          isOpen: true,
          title: payload.title,
          alertMessage: payload.alertMessage,
          onAgree: payload.onAgree,
          onDisagree: payload.onDisagree,
        },
      };

    case CLOSE_ALERT_BOX:
      return {
        ...state,
        alertDialogBox: {
          title: "",
          content: "",
          onAgree: () => {},
          onDisagree: () => {},
          isOpen: false,
        },
      };

    case OPEN_SNACKBAR_NOTIFICATION:
      return {
        ...state,
        snackBarNotification: {
          isOpen: true,
          notificationType: payload.notificationType,
          notificationMessage: payload.notificationMessage,
        },
      };

    case CLOSE_SNACKBAR_NOTIFICATION:
      return {
        ...state,
        snackBarNotification: {
          isOpen: false,
          notificationMessage: "",
        },
      };
    default:
      return state;
  }
};
