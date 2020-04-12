import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'

import { selectCartItems } from '../../redux/cart-reducer/cartSelector'

import CustomButton from '../custom-button/custom-button'
import CartItem from '../cart-item/cartItem'

import './cartDropwdown.scss'

const Cart = ({ cartItems, history }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ?
                (cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />))
                :(<span className='empty-message'>Your Cart is empty</span>)
            }
        
        </div>

        <CustomButton onClick={() => history.push('/checkout')} >GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps,null)(Cart));