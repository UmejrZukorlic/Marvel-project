import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { MarvelContext } from "../../contex";

const ComicsCard = (props) => {
  const { url } = props;
  const { apiKey } = useContext(MarvelContext);
  const [data, setData] = useState();
  useEffect(() => {
    axios.get(`${url}${apiKey}`).then((respone) => {
      console.log(respone.data.data.results[0]);
      setData(respone.data.data.results[0]);
    });
  }, [apiKey, url]);
  return (
    <div>
      <img
        src={data?.thumbnail.path + "." + data?.thumbnail.extension}
        alt=""
      />
      <h1>{data?.title}</h1>
    </div>
  );
};

export default ComicsCard;
