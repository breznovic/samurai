import {combineReducers, createStore, Store} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {usersReducer} from "./usersReducer";

export type AppStateType = ReturnType<typeof rootReducer>

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

export type DialogPageType = {
    dialogs: Array<DialogPropsType>
    messages: Array<MessagePropsType>
    newMessageBody: string
}

export const rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    users: usersReducer
})

let store: Store<RootStateType> = createStore(rootReducer)

export type RootStateType = ReturnType<typeof rootReducer>

export default store