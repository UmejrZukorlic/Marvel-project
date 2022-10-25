import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Layout from "../Layout/layout";
import CharacterItem from "../CharacterItem";
import "./homePage.css";
import { MarvelContext } from "../context";
const HomePage = () => {
  const [data, setData] = useState();
  const { gnr, apiKey } = useContext(MarvelContext);

  useEffect(() => {
    axios
      .get(`https://gateway.marvel.com:443/v1/public/${gnr}${apiKey}`)
      .then((respone) => {
        console.log(respone.data);
        setData(respone.data);
        console.log(respone.data.data.results);
        setData(respone.data.data.results);
      });
  }, [gnr, apiKey]);
  return (
    <Layout>
      <div className="homeSection">
        {data?.map((el) => {
          return (
            <CharacterItem
              key={el.id}
              thumbnail={el.thumbnail.path + "." + el.thumbnail.extension}
              name={el.name ? el.name : el.title}
              id={el.resourceURI}
            />
          );
        })}
      </div>
    </Layout>
  );
};

export default HomePage;
