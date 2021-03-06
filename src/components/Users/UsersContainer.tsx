import React from 'react'
import {AppStateType, RootStateType} from "../../redux/reduxStore"
import {Users} from '../Users/Users'
import {connect} from "react-redux"
import {
    follow,
    InitialStateType,
    setCurrentPage,
    unfollow,
    UsersType, toggleFollowingProgress, requestUsers, setUsers, setTotalUsersCount, toggleIsFetching,
} from "../../redux/usersReducer"
import Preloader from "../Common/Preloader";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/usersSelectors";


export type UsersPropsType = MdtpType & MstpType


class UserContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize} = this.props;
        this.props.getUsers(pageNumber, pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
                   setUsers={this.props.setUsers}
                   setTotalUsersCount={setTotalUsersCount}
                   toggleIsFetching={toggleIsFetching}/>
        </>
    }

}

type MdtpType = {
    follow: (usersId: number) => void
    unfollow: (usersId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    setCurrentPage: (pageNumber: number) => void
    toggleFollowingProgress: ( followingInProgress: boolean,userId: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    setUsers: (users: Array<UsersType>) => void
    setTotalUsersCount: (totalCount: number) => void
}

type MstpType = {
    users: Array<UsersType>
    usersPage: InitialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}
// const mapStateToProps = (state: AppStateType): MstpType => {
//     return {
//         users: state.users.users,
//         usersPage: state.users,
//         pageSize: state.users.pageSize,
//         totalUsersCount: state.users.totalUsersCount,
//         currentPage: state.users.currentPage,
//         isFetching: state.users.isFetching,
//         followingInProgress: state.users.followingInProgress
//     }
// }

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose<React.ComponentType>(connect<MstpType, MdtpType, {}, RootStateType>(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        getUsers: requestUsers,
        toggleIsFetching,
        setUsers,
        setTotalUsersCount,
    }),
    withAuthRedirect
)(UserContainer)