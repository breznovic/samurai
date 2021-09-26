import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

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

        },

        sidebar: {}
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

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action)

        this._callSubscriber(this._state);

    }
}






export default store;

window.store = store;
