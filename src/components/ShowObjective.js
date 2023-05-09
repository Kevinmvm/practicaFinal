import React from 'react'
import { useParams } from 'react-router-dom';
import calculateEndDate from './EndDate'
import calculatePercentage from './CalculatePercentage';
function ShowObjective() {
  const { id } = useParams();
  //Pasamos el valor a un numero entero ya que era un string
  //const idInt = parseInt(id);
  //console.log("Valor de TASKID "+ id + typeof id)
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const task = tasks.find((t) => t.id === id);
  const startDate = new Date(task.startDate);

  //const currentDate = new Date().toISOString().slice(0, 10);
  //console.log ("CURRENT DATE: "+ currentDate)

  const endDate = calculateEndDate(startDate, task.totalHours, task);
  const endDateString = endDate.toISOString().substr(0, 10);
  const percentage = calculatePercentage(task);
  console.log(percentage)
    console.log("TASK " + task)
    return (
      <div>
        <h2>Detalles de la tarea</h2>
        {task ? (
          <div>
            <p>ID: {task.id}</p>
            <p>Tarea: {task.name}</p>
            <p>Fecha de inicio: {task.startDate}</p>
            <p>Horas Totales: {task.totalHours}</p>
            <p>Lunes: {task.mondayHours}</p>
            <p>Martes: {task.tuesdayHours}</p>
            <p>Miercoles: {task.wednesdayHours}</p>
            <p>Jueves: {task.thursdayHours}</p>
            <p>Viernes: {task.fridayHours}</p>
            <p>Sabado: {task.saturdayHours}</p>
            <p>Domingo: {task.sundayHours}</p>
            <p>Fecha de Fin: {endDateString}</p>
            <p>Porcentaje de la tarea: {percentage}%</p>
          </div>
        ) : (
          <p>No se encontró ninguna tarea con el ID {id}</p>
        )}
      </div>
    );
  };

  export default ShowObjective;