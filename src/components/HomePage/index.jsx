import React, { useEffect, useState } from "react";
import axios from "axios";
const HomePage = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(
        "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=99a2c3abc5ca3fc0c9dca3d0cd75df4b&hash=4326bf879c56ff7c5240414e2ccd8e29"
      )
      .then((respone) => {
        console.log(respone.data);
        setData(respone.data.items);
      });
  }, []);
  return <div>HomePage</div>;
};

export default HomePage;
