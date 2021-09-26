import {Fragment} from "react";

import HeaderCart from "../Cart/HeaderCart";
import toolsImage from "../../assets/tools.jpg";

const Header = () => {
    return (
        <Fragment>
            <header>
                <h1>The Shop!</h1>
                <HeaderCart />
            </header>
            <div>
                <img src={toolsImage} alt="tools"/>
            </div>
        </Fragment>
    )
};

export default Header;