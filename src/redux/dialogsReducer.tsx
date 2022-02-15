import { DialogPageType} from "./reduxStore";

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
type ActionTypes =
    ReturnType<typeof UpdateNewMessageBodyAC> |
    ReturnType<typeof SendMessageBodyAC>

export const dialogsReducer = (state: DialogPageType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case 'UPDATE_NEW_MESSAGE_BODY':
            return {
                ...state,
                newMessageBody: action.message
            }
            // return state
        case "SEND_NEW_MESSAGE_BODY":
            const message = {id: 6, message: state.newMessageBody}

            return {
                ...state,
                dialogs: [...state.dialogs, {id: 6, name: 'Basil'}],
                messages: [...state.messages, message],
                newMessageBody: ''
            }

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