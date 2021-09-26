import { Fragment } from "react";

import Header from "./components/Layout/Header";
import ToolsList from "./components/Product/ToolsList";

const App = () => {
  return (
    <Fragment>
      <Header></Header>
      <ToolsList></ToolsList>
    </Fragment>
  )
};

export default App;
