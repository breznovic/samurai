import {combineReducers, createStore} from "redux";
import {addPostAC, profileReducer, setUserProfile, UpdateNewPostTextAC} from "./profileReducer";
import {dialogsReducer, SendMessageBodyAC, UpdateNewMessageBodyAC} from "./dialogsReducer";
import {follow, setUsers, unfollow, usersReducer} from "./usersReducer";

export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof UpdateNewPostTextAC>
    | ReturnType<typeof UpdateNewMessageBodyAC> | ReturnType<typeof SendMessageBodyAC>
    | ReturnType<typeof follow> | ReturnType<typeof unfollow> | ReturnType<typeof setUsers> | ReturnType<typeof setUserProfile>

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

export let oldStore: StoreType = {
    state: {
        profilePage: {
            posts: [
                {id: 1, posted: 'This is TypeScript', likes: 10},
                {id: 2, posted: 'TypeScript', likes: 5},
                {id: 3, posted: 'I write TypeScript!', likes: 7},
            ],
            newPostText: '',
            profile: {
                userId: 1,
                lookingForAJob: false,
                lookingForAJobDescription: '',
                fullName: '',
                contacts: {
                    github: '',
                    vk: '',
                    facebook: '',
                    instagram: '',
                    twitter: '',
                    website: '',
                    youtube: '',
                    mainLink: ''
                },
                photos: {
                    small: '',
                    large: '',
                }
            }
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Homer'},
                {id: 2, name: 'Cristian'},
                {id: 3, name: 'Joe'},
                {id: 4, name: 'John'},
                {id: 5, name: 'Michael'},
            ],

            messages: [
                {id: 1, message: 'Hop'},
                {id: 2, message: 'Hey'},
                {id: 3, message: 'La'},
                {id: 4, message: 'La'},
                {id: 5, message: 'Ley'},
            ],
            newMessageBody: '',
        },
        sidebar: {},
    },
    getState() {
        return this.state
    },
    rerenderEntireTree1() {
    },
    subscribe(observer) {
        this.rerenderEntireTree1 = observer
    },
    dispatch(action: ActionsTypes) {
        this.state.profilePage = profileReducer(this.state.profilePage, action)
        this.state.dialogsPage = dialogsReducer(this.state.dialogsPage, action)
        this.rerenderEntireTree1()
    }
}

export const rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    users: usersReducer
})

export type RootStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer)

export default store