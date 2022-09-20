import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';
import customFetch from "../utils/customFetch";
import { useParams } from 'react-router';
import ProductsData from './data';

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();

    useEffect(() => {
        customFetch(1000, ProductsData.filter(item => {
            if (idCategory === undefined) return item;
            return item.categoryId === parseInt(idCategory)
        }))
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, [datos]);

    useEffect(() => {
        return (() => {
            setDatos([]);
        })
    }, []);

    return (
        <>  
            <ItemList items={datos} />
        </>
    );
}

export default ItemListContainer;