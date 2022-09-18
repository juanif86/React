import Item from "../Item/item"
import React from "react"

const Itemlist = ({listaProductos}) => {

    return (
        <>
        {listaProductos.map( (prod, i) => <Item key={i} productos={prod}/> )}
        </>
    )
}

export default Itemlist;