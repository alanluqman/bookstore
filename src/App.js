
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app.css';
import Navigation from './components/navigation';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="nav-holder">
          <Navigation />
        </div>
        <Routes>
          <Route path="/catigories" element='' />
          <Route path="/" element='' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
