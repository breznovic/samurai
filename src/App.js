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
import store from './Redux/store';
import DialogsContainer from './Components/Dialogs/DialogsContainer';


const App = (props) => {

  return (
    
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='appWrapperContent'>
          
          <Route path='/dialogs' 
          render={ () => <DialogsContainer store={props.store} />} />
          
          <Route path='/profile' 
          render={ () => <Profile store={props.store} /> } />
          
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
