import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CartIcon from '../cart-icon/cart-icon'
import Cart from '../cart/cartDropdown'

import { selectCartHiddenValue } from '../../redux/cart-reducer/cartSelector'
import { selectCurrentUser } from '../../redux/user-reducer/userSelectors'


import { ReactComponent as Logo } from '../../assets/crown.svg'

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './headerStyles'

import { signOutStart } from '../../redux/user-reducer/userAction'

const Header = ({currentUser, hidden, signOutStart }) => (
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
                currentUser ? <OptionLink as='div' onClick={signOutStart}>Sign Out</OptionLink> : <OptionLink to="/signin">Sign In</OptionLink>
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

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);