import React from 'react'
import {InitialStateType, UsersType} from "../../redux/usersReducer";
import {UsersPropsType} from "./UsersContainer";

type PropsType = {
    follow: (usersId: number) => void
    unfollow: (usersId: number) => void
    setUsers: (users: Array<UsersType>) => void
    usersPage: InitialStateType
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (userId: number, followingInProgress: boolean) => void
    currentPage: number
    pageSize: number
    followingInProgress: Array<number>
    getUsers: (currentPage: number, pageSize: number) => void
}

class UsersAPIComponent extends React.Component<UsersPropsType> {

    render() {

        return <>
        </>
    }
}

export default UsersAPIComponent

