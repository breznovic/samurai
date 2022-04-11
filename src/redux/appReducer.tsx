import {authAPI} from "../API/API";
import {Dispatch} from "redux";
import {stopSubmit} from 'redux-form';

type ActionsTypes = ReturnType<typeof setAuthUserData>

export type DataType = {
    initialized: boolean
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

const initialState: DataType = {initialized: false, id: null, email: null, login: null, isAuth: false}

export const appReducer = (state: DataType = initialState, action: ActionsTypes): DataType => {
    switch (action.type) {
        case 'INITIALIZED_SUCCESS':
            return {
                ...state,
                initialized: true,
                isAuth: true
            }
        default:
            return state
    }
}

export const initializedSuccess = (data: DataType) => {
    return {
        type: 'SET_USER_DATA',
        data
    } as const
}

export const getAuthUserData = () => (dispatch: Dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(response.data.data.login, isAuth: true))
            }
        })
}

export const login = (email, password, rememberMe) => (dispatch: Dispatch) => {

    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Something wrong'
                dispatch(stopSubmit('login', {_error: message}))
            }
        })
}

export const logout = () => (dispatch: Dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, isAuth: false))
            }
        })
}




