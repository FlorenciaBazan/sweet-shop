import React from 'react';
import ItemCount from './ItemCount';

function ItemListContainer({greeting}) {
    return(
        <div>
            {greeting}
            <ItemCount stock="10" initial="1" onAdd={count => console.log(`Agregaste ${count} productos al carrito`)}></ItemCount>
        </div>
    )
}

export default ItemListContainer;