import {
  OPEN_CLOSE_SIDE_BAR,
  GET_USER_LEAD_LIST,
  CLOSE_ALERT_BOX,
  OPEN_ALERT_BOX,
  CLOSE_SNACKBAR_NOTIFICATION,
  OPEN_SNACKBAR_NOTIFICATION,
  PAGE_CHANGE,
  ROWS_PER_PAGE,
  UPDATE_USER_LOGIN_DETAILS,
} from "./type";

const initialState = {
  userLead: {
    userLeadList: [],
    currentPage: 0,
    rowsPerPage: 10,
    totalPages: 0,
    totalRecords: 0,
  },

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

  userLogin: {
    name: "",
    email: "",
    phoneNumber: "",
    userType: "",
  },
  mobileView: false,
  sideBarOpenClose: false,
  isLoading: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_USER_LEAD_LIST:
      return {
        ...state,
        userLead: {
          userLeadList: payload.data,
          currentPage: payload.currentPage,
          rowsPerPage: payload.rowsPerPage,
          totalPages: payload.totalPages,
          totalRecords: payload.totalRecords,
        },
      };

    case PAGE_CHANGE:
      return {
        ...state,
        userLead: {
          ...state.userLead,
          currentPage: payload,
        },
      };
    case ROWS_PER_PAGE:
      return {
        ...state,
        userLead: {
          ...state.userLead,
          rowsPerPage: payload,
        },
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
    case UPDATE_USER_LOGIN_DETAILS:
      return {
        ...state,
        userLogin: {
          userName: payload.userName,
          email: payload.userName,
          phoneNumber: payload.phoneNumber,
          userType: payload.userType,
        },
      };
    default:
      return state;
  }
};
