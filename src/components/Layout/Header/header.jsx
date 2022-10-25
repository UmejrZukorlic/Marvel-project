import React from "react";
import { TextInput, ActionIcon, useMantineTheme } from "@mantine/core";
import { IconSearch, IconArrowRight, IconArrowLeft } from "@tabler/icons";

import "./header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MarvelContext } from "../../context";

const Header = () => {
  const theme = useMantineTheme();
  const { gnr, setGnr } = useContext(MarvelContext);
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
          Characters
        </li>
        <li
          onClick={() => {
            setGnr("comics");
          }}>
          Comics
        </li>

        <li
          onClick={() => {
            setGnr("events");
          }}>
          Events
        </li>
        <li
          onClick={() => {
            setGnr("series");
          }}>
          Series
        </li>
      </ul>
      <div className="headerSearch">
        <TextInput
          icon={<IconSearch size={18} stroke={1.5} />}
          radius="xl"
          size="md"
          rightSection={
            <ActionIcon size={32} radius="xl" color="red" variant="filled">
              {theme.dir === "ltr" ? (
                <IconArrowRight size={18} stroke={1.5} />
              ) : (
                <IconArrowLeft size={18} stroke={1.5} />
              )}
            </ActionIcon>
          }
          placeholder="Search"
          rightSectionWidth={42}
        />
      </div>
    </div>
  );
};

export default Header;
