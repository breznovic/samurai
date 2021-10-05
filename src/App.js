import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import Dialogs from './Components/Dialogs/Dialogs'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Profile from './Components/Profile/Profile'


const App = () => {

  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/dialogs' component={Dialogs}/>
        <Route path='/profile' component={Profile}/>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App;
