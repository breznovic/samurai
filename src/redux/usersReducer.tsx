type LocationType = {
    city: string
    country: string
}

type ActionsTypes = ReturnType<typeof follow> | ReturnType<typeof unfollow> | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage> | ReturnType<typeof setTotalUsersCount> | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingProgress>

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
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

const initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
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
            return {...state, users: action.users}

        case 'SET_CURRENT_PAGE':
            return {...state, currentPage: action.currentPage}

        case 'SET_TOTAL_USERS_COUNT':
            return {...state, totalUsersCount: action.totalCount}
        case 'TOGGLE_IS_FETCHING':
            return {...state, isFetching: action.isFetching}
        case 'TOGGLE_IS_FOLLOWING_PROGRESS':
            return {
                ...state,
                followingInProgress: action.followingInProgress ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

export const follow = (usersId: number) => {
    return {
        type: 'FOLLOW',
        usersId
    } as const
}

export const unfollow = (usersId: number) => {
    return {
        type: 'UNFOLLOW',
        usersId
    } as const
}

export const setUsers = (users: Array<UsersType>) => {
    return {
        type: 'SET_USERS',
        users
    } as const
}

export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET_CURRENT_PAGE',
        currentPage
    } as const
}

export const setTotalUsersCount = (totalCount: number) => {
    return {
        type: 'SET_TOTAL_USERS_COUNT',
        totalCount
    } as const
}

export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: 'TOGGLE_IS_FETCHING',
        isFetching
    } as const
}

export const toggleFollowingProgress = (followingInProgress: boolean, userId: number) => {
    return {
        type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
        followingInProgress,
        userId
    } as const
}


