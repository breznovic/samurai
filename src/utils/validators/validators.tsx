import React from 'react'

export const required = (value) => {
    if (value) return undefined
    return 'Field is required'
}

export const maxLengthCreator = (maxLength: number) => {
    if (value.length > maxLength) return `Max length is ${maxLength} characters`
    return undefined
}