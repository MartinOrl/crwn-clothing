import React from 'react'
import { connect } from 'react-redux'

import { selectCartItems } from '../../redux/cart-reducer/cartSelector'

import CustomButton from '../custom-button/custom-button'
import CartItem from '../cart-item/cartItem'

import './cartDropwdown.scss'

const Cart = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
            }
        
        </div>

        <CustomButton >GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps,null)(Cart);