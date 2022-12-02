import React, { useState } from "react";
import { TextInput, ActionIcon, useMantineTheme } from "@mantine/core";
import { IconSearch, IconArrowRight, IconArrowLeft } from "@tabler/icons";

import "./header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MarvelContext } from "../../context";

const Header = () => {
  const theme = useMantineTheme();
  const { setGnr, search, setSearch } = useContext(MarvelContext);
  const [input, setInput] = useState("");
  return (
    <div className="headerSection">
      <div className="headerLogo">
        <Link to={"/"} className="logoLink">
          <h1>MARVEL</h1>
        </Link>
      </div>
      <ul className="headerNavigation">
        <li
          onClick={() => {
            setGnr("characters");
          }}>
          <Link to="/" className="genreLink">
            Characters
          </Link>
        </li>
        <li
          onClick={() => {
            setGnr("comics");
          }}>
          <Link to="/" className="genreLink">
            Comics
          </Link>
        </li>

        <li
          onClick={() => {
            setGnr("events");
          }}>
          <Link to="/" className="genreLink">
            Events
          </Link>
        </li>
        <li
          onClick={() => {
            setGnr("series");
          }}>
          <Link to="/" className="genreLink">
            Series
          </Link>
        </li>
      </ul>
      <div className="headerSearch">
        <TextInput
          icon={<IconSearch size={18} stroke={1.5} />}
          radius="xl"
          size="md"
          rightSection={
            <ActionIcon
              size={32}
              radius="xl"
              color="red"
              variant="filled"
              onClick={() => {
                setSearch(input);
                console.log(input);
              }}>
              {theme.dir === "ltr" ? (
                <IconArrowRight size={18} stroke={1.5} />
              ) : (
                <IconArrowLeft size={18} stroke={1.5} />
              )}
            </ActionIcon>
          }
          placeholder="Search"
          rightSectionWidth={42}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default Header;
