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
            ]
        }
    },
    getState () {
        return this._state;
    },
    callSubscriber() {
        console.log('for nothing')
    },

    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likes: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },

    updateNewPostText(newText) {

        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    subscribe (observer) {
        this._callSubscriber = observer
    }
}



export default store;

window.store = store;
