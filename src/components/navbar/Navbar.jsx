import React, { useContext } from "react";
import { createUseStyles } from "react-jss";
import brandLogo from "../../assets/diana_logo.png";
import NavbarStyles from "./Navbar.styles";

const useStyles = createUseStyles(NavbarStyles);

const Navbar = () => {
  const classes = useStyles();

  return (
    <nav className={classes.navbar}>
      <div className={classes.navLeftSide}>
        <img src={brandLogo} className={classes.brandLogo} alt="brand-logo" />
        <span>Perfection as make up</span>
      </div>
      <div className={classes.navRightSide}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
