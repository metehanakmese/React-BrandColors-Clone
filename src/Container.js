import React, { useContext } from "react";
import Copied from "./components/Copied/Copied";
import MainContext from "./Context/MainContext";

function Container() {
  const { copied } = useContext(MainContext);

  return <>{copied && <Copied color={copied} />}</>;
}

export default Container;
