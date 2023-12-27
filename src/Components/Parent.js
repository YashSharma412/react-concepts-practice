import React from "react";
import Children from "./Children";

const Parent = () => {
  return (
    <div>
      <h1>this component is the parent </h1>

      <Children></Children>
      {/*  */}
      <Children>
        <h5>This tag is added through parent</h5>
      </Children>
      {/*  */}
      <Children>
        <h5>This tag is added through parent</h5>
        <h5>There can be multiple children/ tags added through children </h5>
      </Children>
    </div>
  );
};

export default Parent;
