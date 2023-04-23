import './App.scss';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Count from './pages/Count';
import List from './pages/List';
import Dices from './pages/Dices';
import Image from './components/Image';
import { AiFillHome, AiFillClockCircle, AiOutlineClose } from 'react-icons/ai';
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div>
                <Link className="redirect" to="/">
                    <AiFillHome />
                </Link>
            </div>
            <div>
                <Link className="redirect" to="/count">
                    <AiFillClockCircle />
                </Link>
            </div>
            <div>
                <Link className="redirect" to="/list">
                    <AiOutlineClose />
                </Link>
            </div>
            <div>
                <Link className="redirect" to="/dices">
                    <AiOutlineClose />
                </Link>
            </div>
        </div>
    );
};

function App() {
    return (
        <div className="App">
            <div className="content">
                <Sidebar />
                <Image name="Trần Trung Đức" />
                <div className="content-panel">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/count" element={<Count />} />
                        <Route path="/list" element={<List />} />
                        <Route path="/dices" element={<Dices />} />
                    </Routes>
                </div>
            </div>
            <footer>Made with ReactJS and Sass.</footer>
        </div>
    );
}

export default App;
