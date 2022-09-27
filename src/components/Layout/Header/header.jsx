import React from "react";
import { TextInput, ActionIcon, useMantineTheme } from "@mantine/core";
import { IconSearch, IconArrowRight, IconArrowLeft } from "@tabler/icons";

import "./header.css";

const Header = () => {
  const theme = useMantineTheme();
  return (
    <div className="headerSection">
      <div className="headerLogo">
        <h1>MARVEL</h1>
      </div>
      <ul className="headerNavigation">
        <li>Characters</li>
        <li>Comics</li>
        <li>Creators</li>
        <li>Events</li>
        <li>Series</li>
        <li>Stories</li>
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
