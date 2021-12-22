import {ActionsTypes, ProfilePageType, RootStateType} from "./store";

// type PropsType = {
//     state: RootStateType
//     action: ActionsTypes
//     rerenderEntireTree1: () => void
// }

let initialState = {
    posts: [
        {id: 1, posted: 'This is TypeScript', likes: 10},
        {id: 2, posted: 'TypeScript', likes: 5},
        {id: 3, posted: 'I write TypeScript!', likes: 7},
    ],
    newPostText: '',
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {
    switch(action.type) {
        case 'ADD_POST':
            let newPost = {
                "id": 4,
                "posted": action.posted,
                "likes": 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case 'UPDATE_NEW_POST_TEXT':
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

export const addPostAC = (posted: string) => {
    return {
        type: 'ADD_POST',
        posted
    } as const
}

export const UpdateNewPostTextAC = (newText: string) => {
    return {
        type: 'UPDATE_NEW_POST_TEXT',
        newText
    } as const
}