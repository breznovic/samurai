const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let store = {
    _state: {

        profilePage: {
            posts: [
                { id: 1, likes: 10, message: 'Hi there!' },
                { id: 2, likes: 9, message: 'I am learning React' },
                { id: 3, likes: 5, message: 'My skill in it improving everyday' },
                { id: 4, likes: 23, message: 'It is hard but interesting' }
            ],

            newPostText: ''

        },

        dialogsPage: {
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
    },
    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('for nothing')
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likes: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({ id: 6, message: body });
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator =
    (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator =
    (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })


export default store;

window.store = store;
