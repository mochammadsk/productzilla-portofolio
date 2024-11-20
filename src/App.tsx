import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Overview from './pages/Overview';
import Experience from './pages/Experience';
import Project from './pages/Project';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/overview' element={<Overview />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/project' element={<Project />} />
      </Routes>
    </Router>
  );
}

export default App;
