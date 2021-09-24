import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import Settings from './Components/Settings/Settings';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import { BrowserRouter, Route } from 'react-router-dom';


const App = (props) => {

  return (
    
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='appWrapperContent'>
          
          <Route path='/dialogs' 
          render={ () => <Dialogs state={props.state.dialogsPage} />} />
          
          <Route path='/profile' 
          render={ () => <Profile 
          profilePage={props.state.profilePage} 
          addPost={props.addPost}
          updateNewPostText={props.updateNewPostText} /> } />
          
          <Route path='/news' 
          render={ () => <News />} />
          
          <Route path='/music' 
          render={ () => <Music />} />
          
          <Route path='/setings' 
          render={ () => <Settings />} />
        </div>
      </div>
    
  )
}

export default App;
