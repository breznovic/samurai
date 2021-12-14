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
}

type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}

let rerenderEntireTree = (state: any) => {
    console.log('State is changed')
}

export type StoreType = {
    _state: RootStateType
    updateNewPostText: (newText: string) => void
    addPost: (newPost: string) => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
}

export let store: StoreType = {
    _state: {
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
            ]
        },
        sidebar: {},
        updateNewPostText(newText: string) {
            this._state.profilePage.newPostText = newText
            rerenderEntireTree(this._state)
        },
        addPost(newPost: string) {
            let newPost = {
                    id: 4,
                    posted: this._state.profilePage.newPostText,
                    likes: 0
                },
                this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            rerenderEntireTree(this._state)
        },
        subscribe = (observer) => {
            rerederEntireTree = observer
    },
        getState() {
        return this._state
        }
    }
}