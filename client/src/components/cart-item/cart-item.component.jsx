import React from 'react';

import {
  CartItemContainer,
  Image,
  ItemDetails,
  Name
} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <Image src={imageUrl} alt='item' />
    <ItemDetails>
      <Name>{name}</Name>
      <span className='price'>
        {quantity} x ${price}
      </span>
    </ItemDetails>
  </CartItemContainer>
);

export default React.memo(CartItem);
