import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../Layout/layout";
import { useContext } from "react";
import { MarvelContext } from "../context";
import ComicsCard from "./ComicsCard";
import "./characterPage.css";

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
      <div className="characterPageSection">
        <div className="thumbnail">
          <img
            src={data?.thumbnail.path + "." + data?.thumbnail.extension}
            alt="slika"
          />
          <h1>{data?.name}</h1>
        </div>
        <div className="description">
          <h1>DESCRIPTION: </h1>
          <h2>{data?.description}</h2>
        </div>
        <div className="comicsSection">
          <h1>COMICS: </h1>
          {data?.comics.items.map((el) => {
            return <ComicsCard url={el.resourceURI} />;
          })}
        </div>
      </div>
    </Layout>
  );
};

export default CharacterPage;
