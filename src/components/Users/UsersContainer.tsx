import {AppStateType, RootStateType} from "../../redux/reduxStore"
import {connect} from "react-redux"
import {
    follow,
    InitialStateType, toggleIsFetching,
    setCurrentPage, setTotalUsersCount,
    setUsers, unfollow,
    UsersType, toggleFollowingProgress
} from "../../redux/usersReducer"
import UsersAPIComponent from "./UsersAPIComponent"

type MstpType = {
    usersPage: InitialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

type MdtpType = {
    follow: (usersId: number) => void
    unfollow: (usersId: number) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (userId: number, followingInProgress: boolean) => void
}

export type UsersPropsType = MdtpType & MdtpType

const mapStateToProps = (state: AppStateType): MstpType => {
    return {
        usersPage: state.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
        followingInProgress: state.users.followingInProgress
    }
}

export const UsersContainer = connect(mapStateToProps,
    {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsFetching,
        toggleFollowingProgress
    })(UsersAPIComponent)