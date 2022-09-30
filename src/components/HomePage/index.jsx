import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../Layout/layout";
import CharacterItem from "../CharacterItem";
import "./homePage.css";
import { useContext } from "react";
import { MarvelContext } from "../contex";
const HomePage = () => {
  const [data, setData] = useState();
  const { apiKey } = useContext(MarvelContext);

  useEffect(() => {
    axios
      .get(`https://gateway.marvel.com:443/v1/public/characters${apiKey}`)
      .then((respone) => {
        console.log(respone.data.data.results);
        setData(respone.data.data.results);
      });
  }, [apiKey]);
  return (
    <Layout>
      <div className="homeSection">
        {data?.map((el) => {
          return (
            <CharacterItem
              key={el.id}
              thumbnail={el.thumbnail.path + "." + el.thumbnail.extension}
              name={el.name ? el.name : el.title}
              url={el.resourceURI}
            />
          );
        })}
      </div>
    </Layout>
  );
};

export default HomePage;
