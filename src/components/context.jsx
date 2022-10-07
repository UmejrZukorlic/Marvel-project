import React, { createContext, useState } from "react";

const MarvelContext = createContext();
export { MarvelContext };
const Context = (props) => {
  const apiKey =
    "ts=1&api=99a2c3abc5ca3fc0c9dca3d0cd75df4b&hash=acb83bf2aa268c2c63a3e6eb1048f968";
  const [url, setUrl] = useState();
  return (
    <MarvelContext.Provider
      value={{ url, setUrl, apiKey }}></MarvelContext.Provider>
  );
};
export default Context;
