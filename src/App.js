import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MissionList from './components/missions/MissionList';

function App() {
  return (
    <div className="App">

      <Header />
      <Routes>
        <Route path="/missions" element={<MissionList />} />
      </Routes>
    </div>
  );
}

export default App;
