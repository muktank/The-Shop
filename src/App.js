import { useState } from "react";

import Header from "./components/Layout/Header";
import ToolsList from "./components/Product/ToolsList";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

const App = () => {
  let [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <CartProvider>
      {showCart && <Cart onHideCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}></Header>
      <main><ToolsList/></main>
    </CartProvider>
  );
};

export default App;
