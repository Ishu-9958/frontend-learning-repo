const Component2 = (props) => {
  return (
    <div style={{ border: "2px solid black" }}>
      {props.userObj.name ?? "user name"}
    </div>
  );
};

export { Component2 };
