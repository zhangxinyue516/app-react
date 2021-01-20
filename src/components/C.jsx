import React, { useContext } from "react";
import { context } from "../components/provider";

function C() {
  const { name } = useContext(context);
  return (
    <div>
      <h1>组件</h1>
      <h5>{name}</h5>
    </div>
  );
}

export default C;
