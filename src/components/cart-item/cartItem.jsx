import React from 'react'

import { CartItemContainer, Image, ItemDetails, Name, Price } from './cartItemStyles'

const CartItem = ({ item:{imageUrl, price, name, quantity} }) =>(
    <CartItemContainer>
        <Image src={imageUrl} alt='item' />
        <ItemDetails>
            <Name>{name}</Name>
            <Price>{quantity} x ${price}</Price>
        </ItemDetails>
    </CartItemContainer>
)

export default CartItem