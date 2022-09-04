import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';
import Home from './pages/Home';
import Create from './pages/Create';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
