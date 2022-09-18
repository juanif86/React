import React, {useState, useEffect} from 'react';


const ItemCount = ({initial, stock, onAdd}) => {
    
    const [contador, setContador] = useState(initial);

    const Add = () => {
        setContador(contador + 1);
    }

    const Quitar = () => {
        setContador(contador - 1);
    }

    return(
        <>
            <div>
                <button disabled={contador<=1} onClick={Quitar}>-</button>
                <span>{contador}</span>
                <button disabled={contador>= stock} onClick={Add}>+</button>          
            <div>
                <button disabled={stock<=0} onClick = {() => onAdd (contador)}>Agregar al carrito</button>
            </div>
            </div>
        </>
    )
}

export default ItemCount;