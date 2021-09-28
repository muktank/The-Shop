import { Fragment } from "react";

import Tools from "./Tools";

const DUMMY_TOOLS = [
    {
      "id": "A101",
      "description": "Screwdriver",
      "category": "1",
      "price": "9.75"
    },
    {
      "id": "A102",
      "description": "Electric screwdriver",
      "category": "1",
      "price": "49.50"
    },
    {
      "id": "B101",
      "description": "Basic on-off switch",
      "category": "2",
      "price": "4.99"
    },
    {
      "id": "B102",
      "description": "Press button",
      "category": "2",
      "price": "4.99"
    },
    {
      "id": "B103",
      "description": "Switch with motion detector",
      "category": "2",
      "price": "12.95"
    }
  ];

const ToolsList = () => {
    const tools = DUMMY_TOOLS.map(tool => (
      <Tools 
        key={tool.id}
        id={tool.id} 
        title={tool.description} 
        price={tool.price}
      />
    ));

    return (
        <Fragment>
            <h2>Pick Your Tools!</h2>
            <ul>
                {tools}
            </ul>
        </Fragment>
    );
}

export default ToolsList;