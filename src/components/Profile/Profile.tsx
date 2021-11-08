import React from 'react'
import classes from '../Profile/Profile.module.css'
import lake from '../../Assets/Images/lake.jpg'


function Profile() {
    return (
        <div className={classes.content}>
            <div>
                <img src={lake}/>
            </div>
            <div>
                Avatar + Description
            </div>
            <div>
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