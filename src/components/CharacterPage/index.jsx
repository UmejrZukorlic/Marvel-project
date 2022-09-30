import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../Layout/layout";
import { useContext } from "react";
import { MarvelContext } from "../contex";

const CharacterPage = () => {
  const [data, setData] = useState();
  const { url, apiKey } = useContext(MarvelContext);

  useEffect(() => {
    axios.get(`${url}${apiKey}`).then((respone) => {
      console.log(respone.data.data.results[0]);
      setData(respone.data.data.results[0]);
    });
  }, [apiKey, url]);
  return (
    <Layout>
      <div>
        <div className="thumbnail">
          <img
            src={data?.thumbnail.path + "." + data?.thumbnail.extension}
            alt="slika"
          />
          <h1>{data?.name}</h1>
        </div>
        <div>
          <h1>DESCRIPTION:</h1>
          <h1>{data?.description}</h1>
          <h1>COMICS:</h1>
        </div>
      </div>
    </Layout>
  );
};

export default CharacterPage;
