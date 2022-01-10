import {ActionsTypes, RootStateType} from "./store";

type LocationType = {
    city: string
    country: string
}

export type UsersType = {
    id: number
    photos: {
        small: string
        large: string
    }
    followed: boolean
    name: string
    status: string
    location: LocationType
}

export type InitialStateType = {
    users: Array<UsersType>
}

const initialState: InitialStateType = {
    users: []
}

export const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
            users: state.users.map(u => {
                if (u.id === action.usersId) {
                    return {...u, followed: true}
                }
                return u
            })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.usersId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case 'SET_USERS':
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}

export const followAC = (usersId: number) => {
    return {
        type: 'FOLLOW',
        usersId
    } as const
}

export const unfollowAC = (usersId: number) => {
    return {
        type: 'UNFOLLOW',
        usersId
    } as const
}

export const setUsersAC = (users: Array<UsersType>) => {
    return {
        type: 'SET_USERS',
        users
    } as const
}