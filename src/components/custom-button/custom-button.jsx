import React from 'react'

import './custom-button.scss'

const CustomButton = ({ children, isGoogleSignIn , ...otherProps }) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button `}  {...otherProps} type="button" >
        {children}
    </button>
)
export default CustomButton;