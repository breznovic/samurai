import classes from "./Users.module.css";
import avatar from "../../Assets/Images/avatar.jpg";
import React from "react";
import {UsersType} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";

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

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? classes.selected : ''}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <NavLink to={'/profile/' + u.id}>
                    <img src={u.photos.small && u.photos.large !== null ? u.photos.small : avatar}
                         className={classes.photo}/>
                </NavLink>
                <div>
                    {u.followed
                        ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}
                </div>
                <div>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </div>
            </div>)
        }
    </div>
}
