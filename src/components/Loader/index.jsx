import React from "react";
import { Loader } from "@mantine/core";
import "../HomePage/homePage.css";

const Loading = () => {
  return <Loader color="red" className="loader" variant="bars" />;
};

export default Loading;
