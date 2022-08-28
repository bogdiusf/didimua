import React from "react";
import { createUseStyles } from "react-jss";
import SidebarStyles from "./Sidebar.styles";

const useStyles = createUseStyles(SidebarStyles);

const Sidebar = () => {
  const classes = useStyles();

  return <div className={classes.sidebar}>Penis</div>;
};

export default Sidebar;
