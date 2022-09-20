import React from 'react'
import { ProductsContainer } from './styledComponents';
import Item from './Item.js'

function ItemList({items}) {
    return(
        <ProductsContainer>
            {
            items.length > 0
            ? items.map(item => <Item key={item.id} id={item.id} title={item.title} price={item.price} pictureUrl={item.pictureUrl} stock={item.stock} />)
            : <p>Cargando...</p>
            }
        </ProductsContainer>
    )
}

export default ItemList