import React from 'react'
import {Field, reduxForm} from 'redux-form';

export const required = (value) => {
    if (value) return undefined
    return 'Field is required'
}

export const maxLengthCreator = (maxLength: number) => {
    if (value.length > maxLength) return `Max length is ${maxLength} characters`
    return undefined
}