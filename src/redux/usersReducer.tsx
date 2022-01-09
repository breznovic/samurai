import {ActionsTypes, RootStateType} from "./store";

type LocationType = {
    city: string
    country: string
}

type UsersType = {
    id: number
    name: string
    status: string
    location: LocationType
}

// type PropsType = {
//     state: RootStateType
//     action: ActionsTypes
//     rerenderEntireTree1: () => void
// }

let initialState: Array<UsersType> = [
    {id: 1, name: 'Urban', status: 'I am Pope', location: {city: 'Rome', country: 'Vatican'}},
    {id: 1, name: 'Charles', status: 'I am Emperor', location: {city: 'Paris', country: 'France'}},
    {id: 1, name: 'Peter', status: 'I am Emperor too', location: {city: 'Saint-Petersburg', country: 'Russia'}}
]

export const usersReducer = (state: UsersType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case '':

            return {...state}
        case '':

            return {...state}
        default:
            return state
    }
}

export const addPostAC = (posted: string) => {
    return {
        type: '',

    } as const
}

export const UpdateNewPostTextAC = (newText: string) => {
    return {
        type: '',

    } as const
}