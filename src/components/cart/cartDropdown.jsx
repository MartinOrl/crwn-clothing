import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'

import { selectCartItems } from '../../redux/cart-reducer/cartSelector'
import { toggleCartHidden } from '../../redux/cart-reducer/cartActions'

import CartItem from '../cart-item/cartItem'

import { CartDropdownContainer, CartItemsContainer, EmptyMessage, CheckoutButton } from './cartDropdownStyles'

const Cart = ({ cartItems, history, dispatch }) => (
    <CartDropdownContainer>
        <CartItemsContainer>
            {
                cartItems.length ?
                (cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />))
                :(<EmptyMessage>Your Cart is empty</EmptyMessage>)
            }
        
        </CartItemsContainer>

        <CheckoutButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden())
        }}>
        GO TO CHECKOUT
        </CheckoutButton>
    </CartDropdownContainer>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(Cart));