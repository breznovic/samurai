import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {addPostAC, profileReducer, getUserProfile, UpdateNewPostTextAC} from "./profileReducer";
import {dialogsReducer, SendMessageBodyAC, UpdateNewMessageBodyAC} from "./dialogsReducer";
import {follow, setUsers, unfollow, usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";

export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof UpdateNewPostTextAC>
    | ReturnType<typeof UpdateNewMessageBodyAC> | ReturnType<typeof SendMessageBodyAC>
    | ReturnType<typeof follow> | ReturnType<typeof unfollow> | ReturnType<typeof setUsers> | ReturnType<typeof getUserProfile>

export type MessagePropsType = {
    id: number
    message: string
}

export type DialogPropsType = {
    id: number
    name: string
}

export type PostPropsType = {
    posted: string
    likes: number
    id: number
}

export type DialogPageType = {
    dialogs: Array<DialogPropsType>
    messages: Array<MessagePropsType>
    newMessageBody: string
}

export type AppStateType = ReturnType<typeof rootReducer>

export type StoreReduxType = typeof store

export type ProfilePropsType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string}
    photos: {
        small: string
        large: string
    }
}

export type ProfilePageType = {
    posts: Array<PostPropsType>
    newPostText: string
    profile: ProfilePropsType | null
    status: string
}

export type OldRootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}

type SidebarType = {}

export type StoreType = {
    state: OldRootStateType
    subscribe: (observer: () => void) => void
    getState: () => OldRootStateType
    rerenderEntireTree1: () => void
    dispatch: (action: ActionsTypes) => void
}

export const rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    users: usersReducer,
    auth: authReducer
})

export type RootStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer, applyMiddleware(thunk))

export default store