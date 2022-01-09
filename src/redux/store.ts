import {addPostAC, profileReducer, UpdateNewPostTextAC} from "./profileReducer";
import {dialogsReducer, SendMessageBodyAC, UpdateNewMessageBodyAC} from "./dialogsReducer";
import {followAC, unfollowAC} from "./usersReducer";

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

export type ProfilePageType = {
    posts: Array<PostPropsType>
    newPostText: string
}

export type DialogPageType = {
    dialogs: Array<DialogPropsType>
    messages: Array<MessagePropsType>
    newMessageBody: string
}

type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}

export type StoreType = {
    state: RootStateType
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    rerenderEntireTree1: () => void
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof UpdateNewPostTextAC>
    | ReturnType<typeof UpdateNewMessageBodyAC> | ReturnType<typeof SendMessageBodyAC>
    | ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> | ReturnType<typeof setUsersAC>

export let store: StoreType = {
    state: {
        profilePage: {
            posts: [
                {id: 1, posted: 'This is TypeScript', likes: 10},
                {id: 2, posted: 'TypeScript', likes: 5},
                {id: 3, posted: 'I write TypeScript!', likes: 7},
            ],
            newPostText: '',
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
