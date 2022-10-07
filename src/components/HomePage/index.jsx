import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../Layout/layout";
import CharacterItem from "../CharacterItem";
import "./homePage.css";
const HomePage = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(
        "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=99a2c3abc5ca3fc0c9dca3d0cd75df4b&hash=4326bf879c56ff7c5240414e2ccd8e29"
      )
      .then((respone) => {
        console.log(respone.data);
        setData(respone.data);
        console.log(respone.data.data.results);
        setData(respone.data.data.results);
      });
  }, []);
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
