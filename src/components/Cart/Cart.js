import { useContext } from "react";

import CartItem from "./CartItem";
import Modal from "../Generic/Modal";
import CartContext from "../../store/cartCtx";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const isEmpty = cartCtx.items.length === 0;

    const items = cartCtx.items.map((item) => (
        <CartItem key= {item.id} itemName={item.title} price={item.price} quantity={item.quantity} />
    ));

    const onCheckout = () => {
        console.log("Order placed successfully!!!");
        props.onHideCart();
    };

    return (
        <Modal onHideCart={props.onHideCart}>
            <ul>{items}</ul>
            <div>Cart Total : {cartCtx.totalPrice} EUR</div>
            <button onClick={props.onHideCart}>Close</button>
            {!isEmpty && <button onClick={onCheckout}>Checkout</button>}
        </Modal>
    );
};

export default Cart;