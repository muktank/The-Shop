import { useContext } from "react";

import CartItem from "./CartItem";
import Modal from "../Generic/Modal";
import CartContext from "../../store/cartCtx";
import "../../styles/Cart.css";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const isEmpty = cartCtx.items.length === 0;

    const onAddHandler = (item) => {
        item = {
            ...item,
            quantity: 1
        };
        cartCtx.addItem(item);
    };

    const onRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const onCheckout = () => {
        console.log("Order placed successfully!!!");
        props.onHideCart();
    };

    const items = cartCtx.items.map((item) => (
        <CartItem 
        key= {item.id}
        itemName={item.title} 
        price={item.price} 
        quantity={item.quantity} 
        onAdd={onAddHandler.bind(null, item)}
        onRemove={onRemoveHandler.bind(null, item.id)}
        />
    ));

    return (
        <Modal onHideCart={props.onHideCart}>
            <ul className="cart-items">{items}</ul>
            <div className="total">Cart Total : {cartCtx.totalPrice} EUR</div>
            <div className="actions">
                <button className="button--alt" onClick={props.onHideCart}>Close</button>
                {!isEmpty && <button className="button" onClick={onCheckout}>Checkout</button>}
            </div>
        </Modal>
    );
};

export default Cart;