import { useRef } from "react";

import "../../styles/AddTools.css"

const AddTools = (props) => {
    const inputRef = useRef();
    let id = `input-${props.inputId}`;

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredQuantity = +inputRef.current.value;
        // chrome handles the validation based on min max attributes on input tag. Need to check for other browsers
        // if(enteredQuantity < 1 || enteredQuantity > 5){
        //     return;
        // } 
        props.addToCart(enteredQuantity);
    };

    return (
        <form className="form" onSubmit={submitHandler}>
            <label htmlFor={id}>Quantity:</label>
            <input ref={inputRef} id={id} type="number" min="1" max="5" step="1" defaultValue="1"/>
            <button>Add To Cart</button>
        </form>
    )
}

export default AddTools;