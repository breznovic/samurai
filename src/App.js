import React from 'react'
import './App.css'
import icon from './Assets/Images/icon.png'
import reactCover from './Assets/Images/reactCover.jpg'


const App = (props) => {

  return (

    <div className='app-wrapper'>
      <header className='header'>
        <img src={icon} />
      </header>
      <nav className='nav'>
      <div>Profile</div>
      <div>Messages</div>
      <div>News</div>
      <div>Music</div>
      <div>Settings</div>
        </nav>
        <div className='content'>
          <div>
          <img src={reactCover} />
          </div>
          <div>Avatar + Content</div>
          <div>My posts
<div>New post</div>
<div>
  <div>Post 1</div>
  <div>Post 2</div>
</div>
          </div>
        </div>
    </div>

  )
}

export default App;
