import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


//page components

import About from './pages/About';
import AIMode from "./pages/AIMode";
import TwoPlayerMode from "./pages/TwoPlayerMode";
import Home from "./pages/Home";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />}/>

                    <Route path="/two-player-mode" element={<TwoPlayerMode/>}/>

                    <Route path="/ai-mode" element={<AIMode/>}/>

                    <Route path="/about" element={<About/>}/>

                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
