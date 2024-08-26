import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';


const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <div className='main-content'>
                <Navigation/>
                <Profile/>
            </div>
        </div>
    );
}

export default App;
