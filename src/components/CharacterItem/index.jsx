import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MarvelContext } from "../contex";
import "./characterItem.css";
const CharacterItem = (props) => {
  const { setUrl } = useContext(MarvelContext);
  const { thumbnail, name, url } = props;
  return (
    <div className="card">
      <img src={thumbnail} alt="slike" />
      <p className="name">{name}</p>
      <Link to={"/article"}>
        <p
          className="seeMore"
          onClick={() => {
            setUrl(url);
          }}>
          See more
        </p>
      </Link>
    </div>
  );
};

export default CharacterItem;
