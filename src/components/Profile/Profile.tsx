import React from 'react'
import classes from '../Profile/Profile.module.css'
import lake from '../../Assets/Images/lake.jpg'


function Profile() {
    return (
        <div className={classes.content}>
            <div>
                <img src={lake}/>
            </div>
            <div className={classes.item}>
                Avatar + Description
            </div>
            <div className={classes.item}>
                My posts
                <div>
                    New post
                    <div>
                        <div>
                            First post
                        </div>
                        <div>
                            Second post
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile