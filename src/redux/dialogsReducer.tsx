import {ActionsTypes, DialogPageType, RootStateType} from "./state";

type PropsType = {
    state: RootStateType
    action: ActionsTypes
    rerenderEntireTree1: () => void
}

export const dialogsReducer = (state: DialogPageType, action: ActionsTypes) => {
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