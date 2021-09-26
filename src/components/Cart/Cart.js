import CartItem from "./CartItem";
import Modal from "../Generic/Modal";

const CART_ITEMS = [
    {
        id: "001",
        product_id: "A101",
        name: "Screwdriver",
        quantity: "3",
        total_price: "234"
    }
];

const Cart = (props) => {
    const items = CART_ITEMS.map((item) => (
        <CartItem itemName={item.name} quantity={item.quantity} />
    ));

    const onCheckout = () => {
        console.log("Order placed successfully!!!");
        props.onHideCart();
    };

    return (
        <Modal onHideCart={props.onHideCart}>
            <ul>{items}</ul>
            <div>Cart Total : 345 EUR</div>
            <button onClick={props.onHideCart}>Close</button>
            <button onClick={onCheckout}>Checkout</button>
        </Modal>
    );
};

export default Cart;