const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'


let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Welcome to TrollNetwork!', like: 10 },
                { id: 2, message: 'I create it', like: 5 },
                { id: 3, message: 'Are you glad?', like: 15 }
            ],

            newPostText: ''
        },

        dialogsPage: {

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
    },
    getState() {
        return this._state
    },
    rerenderEntireTree() { },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        if (action.type === 'ADD_POST') {
            let newPost = {
                id: 6,
                message: this._state.profilePage.newPostText,
                like: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE_NEW_POST_TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE_NEW_MESSAGE_BODY') {
            this._state.dialogsPage.newMessageBody = action.body
            this._callSubscriber(this._state)
        } else if (action.type === 'SEND_MESSAGE') {
            let body = this._state.dialogsPage.newMessageBody
            this._state.dialogsPage.newMessageBody = ''
            this._state.dialogsPage.messages.push({ id: 6, message: body })
            this._callSubscriber(this._state)
        }
    }
}

export const addPostAC = () => {
    return {
        type: 'ADD_POST'
    }
}

export const updateNewPostTextAC = (text) => {
    return {
        type: 'UPDATE_NEW_POST_TEXT', newText: text
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

window.store = store

export default store