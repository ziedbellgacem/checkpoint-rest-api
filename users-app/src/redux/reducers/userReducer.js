import { GETALLUSERS, GETUSER, TOGGLEFALSE, TOGGLETRUE } from "../types";
const initState = {
  users: [],
  user: {},
  edit: false,
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case GETALLUSERS:
      return {
        ...state,
        users: action.payload.users,
      };
    case GETUSER:
      return {
        ...state,
        user: action.payload,
      };
    case TOGGLETRUE: {
      return {
        ...state,
        edit: true,
      };
    }
    case TOGGLEFALSE: {
      return {
        ...state,
        edit: false,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
