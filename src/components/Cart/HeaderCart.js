const HeaderCart = (props) => {
    return (
        <button onClick={props.onShowCart}>
            <span>--cart icon--</span>
            <span>Cart</span>
            <span>--count--</span>
        </button>
    );
};

export default HeaderCart;