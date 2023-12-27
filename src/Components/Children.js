import React from "react";

const Children = ({children}) => {
    // console.log(children, typeof children)
  return (
    <div>
      <h1> Children in React</h1>
      <p>this children is called using props</p>
      <p>It will have key 'children'</p>
      {children}
    </div>
  );
};

export default Children;
