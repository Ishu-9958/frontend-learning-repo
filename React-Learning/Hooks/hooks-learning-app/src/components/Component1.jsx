const Component1 = (props) => {
  return (
    <div style={{ border: "2px solid black" }}>
      {props.userObj.id ?? "user id"}
    </div>
  );
};

export { Component1 };
