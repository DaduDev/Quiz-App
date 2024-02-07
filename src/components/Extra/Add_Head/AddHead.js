import React from "react";

const AddHead = () => {
  return (
    <div
      style={{
        borderBottom: "0.5px solid black",
      }}
    >
      <div className="left">
        <h2
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Quiz App
        </h2>
      </div>
    </div>
  );
};

export default AddHead;
