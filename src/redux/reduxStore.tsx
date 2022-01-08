import {combineReducers, createStore, Store} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";

export type AppStateType = ReturnType<typeof reducers>

export type StoreReduxType = typeof store

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

// export type ProfilePageType = {
//     posts: Array<PostPropsType>
//     newPostText: string
// }

export type DialogPageType = {
    dialogs: Array<DialogPropsType>
    messages: Array<MessagePropsType>
    newMessageBody: string
}

// type SidebarType = {}

// export type RootStateType = {
//     profilePage: ProfilePageType
//     dialogsPage: DialogPageType
//     sidebar: SidebarType
// }

// export type StoreType = {
//     state: RootStateType
//     subscribe: (observer: () => void) => void
//     getState: () => RootStateType
//     rerenderEntireTree1: () => void
//     dispatch: (action: ActionsTypes) => void
// }

// export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof UpdateNewPostTextAC>
//     | ReturnType<typeof UpdateNewMessageBodyAC> | ReturnType<typeof SendMessageBodyAC>

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
})

let store: Store<RootStateType> = createStore(reducers)

export type RootStateType = ReturnType<typeof reducers>

export default store