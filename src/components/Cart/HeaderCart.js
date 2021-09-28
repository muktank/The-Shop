import { useContext } from "react";

import CartIcon from "./CartIcon";
import CartContext from "../../store/cartCtx";

const HeaderCart = (props) => {
    const cartCtx = useContext(CartContext);

    let itemsCount = cartCtx.items.length;

    return (
        <button onClick={props.onShowCart}>
            <CartIcon />
            <span>Cart</span>
            <span>{itemsCount}</span>
        </button>
    );
};

export default HeaderCart;