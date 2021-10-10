import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/actions";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const AddUserForm = () => {
  const { push } = useHistory();
  let dispatch = useDispatch();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    contact: "",
  });
  const { firstName, lastName, email, address, contact } = user;

  const [error, setError] = useState("");
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("clicked");
    if (!firstName || !lastName || !address || !contact || !email) {
      setError("Please Input all input fields");
    } else {
      dispatch(addUser(user));
      push("/");
      setError("");
    }
  };

  return (
    <div className="add-container">
      <h2>Add User</h2>
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
          value={firstName}
          name="firstName"
          type="text"
          id="standard-basic"
          label="First Name"
          variant="standard"
        />
        <TextField
          onChange={handleChange}
          value={lastName}
          name="lastName"
          type="text"
          id="standard-basic"
          label="Last Name"
          variant="standard"
        />
        <TextField
          onChange={handleChange}
          value={email}
          name="email"
          type="email"
          id="standard-basic"
          label="Email"
          variant="standard"
        />
        <TextField
          onChange={handleChange}
          value={contact}
          name="contact"
          type="number"
          id="standard-basic"
          label="Contact"
          variant="standard"
        />
        <TextField
          onChange={handleChange}
          value={address}
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
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default AddUserForm;
