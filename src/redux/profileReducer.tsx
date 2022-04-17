import {ProfilePageType, ProfilePropsType} from "./reduxStore";
import {profileAPI, usersAPI} from "../API/API";
import {Dispatch} from "redux";

let initialState: ProfilePageType = {
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
    ReturnType<typeof setUserProfile> |
    ReturnType<typeof setStatusAC>

export const profileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case 'ADD_POST':
            let newPost = {
                "id": 4,
                "posted": action.newPostText,
                "likes": 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return {...state}
        case 'SET_USER_PROFILE': {
            return {...state, profile: action.profile}
        }
        case 'SET_STATUS': {
            return {...state, status: action.status}
        }
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(p => p.id != action.postId)}
        }
        case SAVE_PHOTO_SUCCESS: {
            return {...state, profile: {...state.profile, photos: action.photos}}
        }
        default:
            return state
    }


    export const addPostAC = (newPostText: string) => {
        return {
            type: 'ADD_POST',
            newPostText
        } as const
    }

    export const setUserProfile = (profile: ProfilePropsType) => {
        return {
            type: 'SET_USER_PROFILE',
            profile
        } as const
    }

    export const setStatusAC = (status: string) => {
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

        export const deletePost = (postId) => ({type: DELETE_POST, postId})
        export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})

        export const savePhoto = (file) => async (dispatch) => {
            let response = await profileAPI.savePhoto(file);

            if (response.data.resultCode === 0) {
                dispatch(savePhotoSuccess(response.data.data.photos));
            }
        }
    }

}