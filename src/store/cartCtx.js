import React from "react";

const CartContext = React.createContext(() => {
    return {
        items: [],
        totalPrice: 0,
        addItem: (item) => {},
        removeItem: (id) => {}
    };
});

export default CartContext;