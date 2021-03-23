import React from 'react';

import { ContainerInput } from './styled'

const Input = ({ label, name, error, success, ...rest }) => {
    return (
        <ContainerInput error={error} success={success}>
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} {...rest} />
        </ContainerInput>
    );
}

export default Input;