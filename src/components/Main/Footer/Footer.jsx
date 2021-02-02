import { Link, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import GitHubIcon from '@material-ui/icons/GitHub';

function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <Typography color="primary" variant="body2" align="center">
        {`Copyright ©${new Date().getFullYear()} `}
        <Link color="inherit" href="https://github.com/rohitsinghal07/expenzy" style={{fontWeight:"bold"}}>
           <GitHubIcon />
           Rohit Singhal
        </Link>
        {" (give it a star ⭐ )."}
      </Typography>
    </div>
  );
}

export default Footer;
