import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/Navbar/News/News';
import Music from './components/Navbar/Music/Music';
import Settings from './components/Navbar/Settings/Settings'
import { BrowserRouter, Route } from 'react-router-dom';


const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />

        <div className='app-wrapper-content'>
          <Route path='/Dialogs' render={ () =><Dialogs dialogs={props.dialogs} messages={props.messages} />} />
          <Route path='/Profile' render={ () =><Profile posts={props.posts}/>}/>
          <Route path='/News' component={News} />
          <Route path='/Music' component={Music} />
          <Route path='/Settings' component={Settings} />

        </div>
      </div>
    </BrowserRouter>)

}

export default App;
