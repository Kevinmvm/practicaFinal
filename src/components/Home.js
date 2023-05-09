import React from 'react';
import { NavLink } from 'react-router-dom';
import {saveLocalStorage} from './Sesions'
const Home = () => {
  const day = new Date().toISOString().slice(0, 10)
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  
  //Función para detectar las veces que se accede a la App y dar un mensaje de animo.
  saveLocalStorage();

  return (
    <div>
      <h2>Tareas</h2>
      <table>
        <thead>
          <tr>
            <th>Dia Actual</th>
            <th>ID</th>
            <th>Tarea</th>
            <th>Fecha de Inicio</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{day}</td>
              <td>{task.id}</td>
              <td>{task.name}</td>
              <td>{task.startDate}</td>
              <td>
                <NavLink to={"/show-objective/" + task.id}>Ver</NavLink>
              </td>
              <td>
                <NavLink to={"/edit-objective/" + task.id}>Modificar</NavLink>
              </td>
              <td>
                <NavLink to={"/delete-objective/" + task.id}>Eliminar</NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;