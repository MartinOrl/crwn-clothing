import React, { useEffect } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'

import ShopPage from './pages/shop/shop'
import Homepage from './pages/homepage/homepage'
import Header from './components/header/header'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import CheckoutPage from './pages/checkout/checkout'
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user-reducer/userSelectors'
import { checkUserSession } from './redux/user-reducer/userAction'

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession]);

  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route  path="/shop" component={ShopPage} />
        
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route 
          exact 
          path="/signin" 
          render={() => 
            currentUser ? (<Redirect to="/" />) :  (<SignInAndSignUpPage />)
          } 
        />
      </Switch>
    </div>
    )
}


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
