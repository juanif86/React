import React, {useState, useEffect} from "react";
import ItemCount from "../ItemCount/itemcount";
import Itemlist from "../ItemList/itemList";
import { productos } from "../../Assets/productos";
import { customFetch } from "../Utils/customFetch";


const ItemListContainer = (props) => {

    const [listaProductos, setListaProductos] = useState([]);

    useEffect = ( () => {
        customFetch(productos)
            .then(res => setListaProductos(res))
     }, []);

    const onAdd = (quantity) => {
        console.log("compraste " +quantity+ " unidades");
    }

    return (
        <>
        <h1>{props.greeting}</h1>
        <ItemCount initial={1} stock={50} onAdd={onAdd} />
        <Itemlist listaProductos={listaProductos}/>
        </>

    )
}

export default ItemListContainer;