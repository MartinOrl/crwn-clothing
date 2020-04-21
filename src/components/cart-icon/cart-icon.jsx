import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { toggleCartHidden } from '../../redux/cart-reducer/cartActions'
import { selectCartItemsCount } from '../../redux/cart-reducer/cartSelector'
 
import { CartIconContainer, ShoppingCart, ItemCount } from './cart-iconStyles'

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <CartIconContainer onClick={toggleCartHidden} >
        <ShoppingCart />
        <ItemCount>{itemCount}</ItemCount>

    </CartIconContainer>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})



export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);