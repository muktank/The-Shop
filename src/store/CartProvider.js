import { useReducer } from "react";

import CartContext from "./cartCtx";

const DEFAULT_CART = {
    items: [],
    totalPrice: 0
};

const reducer = (state, action) => {
    if(action.operation === "ADD") {
        let updatedItems;
        let itemIndex = state.items.findIndex((item) => item.id === action.item.id);
        let updatedTotal = state.totalPrice + action.item.price * action.item.quantity;

        if(itemIndex > -1){
            let existingItem = state.items[itemIndex]; 
            let updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + action.item.quantity
            }
            updatedItems = [...state.items];
            updatedItems[itemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }

        return {
            items: updatedItems,
            totalPrice: updatedTotal
        };
    }

    if(action.operation === "REMOVE") {
        let itemIndex = state.items.findIndex((item) => item.id === action.id);
        let existingItem = state.items[itemIndex]; 
        let updatedTotal = state.totalPrice - existingItem.price;
        let updatedItems;

        if(existingItem.quantity === 1) {
            updatedItems = state.items.filter((item) => item.id !== action.id);
        } else {
            let updatedItem = {
                ...existingItem, 
                quantity: existingItem.quantity - 1
            };
            updatedItems = [...state.items];
            updatedItems[itemIndex] = updatedItem;
        }

        return {
            items: updatedItems,
            totalPrice: updatedTotal
        }
    }
    return DEFAULT_CART;
};

const CartProvider = (props) => {
    const [cartState, updateCart] = useReducer(reducer, DEFAULT_CART);

    const addItemHandler = (item) => {
        updateCart({operation: "ADD", item: item});
    };

    const removeItemHandler = (id) => {
        updateCart({operation: "REMOVE", id: id});
    };

    const cartCtx = {
        items: cartState.items,
        totalPrice: cartState.totalPrice,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    };

    return (
        <CartContext.Provider value={cartCtx}>
            {props.children}
        </CartContext.Provider>
    )
};

export default CartProvider;