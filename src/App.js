
import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import Home from './components/Home';
import NewObjective from './components/NewObjective';
import EditObjective from './components/EditObjective';
import DeleteObjective from './components/DeleteObjective';
import ShowObjective from './components/ShowObjective';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className="btn btn-dark" >Home</NavLink>
          </li>
          <li>
            <NavLink to="/new-objective" className="btn btn-dark" >Nuevo Objetivo</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
      <Route exact path="/" element={<Home />} />
        <Route path="/new-objective" element={<NewObjective />} />
        <Route path="/edit-objective/:id" element={<EditObjective />} />
        <Route path="/delete-objective/:id" element={<DeleteObjective />} />
        <Route path="/show-objective/:id" element={<ShowObjective />} />
      </Routes>
    </Router>
  );
}

export default App;