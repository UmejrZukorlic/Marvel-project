import React, { createContext, useState } from "react";

const MarvelContext = createContext();
export { MarvelContext };
const Context = (props) => {
  const apiKey =
    "?ts=1&apikey=99a2c3abc5ca3fc0c9dca3d0cd75df4b&hash=4326bf879c56ff7c5240414e2ccd8e29";
  const [url, setUrl] = useState();
  return (
    <MarvelContext.Provider value={{ url, setUrl, apiKey }}>
      {props.children}
    </MarvelContext.Provider>
  );
};
export default Context;
