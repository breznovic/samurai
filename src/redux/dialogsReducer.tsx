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
    ]
}
type ActionTypes = ReturnType<typeof SendMessageBodyAC>

export const dialogsReducer = (state: DialogPageType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case "SEND_NEW_MESSAGE_BODY":
            const message = {id: 6, message: action.newMessageBody}

            return {
                ...state,
                dialogs: [...state.dialogs, {id: 6, name: 'Basil'}],
                messages: [...state.messages, message],
            }

        default:
            return state
    }
}

export const SendMessageBodyAC = (newMessageBody) => {
    return {
        type: 'SEND_NEW_MESSAGE_BODY',
        newMessageBody
    } as const
}