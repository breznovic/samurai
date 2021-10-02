import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Settings from './Components/Settings/Settings';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';


const App = (props) => {

  return (

    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='appWrapperContent'>

        <Route path='/dialogs'
          render={() => <DialogsContainer store={props.store} />} />

        <Route path='/profile/:userId?'
          render={() => <ProfileContainer store={props.store} />} />

        <Route path='/users'
          render={() => <UsersContainer store={props.store} />} />

        <Route path='/news'
          render={() => <News />} />

        <Route path='/music'
          render={() => <Music />} />

        <Route path='/setings'
          render={() => <Settings />} />
      </div>
    </div>

  )
}

export default App;
