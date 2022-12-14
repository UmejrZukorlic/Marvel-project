import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../Layout/layout";
import { useContext } from "react";
import { MarvelContext } from "../context";
import ComicsCard from "./ComicsCard";
import "./characterPage.css";
import Loading from "../Loader";

const CharacterPage = () => {
  const [data, setData] = useState();
  const { url, apiKey, setLoading, loading } = useContext(MarvelContext);

  useEffect(() => {
    axios.get(`${url}${apiKey}`).then((respone) => {
      setLoading(true);
      console.log(respone.data.data.results[0]);
      setData(respone.data.data.results[0]);
    });
  }, [apiKey, url, loading, setLoading]);
  return (
    <>
      {!loading ? (
        <Loading />
      ) : (
        <Layout>
          <div className="characterPageSection">
            <div className="thumbnail">
              <img
                src={data?.thumbnail.path + "." + data?.thumbnail.extension}
                alt="slika"
              />
              <h1>
                {data?.name}
                {data?.title}
              </h1>
            </div>
            <div className="description">
              <h1>DESCRIPTION: </h1>
              <h2>{data?.description}</h2>
            </div>
            <h1 className="comicsTitle">COMICS: </h1>
            <div className="comicsSection">
              {data?.comics?.items?.map((el) => {
                return <ComicsCard url={el.resourceURI + "?"} />;
              })}
              {!data?.comics ? <h1>NO COMICS IN COMIC HAHAHAHAH</h1> : null}
            </div>
          </div>
        </Layout>
      )}
    </>
  );
};

export default CharacterPage;
