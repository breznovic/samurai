import React from 'react'
import classes from './Users.module.css'
import {InitialStateType, UsersType} from "../../redux/usersReducer";
import axios from "axios";

type PropsType = {
    follow: (usersId: number) => void
    unfollow: (usersId: number) => void
    setUsers: (users: Array<UsersType>) => void
    usersPage: InitialStateType
}

function Users(props: PropsType) {
    if (props.usersPage.users.length === 0) {

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers()
        })
    }
    return (
        <div>
            {props.usersPage.users.map(u => <div key={u.id}>
                <img src={u.photoURL} className={classes.photo}/>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>
                    }
                </div>

                <div>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </div>
                <div>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </div>
            </div>)
            }
        </div>
    )
}

export default Users