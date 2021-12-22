import {ActionsTypes, DialogPageType, RootStateType} from "./store";

type PropsType = {
    state: RootStateType
    action: ActionsTypes
    rerenderEntireTree1: () => void
}

let initialState = {
    dialogs: [
        {id: 1, name: 'Homer'},
        {id: 2, name: 'Cristian'},
        {id: 3, name: 'Joe'},
        {id: 4, name: 'John'},
        {id: 5, name: 'Michael'},
    ],

    messages: [
        {id: 1, message: 'Hop'},
        {id: 2, message: 'Hey'},
        {id: 3, message: 'La'},
        {id: 4, message: 'La'},
        {id: 5, message: 'Ley'},
    ],
    newMessageBody: '',
}

export const dialogsReducer = (state: DialogPageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'UPDATE_NEW_MESSAGE_BODY':
            state.newMessageBody = action.message
            return state
        case "SEND_NEW_MESSAGE_BODY":
            let messageBody = state.newMessageBody
            state.messages.push({id: 6, message: messageBody})
            state.newMessageBody = ''
            return state
        default:
            return state
    }
}

export const UpdateNewMessageBodyAC = (message: string) => {
    return {
        type: 'UPDATE_NEW_MESSAGE_BODY',
        message
    } as const
}

export const SendMessageBodyAC = () => {
    return {
        type: 'SEND_NEW_MESSAGE_BODY'
    } as const
}