import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { auth } from '../../firebase/firebase'

import CartIcon from '../cart-icon/cart-icon'
import Cart from '../cart/cartDropdown'

import { selectCartHiddenValue } from '../../redux/cart-reducer/cartSelector'
import { selectCurrentUser } from '../../redux/user-reducer/userSelectors'


import { ReactComponent as Logo } from '../../assets/crown.svg'

import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink } from './headerStyles'

const Header = ({currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className="logo" />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to="/shop">
                Shop
            </OptionLink>
            <OptionLink to="/shop">
                Contact
            </OptionLink>
            {
                currentUser ? <OptionDiv onClick={() => auth.signOut()}>Sign Out</OptionDiv> : <OptionLink to="/signin">Sign In</OptionLink>
            }
            <CartIcon />
        </OptionsContainer>
        {
            hidden ? null : <Cart />
        }
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHiddenValue
})

export default connect(mapStateToProps)(Header);