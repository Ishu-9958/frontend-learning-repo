import { useContext, useEffect } from "react";
import Context from "../context/creatingContext";

const Component3 = ({userObj,refer}) => {
  const counter = useContext(Context); // child have access to context, solves the problem of props drilling

  useEffect(() => {
    console.log(counter);
    
    
  }, [counter]);

  return (
    <div style={{ border: "2px solid black" }}>
      <span ref={refer}>
        {userObj.website ?? "user website"} 
      </span>
      {userObj.website &&` for user : ${counter}`}
    </div>
  );
};

export { Component3 };
