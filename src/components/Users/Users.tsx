import React from 'react'
import {UsersPropsType} from "./UsersContainer"
import classes from './Users.module.css'

function Users(props: UsersPropsType) {
    if (props.usersPage.users.lenght === 0) {
        props.setUsers([
            {
                id: 1,
                photoURL: 'http://www.rosphoto.com/images/u/articles/1510/4_8.jpg',
                followed: true,
                name: 'Urban', status: 'I am Pope',
                location: {city: 'Rome', country: 'Vatican'}
            },
            {
                id: 2,
                photoURL: 'https://bigpicture.ru/wp-content/uploads/2015/11/nophotoshop29-800x532.jpg',
                name: 'Charles',
                status: 'I am Emperor',
                location: {city: 'Paris', country: 'France'}
            },
            {
                id: 3,
                photoURL: 'https://wikiway.com/upload/resize_cache/uf/2ce/1024_800_1/gruzia_1.jpg',
                name: 'Peter',
                status: 'I am Emperor too',
                location: {city: 'Saint-Petersburg', country: 'Russia'}
            }
        ])
    }
    return (
        <div>
            {
                props.usersPage.users.map(u => <div key={u.id}>
<span>
    <div>
        <img src={u.photoURL} className={classes.photo}/>
    </div>
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
</span>
                    <span>
        <span>
<div>{u.name}</div>
<div>{u.status}</div>
        </span>
        <span>
<div>{u.location.country}</div>
<div>{u.location.city}</div>
        </span>
        </span>
                </div>)
            }
        </div>
    )
}

export default Users