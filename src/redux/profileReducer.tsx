import { ProfilePageType, ProfilePropsType} from "./reduxStore";

let initialState:ProfilePageType= {
    posts: [
        {id: 1, posted: 'This is TypeScript', likes: 10},
        {id: 2, posted: 'TypeScript', likes: 5},
        {id: 3, posted: 'I write TypeScript!', likes: 7},
    ],
    newPostText: '',
    profile: null,
}

type ActionType =
    ReturnType<typeof addPostAC> |
    ReturnType<typeof UpdateNewPostTextAC> |
    ReturnType<typeof setUserProfile>

export const profileReducer = (state: ProfilePageType = initialState, action: ActionType):ProfilePageType=> {
    switch(action.type) {
        case 'ADD_POST':
            let newPost = {
                "id": 4,
                "posted": action.posted,
                "likes": 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return {...state}
        case 'UPDATE_NEW_POST_TEXT': {
            state.newPostText = action.newText
            return {...state}
        }
       case 'SET_USER_PROFILE':
            return {...state, profile:action.profile}
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

export const setUserProfile = (profile: ProfilePropsType ) => {
    return {
        type: 'SET_USER_PROFILE',
        profile
    } as const
}