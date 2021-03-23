import React from 'react';

import { ContainerInput } from './styled'

const InputDate = ({ label, name, error, success, ...rest }) => {
    return (
        <ContainerInput error={error} success={success}>
            <label htmlFor={name}>{label}</label>
            <input type="date" id={name} {...rest} />
        </ContainerInput>
    );
}

export default InputDate;