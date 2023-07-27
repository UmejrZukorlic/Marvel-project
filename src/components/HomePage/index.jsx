import React, { useEffect, useState, useContext } from "react";
import axios from "axios";

import Layout from "../Layout/layout";
import CharacterItem from "../CharacterItem";

import { MarvelContext } from "../context";
import "./homePage.css";
import Loading from "../Loader";

const HomePage = () => {
  const [data, setData] = useState();
  const { gnr, apiKey, search, setSearch, loading, setLoading } =
    useContext(MarvelContext);

  useEffect(() => {
    axios
      .get(
        `https://gateway.marvel.com:443/v1/public/${gnr}${
          search ? search + "&" + apiKey : "?" + apiKey
        }`
      )
      .then((respone) => {
        console.log(respone.data.data);
        setData(respone.data.data.results);
        setLoading(true);
      });
  }, [gnr, apiKey, search, setLoading, loading]);
  return (
    <>
      {!loading ? (
        <Loading />
      ) : (
        <Layout>
          <div className="homeSection nesto">
            {data?.map((el) => {
              return (
                <CharacterItem
                  key={el.id}
                  thumbnail={el.thumbnail.path + "." + el.thumbnail.extension}
                  name={el.name ? el.name : el.title}
                  id={el.resourceURI.replace("http://", "https://") + "?"}
                />
              );
            })}
            {data.length === 0 ? (
              <div className="notExisted">
                <h1>There is no marvel with this name</h1>
                <button
                  onClick={() => {
                    setSearch("");
                    setLoading(false);
                  }}>
                  GET BACK
                </button>
              </div>
            ) : null}
          </div>
        </Layout>
      )}
    </>
  );
};

export default HomePage;
