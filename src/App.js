import './App.scss';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Count from './pages/Count';
import List from './pages/List';
import Dices from './pages/Dices';

const Header = () => {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/count">Counter</Link>
            </li>
            <li>
                <Link to="/list">List</Link>
            </li>
            <li>
                <Link to="/dices">Sicbo</Link>
            </li>
        </ul>
    );
};

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/count" element={<Count />} />
                <Route path="/list" element={<List />} />
                <Route path="/dices" element={<Dices />} />
            </Routes>
            <footer>Made by Ducky.</footer>
        </div>
    );
}

export default App;
