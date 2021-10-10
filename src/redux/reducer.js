import {
  GET_USERS,
  DELETE_USER,
  ADD_USER,
  GET_SINGLE_USER,
  UPDATE_USER,
} from "./actions";

const initialState = {
  users: [],
  activeUser: {},
  loading: true,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case DELETE_USER:
    case ADD_USER:
    case UPDATE_USER:
      return {
        ...state,
        loading: false,
      };
    case GET_SINGLE_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default usersReducer;
