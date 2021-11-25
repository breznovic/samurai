import {rerenderEntireTree} from "../render";

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
}

export type DialogPageType = {
    dialogs: Array<DialogPropsType>
    messages: Array<MessagePropsType>
}

type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}

export let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, posted: 'This is TypeScript', likes: 10},
            {id: 2, posted: 'TypeScript', likes: 5},
            {id: 3, posted: 'I write TypeScript!', likes: 7},
        ]
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
        ]
    },
    sidebar: {}
}

export let addPost = (postMessage: string) => {
    let newPost = {
        id: 4,
        posted: postMessage,
        likes: 0
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
}

export default state