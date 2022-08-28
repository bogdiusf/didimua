import React, { useContext } from "react";
import Sidebar from "./Sidebar";
import { Context } from "../context/Context";
import { createUseStyles } from "react-jss";
import brandLogo from "../../assets/diana_logo.png";
import NavbarStyles from "./Navbar.styles";

const useStyles = createUseStyles(NavbarStyles);

const Navbar = () => {
  const { isNavbarToggled, setIsNavbarToggled } = useContext(Context);

  const classes = useStyles();

  const handleClickBurgerMenu = () => {
    setIsNavbarToggled(!isNavbarToggled);
  };

  console.log(isNavbarToggled);

  return (
    <>
      <nav className={classes.navbar}>
        <div className={classes.navLeftSide}>
          <img src={brandLogo} className={classes.brandLogo} alt="brand-logo" />
          <span>Perfection as make up</span>
        </div>
        <div className={classes.navRightSide} onClick={handleClickBurgerMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
      {isNavbarToggled && <Sidebar />}
    </>
  );
};

export default Navbar;
