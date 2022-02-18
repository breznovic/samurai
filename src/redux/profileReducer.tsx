import { ProfilePageType, ProfilePropsType} from "./reduxStore";
import {profileAPI, usersAPI} from "../API/API";
import {Dispatch} from "redux";

let initialState:ProfilePageType= {
    posts: [
        {id: 1, posted: 'This is TypeScript', likes: 10},
        {id: 2, posted: 'TypeScript', likes: 5},
        {id: 3, posted: 'I write TypeScript!', likes: 7},
    ],
    newPostText: '',
    profile: null,
    status: ''
}

type ActionType =
    ReturnType<typeof addPostAC> |
    ReturnType<typeof UpdateNewPostTextAC> |
    ReturnType<typeof setUserProfile> |
    ReturnType<typeof setStatusAC>

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
        case 'SET_USER_PROFILE': {
            return {...state, profile: action.profile}
        }
        case 'SET_STATUS': {
            return {...state, status: action.status}
        }
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

export const setStatusAC = (status: string ) => {
    return {
        type: 'SET_STATUS',
        status
    } as const
}

export const getUserProfile = (userId: number) => (dispatch: Dispatch) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
}

export const getStatus = (userId: number) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatusAC(response.data))
        })
}

export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatusAC(status))
            }
        })
}