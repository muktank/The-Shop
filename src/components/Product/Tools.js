import AddTools from "./AddTools";

const Tools = (props) => {
    return (
        <li>
            <div><h3>{props.title}</h3></div>
            <div>{props.price} EUR </div>
            <div>
                <AddTools inputId={props.id}/>
            </div>
        </li>
    );
}

export default Tools;