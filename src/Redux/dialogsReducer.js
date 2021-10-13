const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {

    dialogs: [
        { id: 1, name: 'Goblin' },
        { id: 2, name: 'Gremlin' },
        { id: 3, name: 'Golem' },
        { id: 4, name: 'Goblet' },
        { id: 5, name: 'Gobble' }
    ],

    messages: [
        { id: 1, message: 'I am green!' },
        { id: 2, message: 'I am from subway!' },
        { id: 3, message: 'I made from stone!' },
        { id: 4, message: 'I made from gold!' },
        { id: 5, message: 'I love to eat!' }
    ],

    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {

let stateCopy

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }

        case SEND_MESSAGE: 
        let body = state.newMessageBody
        return {
            ...state,
            newMessageBody: '',
            messages: [...state.messages, { id: 6, message: body}]
        }
        
        default:
            return state
    }
}

export const sendMessageAC = () => {
    return {
        type: 'SEND_MESSAGE'
    }
}

export const updateNewMessageBodyAC = (body) => {
    return {
        type: 'UPDATE_NEW_MESSAGE_BODY', body: body
    }
}

export default dialogsReducer
