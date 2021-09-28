const CartItem = (props) => {
    return(
        <li>
            <div>{props.itemName}</div>
            <div>x {props.quantity}</div>
            <div>Price: {props.price} EUR</div>
            <button>Remove</button>
            <button>Add</button>
        </li>
    );
}

export default CartItem; 