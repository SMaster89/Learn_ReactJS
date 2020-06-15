import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";


  const App = (props) => {
  return (
      <BrowserRouter>
            <div className="app-wrapper">
                 <Header />
                 <Nav />
                 <div className="app-wrapper-content">
                     <Route path='/dialogs' render={ () => <Dialogs state={props.state.dialogsPage} />} />
                     <Route path='/profile' render={ () => <Profile state={props.state.profilePage} /> } />
                     <Route path='/news' component={News} />
                     <Route path='/music' component={Music} />
                     <Route path='/settings' component={Settings} />
                     <Route path='/friends' render={ () => <Friends state={props.state.friendsPage} />} />
                 </div>
            </div>
      </BrowserRouter>
  );
}

export default App;
