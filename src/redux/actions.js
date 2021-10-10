import axios from "axios";

export const GET_USERS = "GET_USER";
export const DELETE_USER = "DELETE_USER";
export const ADD_USER = "ADD_USER";
export const GET_SINGLE_USER = "GET_SINGLE_USER";
export const UPDATE_USER = "UPDATE_USER";

const getUsers = (users) => ({
  type: GET_USERS,
  payload: users,
});

const getUser = (user) => ({
  type: GET_SINGLE_USER,
  payload: user,
});

const userUpdated = () => {
  return { type: UPDATE_USER };
};
const userDeleted = () => {
  return { type: DELETE_USER };
};

const userAdded = () => {
  return { type: ADD_USER };
};

//here is our thunk action for getting data from our MOCK api
export const loadUsers = () => {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_API}`)
      .then((res) => {
        dispatch(getUsers(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const deleteUser = (id) => {
  return (dispatch) => {
    axios
      .delete(`${process.env.REACT_APP_API}/${id}`)
      .then((res) => {
        dispatch(userDeleted());
        dispatch(loadUsers());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const addUser = (user) => {
  return (dispatch) => {
    axios
      .post(`${process.env.REACT_APP_API}`, user)
      .then((res) => {
        dispatch(userAdded());
        // dispatch(loadUsers());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getSingleUser = (id) => {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_API}/${id}`)
      .then((res) => {
        console.log("response", res);
        dispatch(getUser(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const updateUser = (user, id) => {
  return (dispatch) => {
    axios
      .put(`${process.env.REACT_APP_API}/${id}`, user)
      .then((res) => {
        console.log("response", res);
        dispatch(userUpdated());
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
