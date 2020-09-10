import React, { useState, useEffect } from "react";
import axios from "axios";
import Photo from "./Photo";

function PhotoData() {
  const [photoD, setPhoto] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=WSbN3WXh6545nyX2MDMyjugPE6VOv3HZwK4jnK6J"
      )
      .then((res) => {
        console.log(res.data);
        setPhoto(res.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  return (
    <div>
      <Photo info={photoD} />
    </div>
  );
}

export default PhotoData;
