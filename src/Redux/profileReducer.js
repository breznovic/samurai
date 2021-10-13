const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

let initialState = {
    posts: [
        { id: 1, message: 'Welcome to TrollNetwork!', like: 10 },
        { id: 2, message: 'I create it', like: 5 },
        { id: 3, message: 'Are you glad?', like: 15 }
    ],

    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 6,
                message: state.newPostText,
                like: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }

        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }

        }
        default:
            return state
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

export default profileReducer