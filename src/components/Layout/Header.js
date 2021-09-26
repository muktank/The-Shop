import {Fragment} from "react";

import HeaderCart from "../Cart/HeaderCart";
import toolsImage from "../../assets/tools.jpg";

const Header = (props) => {
    return (
        <Fragment>
            <header>
                <h1>The Shop</h1>
                <HeaderCart onShowCart={props.onShowCart}/>
            </header>
            <div>
                <img src={toolsImage} alt="tools"/>
            </div>
        </Fragment>
    )
};

export default Header;