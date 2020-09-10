import React from "react";

function Photo({ info }) {
  return (
    <div>
      <h1>{info.title}</h1>
      <div>
        <img src={info.hdurl} alt="nasa pic"></img>
      </div>
      <div>
        <p>{info.explanation}</p>
      </div>
    </div>
  );
}

export default Photo;
