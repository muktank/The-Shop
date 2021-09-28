import "../../styles/CartItem.css";

const CartItem = (props) => {
    return(
        <li className="cart-item">
            <h2>{props.itemName}</h2>
            <div className="summary">
                <span className="price">Price: {props.price} EUR</span>
                <span className="quantity"> x {props.quantity}</span>
            </div>
            <div className="actions">
                <button onClick={props.onRemove}>−</button>
                <button onClick={props.onAdd}>+</button>
            </div>
        </li>
    );
}

export default CartItem; 