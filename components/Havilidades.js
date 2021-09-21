import React from "react";

const Havilidades = ({skill:{ skill,porcentage}}) => {
  return (
    <>
      <h5>{skill}</h5>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${porcentage}%` }}
        ></div>
      </div>
    </>
  );
};

export default Havilidades;
