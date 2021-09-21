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


const App = () => {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='appWrapperContent'>
        <Route path='/dialogs' component={Dialogs} />
        <Route path='/profile' component={Profile} />
        <Route path='/news' component={News} />
        <Route path='/music' component={Music} />
        <Route path='/setings' component={Settings} />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
