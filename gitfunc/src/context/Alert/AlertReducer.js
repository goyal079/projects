import { SET_ALERT, RESET_ALERT } from "../types";

const alertReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_ALERT:
      return {
        type: payload.type,
        msg: payload.msg,
      };
    case RESET_ALERT:
      return null;
    default:
      throw Error("Alert State Logic Error");
  }
};
export default alertReducer;
