const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    messages: [
        { id: 1, message: 'Hei ho' },
        { id: 2, message: 'Little Know' },
        { id: 3, message: 'Middle Big' },
        { id: 4, message: 'Here was a big trouble' },
        { id: 5, message: 'Hop hei la la ley!' }
    ],

    dialogs: [
        { id: 1, name: 'Merlin' },
        { id: 2, name: 'Gremlin' },
        { id: 3, name: 'Goblin' },
        { id: 4, name: 'Goblet' },
        { id: 5, name: 'Gobelen' }
    ],

    newMessageBody: ''

}

const dialogsReducer = (state = initialState, action) => {
switch (action.type) {
case UPDATE_NEW_MESSAGE_BODY:
    state.newMessageBody = action.body
    return state
    case SEND_MESSAGE:
        let body = state.newMessageBody;
        state.newMessageBody = '';
        state.messages.push({ id: 6, message: body })
        return state
        default:
            return state
}
    
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator =
    (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })
export default dialogsReducer




