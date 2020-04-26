import React, {useState} from 'react'
import { connect } from 'react-redux'

import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/custom-button'

import { SignUpContainer, Title, Form } from './sign-upStyles'

import { signUpStart } from '../../redux/user-reducer/userAction'

const SignUp = ({ signUpStart }) => {
    const [ userCredentials, setUserCredentials ] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword : ''
    }) 
    
    const { displayName, email, password, confirmPassword } = userCredentials;
    
    const handleSubmit = async event =>{
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }
        signUpStart({ displayName, email, password })

    }

    const handleChange = event =>{
        const { name, value } = event.target;

        setUserCredentials({...userCredentials, [name]: value});
    }
    return(
        <SignUpContainer>
            <Title>I do not have an account</Title>
            <span>Sign up with your email and password</span>
            <Form onSubmit={handleSubmit}>
                <FormInput 
                    type="text" 
                    name="displayName" 
                    value={displayName} 
                    onChange={handleChange} 
                    label="Display Name" 
                    required />
                <FormInput 
                    type="email" 
                    name="email" 
                    value={email} 
                    onChange={handleChange} 
                    label="Email" 
                    required />
                <FormInput 
                    type="password" 
                    name="password" 
                    value={password} 
                    onChange={handleChange} 
                    label="Password" 
                    required />
                <FormInput 
                    type="password" 
                    name="confirmPassword" 
                    value={confirmPassword} 
                    onChange={handleChange} 
                    label="Confirm Password" 
                    required />
                <CustomButton type="submit" >Sign Up</CustomButton>
            </Form>
        </SignUpContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp)