import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { MarvelContext } from "../context";
import "./characterItem.css";
const CharacterItem = (props) => {
  const { thumbnail, name, id } = props;
  const { setUrl, setLoading } = useContext(MarvelContext);
  return (
    <div className="card">
      <Link
        to={"/article"}
        onClick={() => {
          setLoading(false);
          setUrl(id);
        }}>
        <img src={thumbnail} alt="slike" />
        <p className="name">{name}</p>

        <p className="seeMore">See more...</p>
      </Link>
    </div>
  );
};

export default CharacterItem;
