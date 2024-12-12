import React from "react";

function List(){
    const items = ['Manzana', 'Pera', 'Mango', 'Fresa'];

    return (
        <ol>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ol>
    );
}

export default List;