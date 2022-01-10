import React from 'react'
import classes from './Users.module.css'
import {InitialStateType, UsersType} from "../../redux/usersReducer";
import axios from "axios";
import avatar from '../../Assets/Images/avatar.jpg'

type PropsType = {
    follow: (usersId: number) => void
    unfollow: (usersId: number) => void
    setUsers: (users: Array<UsersType>) => void
    usersPage: InitialStateType
}

class Users extends React.Component<PropsType, {}>  {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {

        return (

            <div>
                {
                    this.props.usersPage.users.map(u => <div key={u.id}>
                        <img src={u.photos.small && u.photos.large !== null ? u.photos.small : avatar} className={classes.photo}/>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
                                }}>Follow</button>
                            }
                        </div>
                        <div>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </div>
                    </div>)
                }
            </div>
        )
    }
}

export default Users