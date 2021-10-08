let rerenderEntireTree = () => {

}

let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Welcome to TrollNetwork!', like: 10 },
            { id: 2, message: 'I create it', like: 5 },
            { id: 3, message: 'Are you glad?', like: 15 }
        ],

        newPostText: 'TrollNetwork'
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
        ]
    }
}

window.state = state

export const addPost = () => {
    let newPost = {
        id:6,
        message: state.profilePage.newPostText,
        like: 0
    }
state.profilePage.posts.push(newPost)
state.profilePage.newPostText = ''
rerenderEntireTree(state)
}

export const updateNewPostText = (newText) => {
state.profilePage.newPostText = newText
rerenderEntireTree(state)
}

export const subscribe = (observer) => {
rerenderEntireTree = observer
}

export default state