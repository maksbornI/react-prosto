import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/Navbar/News/News';
import Music from './components/Navbar/Music/Music';
import Settings from './components/Navbar/Settings/Settings'




const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar state={props.state.dialogsPage}/>

                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/Dialogs' element={<Dialogs state={props.state.dialogsPage}
                                                                 updateNewMessage={props.updateNewMessage}
                                                                 addMessage={props.addMessage}/>}/>
                        <Route path='/Profile' element={<Profile profilePage={props.state.profilePage}
                                                                 addPost={props.addPost}
                                                                 updateNewPost={props.updateNewPost}/>}/>
                        <Route path='/News' element={<News/>}/>
                        <Route path='/Music' element={<Music/>}/>
                        <Route path='/Settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>)

}

export default App;
