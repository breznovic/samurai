import React from "react"
import './Users.css'
import './../../Assets/Images/Troll.png'
import { NavLink } from "react-router-dom"
import * as axios from "axios"

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }



    return (

        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && 'selectedPage'}
                        onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
                })}


            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : 'userPhoto'}
                                    className='img' />
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.toggleFollowingProgress(true, u.id)

                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY" : "95e9da52-3032-4fe8-a832-78a1bde22151"
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode == 0) {
                                                props.unfollow(u.id)
                                            }
                                            props.toggleFollowingProgress(false, u.id)
                                        })

                                    props.unfollow(u.id)

                                }}>Follow</button>

                                : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.toggleFollowingProgress(true, u.id)
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY" : "95e9da52-3032-4fe8-a832-78a1bde22151"
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode == 0) {
                                                props.follow(u.id)
                                            }
                                            props.toggleFollowingProgress(false, u.id)
                                        })




                                }}>Unfollow</button>}

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.city"}</div>
                            <div>{"u.location.country"}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>)
}

export default Users