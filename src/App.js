import { Fragment } from "react";

import Header from "./components/Layout/Header";
import ToolsList from "./components/Product/ToolsList";
import Cart from "./components/Cart/Cart";

const App = () => {
  return (
    <Fragment>
      <Header></Header>
      <main><ToolsList/></main>
      <footer><Cart/></footer>
    </Fragment>
  )
};

export default App;
