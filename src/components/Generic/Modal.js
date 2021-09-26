import { Fragment } from "react";
import reactDom from "react-dom";

import "./Modal.css";

const Backdrop = () => {
    return <div className="backdrop"></div>
}

const Overlay = (props) => {
    return (
        <div className="modal">
            <div className="content">{props.children}</div>
        </div>
    )
}

const Modal = (props) => {
    const modalContainer = document.getElementById("modal-container");
    return (
        <Fragment>
            {reactDom.createPortal(<Backdrop/>, modalContainer)}
            {reactDom.createPortal(<Overlay>{props.children}</Overlay>, modalContainer)}
        </Fragment>
    )
}

export default Modal;