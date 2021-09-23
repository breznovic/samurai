import {rerenderEntireTree} from '../render'

let state = {

    profilePage: {
        posts: [
            { id: 1, likes: 10, message: 'Hi there!' },
            { id: 2, likes: 9, message: 'I am learning React' },
            { id: 3, likes: 5, message: 'My skill in it improving everyday' },
            { id: 4, likes: 23, message: 'It is hard but interesting' }
        ],

        newPostText: 'React'

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

}

window.state = state;

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likes: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree (state);
}

export let updateNewPostText = (newText) => {
    
    state.profilePage.newPostText = newText;
    rerenderEntireTree (state);
}

export default state