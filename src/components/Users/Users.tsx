import classes from "./Users.module.css";
import avatar from "../../Assets/Images/avatar.jpg";
import React from "react";
import {InitialStateType, UsersType} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersProps = {
    usersPage: InitialStateType
    follow: (usersId: number) => void
    unfollow: (usersId: number) => void
    onPageChanged: (pageNumber: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    setUsers: (users: Array<UsersType>) => void
    setTotalUsersCount: (totalCount: number) => void
}

export let Users = (props: UsersProps) => {

    let pagesCount = Math.ceil(props.usersPage.totalUsersCount / props.usersPage.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.usersPage.currentPage === p ? classes.selected : ''}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
        </div>
        {
            props.usersPage.users.map(u => <div key={u.id}>
                <NavLink to={'/profile/' + u.id}>
                    <img src={u.photos.small && u.photos.large !== null ? u.photos.small : avatar}
                         className={classes.photo}/>
                </NavLink>
                <div>
                    {u.followed
                        ? <button onClick={() => {

                            axios.delete(`https://social-network.samuraijs.com/api/1.0/delete/${u.id}`, {
                                withCredentials: true,
                                headers: {'API-KEY': '7ab1beef-116d-4d2e-be2c-80cf2d156de8'}
                            })
                                .then(response => {
                                    if (response.data.resultCode == 0) {
                                        props.unfollow(u.id)
                                    }
                                })}}>Unfollow</button>
                        : <button onClick={() => {

                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                withCredentials: true,
                                headers: {'API-KEY': '7ab1beef-116d-4d2e-be2c-80cf2d156de8'}
                            })
                                .then(response => {
                                   if (response.data.resultCode == 0) {
                            props.follow(u.id)
                                   }
                                })}}>Follow</button>}
                </div>
                <div>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </div>
            </div>)
        }
    </div>
}