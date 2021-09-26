import { Fragment, useState } from "react";

import Header from "./components/Layout/Header";
import ToolsList from "./components/Product/ToolsList";
import Cart from "./components/Cart/Cart";

const App = () => {
  let [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <Fragment>
      {showCart && <Cart onHideCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}></Header>
      <main><ToolsList/></main>
    </Fragment>
  );
};

export default App;
