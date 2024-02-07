import React from "react";
import Header from "../../Header/Header";

const Create = () => {
  return (
    <div>
      <Header />
      <div>
        <div>
          <h3>List of Questions</h3>
        </div>
        <div>
          <h1>Create</h1>
          <div>
            <input placeholder="Add your question here" />
            <div>
              <input placeholder="Option-01" />
              <input placeholder="Option-02" />
              <input placeholder="Option-03" />
              <input placeholder="Option-04" />
            </div>
          </div>
          <div>
            <button></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
