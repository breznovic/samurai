type ActionsTypes = ReturnType<typeof setAuthUserData>

export type DataType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

const initialState: DataType = {id: null, email: null, login: null, isAuth: false}

export const authReducer = (state: DataType = initialState, action: ActionsTypes): DataType => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

export const setAuthUserData = (data: DataType) => {
    return {
        type: 'SET_USER_DATA',
        data
    } as const
}

