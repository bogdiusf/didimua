import React, { useState } from "react";
import { Context } from "./Context";

const ContextProvider = ({ children }) => {
  const [isNavbarToggled, setIsNavbarToggled] = useState(false);

  const data = { isNavbarToggled, setIsNavbarToggled };

  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export default ContextProvider;
