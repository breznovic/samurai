import dialogsReducer from "./dialogsReducer"
import profileReducer from "./profileReducer"
import sidebarReducer from "./sidebarReducer"

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

        this._state.profilePage = profileReducer (this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer (this._state.dialogsPage, action)
        // this._state.profilePage = sidebarReducer (this._state.profilePage, action) 
        
        this._callSubscriber(this._state)
    }
}

window.store = store

export default store