import { useContext } from "react";

import AddTools from "./AddTools";
import CartContext from "../../store/cartCtx";
import "../../styles/Tools.css";

const Tools = (props) => {
    const cartCtx = useContext(CartContext);

    const onAddToCart = (quantity) => {
        const item = {
            id: props.id,
            title: props.title,
            quantity: quantity,
            price: props.price
        };

        cartCtx.addItem(item);
    };

    return (
        <li className="tool">
            <div><h3>{props.title}</h3></div>
            <div className="price">{props.price} EUR </div>
            <div>
                <AddTools addToCart={onAddToCart} inputId={props.id}/>
            </div>
        </li>
    );
}

export default Tools;