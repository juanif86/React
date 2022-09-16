import React from "react";

const Item = ({productos}) => {
    return(
        <>
        <div>{productos.descripcion}</div>
        <img src={productos.image} />
        <div>{productos.precio}</div>
        </>

    )
}

export default Item;