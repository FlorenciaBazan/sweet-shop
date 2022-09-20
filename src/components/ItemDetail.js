import React from 'react';
import { Button } from '@material-ui/core';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import { DetailContainer, WrapperDetail, ImgContainer, ImageDetail, InfoContainer, Title, Desc, Price } from './styledComponents';
import { CartContext } from './CartContext';

const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);
    const test = useContext(CartContext);

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
        setItemCount(qty);
        test.addToCart(item, qty);
    }

    return (
        <>
        {
            item
            ? 
            <DetailContainer>
                <WrapperDetail>
                    <ImgContainer>
                        <ImageDetail src={item.pictureUrl} />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.description}</Desc>
                        <Price>$ {item.price}</Price>
                        <Desc>{item.stock} on stock</Desc>
                    </InfoContainer>
                    {
                        itemCount === 0
                        ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                        : <Link to='/cart' style={{textDecoration: "none"}}><Button variant="contained" color="secondary">PURCHASE</Button></Link>
                    }
                </WrapperDetail>
            </DetailContainer>
            : <p>Loading...</p>
        }
        </>
    );
}

export default ItemDetail;