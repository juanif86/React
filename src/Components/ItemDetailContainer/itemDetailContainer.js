import React, {useEffect, useState} from "react";
import ItemDetail from "../ItemDetail/itemDetail"

const producto =
{
    id:1,
    image: "https://i.ibb.co/RTt0tFb/tricolore-2-1329806.jpg", 
    descripcion: "fideos",
    precio: 120,
    stock: 50
}


export const ItemDetailContainer = () => {
    const [data, setData] = useState({})

    useEffect( () => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(producto);
            }, 3000)
        })
        getData.then(res => setData(res))
    }, [])

    return (
        <ItemDetail data={data} />
    )
}

export default ItemDetailContainer;