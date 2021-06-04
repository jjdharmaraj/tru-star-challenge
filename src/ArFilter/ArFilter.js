import React from "react";
import { AppContainer } from "react-hot-loader";

import "./styles/index.scss";

import AppCanvas from "./js/components/AppCanvas";

function ArFilter() {
  return (
    <AppContainer>
      <AppCanvas />
    </AppContainer>
  );
}
export default ArFilter;
