import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { MarvelContext } from "../context";
import "./characterItem.css";
const CharacterItem = (props) => {
  const { thumbnail, name } = props;
  return (
    <div className="card">
      <img src={thumbnail} alt="slike" />
      <p className="name">{name}</p>
      <Link to={"/article"}>
        <p className="seeMore">See more</p>
      </Link>
    </div>
  );
};

export default CharacterItem;
