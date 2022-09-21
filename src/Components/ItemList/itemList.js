import Item from "../Item/item"
import React from "react"

const Itemlist = ({listaProductos=[]}) => {

    return (

        listaProductos.map( productos => <Item key={productos.id} info={productos}/> )

    )
}

export default Itemlist;