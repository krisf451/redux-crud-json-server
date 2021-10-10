import React, { useState, useEffect } from "react";

import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { getSingleUser, updateUser } from "../redux/actions";

const EditUserForm = () => {
  const { push } = useHistory();
  const { id } = useParams();
  let dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);

  const [error, setError] = useState("");
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    contact: "",
  });
  const { firstName, lastName, email, address, contact } = state;

  useEffect(() => {
    dispatch(getSingleUser(id));
  }, []);

  useEffect(() => {
    if (user) {
      setState({ ...user });
    }
  }, [user]);

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("clicked");
    if (!firstName || !lastName || !address || !contact || !email) {
      setError("Please Input all input fields");
    } else {
      dispatch(updateUser(state, id));
      push("/");
      setError("");
    }
  };
  return (
    <div className="add-container">
      <h2>Edit User</h2>
      {error && <h3 style={{ color: "red" }}>{error}</h3>}
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          onChange={handleChange}
          value={firstName || ""}
          name="firstName"
          type="text"
          id="standard-basic"
          label="First Name"
          variant="standard"
        />
        <TextField
          onChange={handleChange}
          value={lastName || ""}
          name="lastName"
          type="text"
          id="standard-basic"
          label="Last Name"
          variant="standard"
        />
        <TextField
          onChange={handleChange}
          value={email || ""}
          name="email"
          type="email"
          id="standard-basic"
          label="Email"
          variant="standard"
        />
        <TextField
          onChange={handleChange}
          value={contact || ""}
          name="contact"
          type="number"
          id="standard-basic"
          label="Contact"
          variant="standard"
        />
        <TextField
          onChange={handleChange}
          value={address || ""}
          name="address"
          type="text"
          id="standard-basic"
          label="Address"
          variant="standard"
        />
        <Button
          type="submit"
          align="center"
          variant="contained"
          color="primary"
        >
          Update
        </Button>
      </Box>
    </div>
  );
};

export default EditUserForm;
