import React from 'react'

import FormInput from '../../components/form-input/form-input'
import CustomButton from '../../components/custom-button/custom-button'

import { signInWithGoogle, auth } from '../../firebase/firebase'

import { SignInContainer, Title, ButtonsContainer } from './sign-inStyles'

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try{
            await auth.signInWithEmailAndPassword(email,password)
            this.state({email: '', password: ''})

        }catch(error){
            console.log(error)
        }

        this.setState({email: '', password: ''})
    }
    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }
    render(){
        return(
            <SignInContainer>
                <Title>I already have an Account</Title>
                <span>Sign In with your email and password</span>
                
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        value={this.state.email} 
                        required 
                        handleChange={this.handleChange}
                        type="email" 
                        label="email"
                    />
                    <FormInput 
                        name="password" 
                        value={this.state.password} 
                        required 
                        handleChange = {this.handleChange}
                        type="password" 
                        label="password"
                    />

                    <ButtonsContainer>
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign In with Google</CustomButton>
                    </ButtonsContainer>
                </form>
            </SignInContainer>
        )
    }
}

export default SignIn;