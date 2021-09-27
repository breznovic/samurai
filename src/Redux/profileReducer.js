const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    posts: [
        { id: 1, likes: 10, message: 'Hi there!' },
        { id: 2, likes: 9, message: 'I am learning React' },
        { id: 3, likes: 5, message: 'My skill in it improving everyday' },
        { id: 4, likes: 23, message: 'It is hard but interesting' }
    ],

    newPostText: ''

}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likes: 0
            };
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
        default: return state

    }

}


export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator =
    (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export default profileReducer
