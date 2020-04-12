import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { auth } from '../../firebase/firebase'

import CartIcon from '../cart-icon/cart-icon'
import Cart from '../cart/cartDropdown'

import { selectCartHiddenValue } from '../../redux/cart-reducer/cartSelector'
import { selectCurrentUser } from '../../redux/user-reducer/userSelectors'


import { ReactComponent as Logo } from '../../assets/crown.svg'

import './header.scss'

const Header = ({currentUser, hidden }) => (
    <div className="header">
        <Link to="/" className="logo-container">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                Shop
            </Link>
            <Link className="option" to="/shop">
                Contact
            </Link>
            {
                currentUser ? <div className="option" onClick={() => auth.signOut()}>Sign Out</div> : <Link className="option" to="/signin">Sign In</Link>
            }
            <CartIcon />
        </div>
        {
            hidden ? null : <Cart />
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHiddenValue
})

export default connect(mapStateToProps)(Header);