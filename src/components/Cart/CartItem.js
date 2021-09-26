const CartItem = (props) => {
    return(
        <li>
            <div>{props.itemName}</div>
            <div>Quantity: {props.quantity}</div>
            <button>Remove</button>
        </li>
    );
}

export default CartItem; 