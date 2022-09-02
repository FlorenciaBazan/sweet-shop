import React from 'react';
import { Badge } from '@material-ui/core';
import { ShoppingCartOutlined } from '@material-ui/icons'

function CartWidget() {
  return(
      <Badge badgeContent={30} color="secondary">
        <ShoppingCartOutlined />
      </Badge>
    )
}
  
export default CartWidget;