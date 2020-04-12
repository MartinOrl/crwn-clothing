import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'

import ShopPage from './pages/shop/shop'
import Homepage from './pages/homepage/homepage'
import Header from './components/header/header'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import CheckoutPage from './pages/checkout/checkout'
import { auth, createUserProfileDocument } from './firebase/firebase'
import { setCurrentUser } from './redux/user-reducer/userAction'
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user-reducer/userSelectors'

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
        });
      }
      else{
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth(); 
  }

  render(){
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
              this.props.currentUser ? (<Redirect to="/" />) :  (<SignInAndSignUpPage />)
            } 
          />
        </Switch>
      </div>
      )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})


const mapDispatchToProps = dispatch => ({
  setCurrentUser:user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
