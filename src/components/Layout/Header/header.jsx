import React, { useState } from "react";
import { TextInput, ActionIcon, useMantineTheme } from "@mantine/core";
import { IconSearch, IconArrowRight, IconArrowLeft } from "@tabler/icons";

import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MarvelContext } from "../../context";

const Header = () => {
  const theme = useMantineTheme();
  const { setGnr, setSearch, setLoading } = useContext(MarvelContext);
  const [input, setInput] = useState("");
  const [ham, setHam] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="headerSection">
      <div className="headerLogo">
        <Link
          to={"/"}
          className="logoLink"
          onClick={() => {
            setSearch();
            setLoading(false);
          }}>
          <h1>MARVEL</h1>
        </Link>
      </div>

      <div className={`navigation ${!ham ? "navigationOff" : "navigationOn"}`}>
        <ul className="headerNavigation">
          <li
            onClick={() => {
              setGnr("characters");
              setSearch();
              setLoading(false);
            }}>
            <Link to="/" className="genreLink">
              Characters
            </Link>
          </li>
          <li
            onClick={() => {
              setGnr("comics");
              setSearch();
              setLoading(false);
            }}>
            <Link to="/" className="genreLink">
              Comics
            </Link>
          </li>

          <li
            onClick={() => {
              setGnr("events");
              setSearch();
              setLoading(false);
            }}>
            <Link to="/" className="genreLink">
              Events
            </Link>
          </li>
          <li
            onClick={() => {
              setGnr("series");
              setSearch();
              setLoading(false);
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
                  setLoading(false);
                  console.log(input);
                  navigate("/");
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
              setInput("?name=" + e.target.value);
            }}
          />
        </div>
      </div>
      <div className="hamburgerMenu">
        <label>
          <input
            type="checkbox"
            id="check"
            onChange={(e) => {
              setHam(e.target.checked);
            }}
          />
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
    </div>
  );
};

export default Header;
