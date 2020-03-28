import React from 'react'

import './sign-in.scss'

import FormInput from '../../components/form-input/form-input'
import CustomButton from '../../components/custom-button/custom-button'

import { signInWithGoogle } from '../../firebase/firebase'


class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = event => {
        event.preventDefault();

        this.setState({email: '', password: ''})
    }
    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }
    render(){
        return(
            <div className="sign-in">
                <h2>I already have an Account</h2>
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

                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;