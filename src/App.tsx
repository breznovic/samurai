import React from 'react'
import classes from './App.module.css'
import samurai from '../src/Assets/Images/samurai.jpg'
import lake from '../src/Assets/Images/lake.jpg'

const App = () => {

    return (
        <div className={classes.appWrapper}>
            <header className={classes.header}>
                <img src={samurai}/>
            </header>
            <nav className={classes.nav}>
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>Users</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>
            <div className={classes.content}>
                <div>
                <img src={lake} />
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
        </div>
    )
}

export default App
