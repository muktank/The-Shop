import { useContext } from "react";

import CartIcon from "./CartIcon";
import CartContext from "../../store/cartCtx";
import "../../styles/HeaderCart.css";

const HeaderCart = (props) => {
    const cartCtx = useContext(CartContext);

    let itemsCount = cartCtx.items.length;

    return (
        <button className="button" onClick={props.onShowCart}>
            <span className="icon">
                <CartIcon />
            </span>
            <span>Cart</span>
            <span className="count">{itemsCount}</span>
        </button>
    );
};

export default HeaderCart;