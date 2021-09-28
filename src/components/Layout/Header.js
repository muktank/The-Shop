import {Fragment} from "react";

import HeaderCart from "../Cart/HeaderCart";
import toolsImage from "../../assets/tools.jpg";
import "../../styles/Header.css";

const Header = (props) => {
    return (
        <Fragment>
            <header className="header">
                <h1>The Tools Shop</h1>
                <HeaderCart onShowCart={props.onShowCart}/>
            </header>
            <div className="main-image">
                <img src={toolsImage} alt="tools"/>
            </div>
        </Fragment>
    )
};

export default Header;