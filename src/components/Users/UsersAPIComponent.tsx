import React from 'react'
import {InitialStateType, toggleFollowingProgress, UsersType} from "../../redux/usersReducer";
import {Users} from "./Users";
import Preloader from "../Common/Preloader";
import {usersAPI} from "../../API/API";

type PropsType = {
    follow: (usersId: number) => void
    unfollow: (usersId: number) => void
    setUsers: (users: Array<UsersType>) => void
    usersPage: InitialStateType
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (followingInProgress: boolean, userId: number) => void
    currentPage: number
    pageSize: number
    followingInProgress: Array<number>
}

class UsersAPIComponent extends React.Component<PropsType, {}> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })
    }

    render() {

        return <>
            {this.props.usersPage.isFetching ? <Preloader/> : ''}
            <Users usersPage={this.props.usersPage}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   onPageChanged={this.onPageChanged}
                   toggleIsFetching={this.props.toggleIsFetching}
                   setUsers={this.props.setUsers}
                   setTotalUsersCount={this.props.setTotalUsersCount}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

export default UsersAPIComponent

