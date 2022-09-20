import React from 'react';
import { Badge } from '@material-ui/core';
import { ShoppingCartOutlined } from '@material-ui/icons'
import { useContext, useEffect } from 'react';
import { CartContext } from './CartContext';

function CartWidget() {
  const quantity = useContext(CartContext);
  return(
      <Badge badgeContent={quantity.calcItems()} color="secondary">
        <ShoppingCartOutlined />
      </Badge>
    )
}
  
export default CartWidget;