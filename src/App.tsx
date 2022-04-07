import React from "react";

import { CardList } from "./components/CardList";
import { Layout } from "./components/Layout";

import "./scss/fonts.scss";

const App = () => {
  return (
    <Layout>
      <CardList />
    </Layout>
  );
};

export default App;
