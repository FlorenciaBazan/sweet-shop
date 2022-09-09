import React, { useEffect, useState } from 'react'
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import ProductsData from './data';

function ItemListContainer(){
    const [items, setProducts] = useState(null)

    useEffect(() => {
      setProductsPromise()
    }, [])

  const getProducts = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => ProductsData
          ? resolve(ProductsData)
          : reject(new Error('getProducts Error'))   
        , 2000)        
      })
  }

  const setProductsPromise = () => {
        getProducts()
          .then(
            response => {
              setProducts(response)
            },
            error => console.log(`Reject`, error)
        )
        .catch(error => console.log(`Error`, error))
  }

    return (
        <div className='text-center'>
            <ItemCount stock="10" initial="1" onAdd={contador => console.log(`Agregaste ${contador} productos al carrito`)}/>
            {items ? <ItemList items={items}/> : <span className='h3'>Cargando...</span>}
        </div>
    )
}

export default ItemListContainer;