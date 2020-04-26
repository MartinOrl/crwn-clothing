import React, { useState } from 'react'
import { connect } from 'react-redux'

import FormInput from '../../components/form-input/form-input'
import CustomButton from '../../components/custom-button/custom-button'

import { SignInContainer, Title, ButtonsContainer } from './sign-inStyles'

import { GoogleSignInStart, EmailSignInStart } from '../../redux/user-reducer/userAction'

const SignIn = ({ EmailSignInStart, GoogleSignInStart }) => {

    const [userCredentials, setCredentials] = useState({ 'email': '', 'password': '' })

    const { email, password } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
        EmailSignInStart(email, password)
    }
    const handleChange = event => {
        const { value, name } = event.target;
        setCredentials({...userCredentials, [name]: value })
    }
    return(
        <SignInContainer>
            <Title>I already have an Account</Title>
            <span>Sign In with your email and password</span>
            
            <form onSubmit={handleSubmit}>
                <FormInput 
                    name="email" 
                    value={email} 
                    required 
                    handleChange={handleChange}
                    type="email" 
                    label="email"
                />
                <FormInput 
                    name="password" 
                    value={password} 
                    required 
                    handleChange = {handleChange}
                    type="password" 
                    label="password"
                />

                <ButtonsContainer>
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton type='button' onClick={GoogleSignInStart} isGoogleSignIn >Sign In with Google</CustomButton>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    )
}


const mapDispatchToProps = dispatch => ({
    GoogleSignInStart: () => dispatch(GoogleSignInStart()),
    EmailSignInStart: (email, password) => dispatch(EmailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);