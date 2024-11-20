import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Overview from './pages/Overview';
import Experience from './pages/Experience';
import Project from './pages/Project';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/overview' element={<Overview />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/project' element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
