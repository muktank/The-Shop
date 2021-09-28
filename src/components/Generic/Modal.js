import { Fragment } from "react";
import reactDom from "react-dom";

import "../../styles/Modal.css";

const Backdrop = (props) => {
    return <div className="backdrop" onClick={props.onClose}></div>
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
            {reactDom.createPortal(<Backdrop onClose={props.onHideCart}/>, modalContainer)}
            {reactDom.createPortal(<Overlay >{props.children}</Overlay>, modalContainer)}
        </Fragment>
    )
}

export default Modal;