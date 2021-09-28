const CartItem = (props) => {
    return(
        <li>
            <div>{props.itemName}</div>
            <div>x {props.quantity}</div>
            <div>Price: {props.price} EUR</div>
            <button onClick={props.onRemove}>Remove</button>
            <button onClick={props.onAdd}>Add</button>
        </li>
    );
}

export default CartItem; 