import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../Layout/layout";
import { useContext } from "react";
import { MarvelContext } from "../contex";

const CharacterPage = () => {
  const [data, setData] = useState();
  const { id, setId } = useContext(MarvelContext);

  useEffect(() => {
    axios
      .get(
        `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=99a2c3abc5ca3fc0c9dca3d0cd75df4b&hash=4326bf879c56ff7c5240414e2ccd8e29`
      )
      .then((respone) => {
        console.log(respone.data.data.results[0]);
        setData(respone.data.data.results[0]);
      });
  }, []);
  return (
    <Layout>
      <div>CharacterPage</div>
    </Layout>
  );
};

export default CharacterPage;
