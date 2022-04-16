import classes from "./Users.module.css";
import avatar from "../../assets/Images/avatar.jpg";
import React from "react";
import {UsersType} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";

type UsersProps = {
    users: Array<UsersType>
    totalUsersCount: number
    currentPage: number
    pageSize: number
    follow: (usersId: number) => void
    unfollow: (usersId: number) => void
    onPageChanged: (pageNumber: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    setUsers: (users: Array<UsersType>) => void
    setTotalUsersCount: (totalCount: number) => void
    followingInProgress: Array<number>
}

export let Users = (props: UsersProps) => {
    return <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                   totalItemsCount={totalUsersCount} pageSize={pageSize}/>
        <div>
            {
                users.map(u => <User user={u}
                                     followingInProgress={props.followingInProgress}
                                     key={u.id}
                                     unfollow={props.unfollow}
                                     follow={props.follow}
                    />
                )
            }
        </div>
    </div>
}