import React from 'react'

import CustomButton from '../custom-button/custom-button'

import './cartDropwdown.scss'

const Cart = () => (
    <div className='cart-dropdown'>
        <div className='cart-items'>

        </div>
        <CustomButton >GO TO CHECKOUT</CustomButton>
    </div>
)

export default Cart;