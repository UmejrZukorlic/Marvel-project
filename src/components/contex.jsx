import React, { createContext } from "react";
import { useState, useEffect } from "react";

const MarvelContext = createContext();
export { MarvelContext };
const Context = (props) => {
  const [id, setId] = useState();

  return (
    <MarvelContext.Provider
      value={{
        id,
        setId,
      }}>
      {props.children}
    </MarvelContext.Provider>
  );
};

export default Context;
