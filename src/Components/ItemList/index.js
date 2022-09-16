import Item from "../Item"
import React from "react"


const Itemlist = ({listaProductos}) => {
    console.log(listaProductos)
    return (
        <>
        {listaProductos.map( (prod, i) => <Item key={i} />)}
        
        </>

    )
}

export default Itemlist;