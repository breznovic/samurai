import {RootStateType} from "../../redux/reduxStore";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {followAC, InitialStateType, setUsersAC, unfollowAC, UsersType} from "../../redux/usersReducer";
import Users from "./Users";

type MstpType = {
    usersPage: InitialStateType
}

type MdtpType = {
    follow: (usersId: number) => void
    unfollow: (usersId: number) => void
    setUsers: (users: Array<UsersType>) => void
}

export type UsersPropsType = MdtpType & MdtpType

const mapStateToProps = (state: RootStateType): MstpType => ({

    })

const mapDispatchToProps = (dispatch: Dispatch): MdtpType => {
    return {
        follow: (usersId: number) => {
            dispatch(followAC(usersId))
        },
        unfollow: (usersId: number) => {
            dispatch(unfollowAC(usersId))
        },
        setUsers: (users: Array<UsersType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)