const AddTools = (props) => {
    let id = `input-${props.inputId}`;

    return (
        <form>
            <label htmlFor={id}>Quantity</label>
            <input id={id} type="number" min="0" max="5" step="1" defaultValue="0"/>
            <button>Add To Cart</button>
        </form>
    )
}

export default AddTools;