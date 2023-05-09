import React, { useState } from 'react';
//Libreria nanoid para generar id randoms
import { nanoid } from 'nanoid';

function NewObjective() {
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState(new Date().toISOString().slice(0, 10));
  const [totalHours, setTotalHours] = useState("");
  const [mondayHours, setMondayHours] = useState(0);
  const [tuesdayHours, setTuesdayHours] = useState(0);
  const [wednesdayHours, setWednesdayHours] = useState(0);
  const [thursdayHours, setThursdayHours] = useState(0);
  const [fridayHours, setFridayHours] = useState(0);
  const [saturdayHours, setSaturdayHours] = useState(0);
  const [sundayHours, setSundayHours] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: nanoid(8),
      name,
      startDate,
      totalHours,
      mondayHours,
      tuesdayHours,
      wednesdayHours,
      thursdayHours,
      fridayHours,
      saturdayHours,
      sundayHours
    };

    // LOCAL STORAGE
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    //Redirección a la página principal
    window.location.href = "/";
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Tarea:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Fecha de Inicio:
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      </label>
      <br />
      <label>
        Horas Totales:
        <input type="number" value={totalHours} onChange={(e) => setTotalHours(Number(e.target.value))} />
      </label>
      <br />
      <label>
        Horas por dia:
        <br />
        Lunes: <input type="number" value={mondayHours} onChange={(e) => setMondayHours(Number(e.target.value))} />
        <br />
        Martes: <input type="number" value={tuesdayHours} onChange={(e) => setTuesdayHours(Number(e.target.value))} />
        <br />
        Miercoles: <input type="number" value={wednesdayHours} onChange={(e) => setWednesdayHours(Number(e.target.value))} />
        <br />
        Jueves: <input type="number" value={thursdayHours} onChange={(e) => setThursdayHours(Number(e.target.value))} />
        <br />
        Viernes: <input type="number" value={fridayHours} onChange={(e) => setFridayHours(Number(e.target.value))} />
        <br />
        Sabado: <input type="number" value={saturdayHours} onChange={(e) => setSaturdayHours(Number(e.target.value))} />
        <br />
        Domingo: <input type="number" value={sundayHours} onChange={(e) => setSundayHours(Number(e.target.value))} />
      </label>
      <br />
      <button type="submit" >Crear Tarea</button>
    </form>
  );
}
export default NewObjective;