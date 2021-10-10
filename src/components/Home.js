import React, { useEffect } from "react";
import { useHistory } from "react-router";

//newer way
import { useDispatch, useSelector } from "react-redux";
//old way
// import { connect } from "react-redux";

import { loadUsers, deleteUser, editUser } from "../redux/actions";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Home = (/*Dont need props with useDispatch */) => {
  const { push } = useHistory();
  //   const { loadUsers } = props;

  //useDispatch to get actions
  let dispatch = useDispatch();
  //useSelector to get state
  const { users } = useSelector((state) => state.users);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete the user?")) {
      dispatch(deleteUser(id));
    }
  };

  useEffect(() => {
    // loadUsers();
    dispatch(loadUsers());
  }, [dispatch]);
  return (
    <div>
      <div className="add-button-container">
        <Button
          onClick={() => push("/add")}
          align="center"
          variant="contained"
          color="primary"
        >
          Add User
        </Button>
      </div>

      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 900, marginTop: "100px" }}
          aria-label="customized table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Contact</StyledTableCell>
              <StyledTableCell align="center">Address</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users &&
              users.map((user) => (
                <StyledTableRow key={user.id}>
                  <StyledTableCell component="th" scope="row">
                    {`${user.firstName} ${user.lastName}`}
                  </StyledTableCell>
                  <StyledTableCell align="center">{user.email}</StyledTableCell>
                  <StyledTableCell align="center">
                    {user.contact}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {user.address}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <ButtonGroup
                      variant="contained"
                      aria-label="outlined primary button group"
                    >
                      <Button
                        onClick={() => handleDelete(user.id)}
                        style={{ marginRight: "5px" }}
                        color="secondary"
                      >
                        Delete
                      </Button>
                      <Button
                        onClick={() => push(`/edit/${user.id}`)}
                        color="primary"
                      >
                        Edit
                      </Button>
                    </ButtonGroup>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default Home;
//export for old way of connecting redux
// export default connect(null, { loadUsers })(Home);
