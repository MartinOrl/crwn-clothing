import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { toggleCartHidden } from '../../redux/cart-reducer/cartActions'
import { selectCartItemsCount } from '../../redux/cart-reducer/cartSelector'
 
import { ReactComponent as ShoppingIcon } from '../../assets/shoppingCart.svg'

import './cart-icon.scss'

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={toggleCartHidden} >
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>

    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})



export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);