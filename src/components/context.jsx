import React, { createContext, useState } from "react";

const MarvelContext = createContext();
export { MarvelContext };
const Context = (props) => {
  const apiKey =
    "ts=1&apikey=99a2c3abc5ca3fc0c9dca3d0cd75df4b&hash=4326bf879c56ff7c5240414e2ccd8e29";
  const [url, setUrl] = useState();
  const [gnr, setGnr] = useState("characters");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState("dark");

  return (
    <MarvelContext.Provider
      value={{
        url,
        setUrl,
        apiKey,
        gnr,
        setGnr,
        search,
        setSearch,
        loading,
        setLoading,
        darkMode,
        setDarkMode,
      }}>
      {props.children}
    </MarvelContext.Provider>
  );
};
export default Context;
