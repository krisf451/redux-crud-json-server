import React from "react";

import { NavLink } from "react-router-dom";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Header = () => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Navigation</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <NavLink className="navlink" to="/">
            Home
          </NavLink>
          <NavLink className="navlink" to="/add">
            Add User
          </NavLink>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Header;
