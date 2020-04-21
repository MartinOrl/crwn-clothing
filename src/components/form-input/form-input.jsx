import React from 'react'

import { GroupContainer, FormInputContainer, FormInputLabel } from './form-inputStyles'

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <GroupContainer>
        <FormInputContainer onChange={handleChange} {...otherProps} />
        {
            label ? <FormInputLabel value={otherProps.value}>{label}</FormInputLabel> : null
        }
    </GroupContainer>
)

export default FormInput;
