import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function EditObjectivek() {
  const [task, setTask] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const tasksString = localStorage.getItem("tasks");
    const tasks = JSON.parse(tasksString);
    const task = tasks.find((t) => t.id === id);
    //console.log("SELECTTASK: " + Object.values(task))
    setTask(task);
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const tasksString = localStorage.getItem("tasks");
    const tasks = JSON.parse(tasksString);
    const updatedTasks = tasks.map((t) =>
      t.id === task.id ? { ...t, ...task } : t
    );
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    // Redirigir al HOME
    window.location.href = "/";
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Tarea:</label>
        <input
          type="text"
          name="name"
          value={task.name || ""}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="startDate">Fecha de inicio:</label>
        <input
          type="date"
          name="startDate"
          value={task.startDate || ""}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="totalHours">Horas totales:</label>
        <input
          type="number"
          name="totalHours"
          value={task.totalHours || ""}
          onChange={handleInputChange}
        />
      </div>
      Horas por dia:
      <div>
        <label htmlFor="mondayHours">Lunes:</label>
        <input
        type="number"
          name="mondayHours"
          value={task.mondayHours || ""}
          onChange={handleInputChange}
        />
      </div>
      
      
      <div>
        <label htmlFor="tuesdayHours">Martes:</label>
        <input
          type="number"
          name="tuesdayHours"
          value={task.tuesdayHours || ""}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="wednesdayHours">Miercoles:</label>
        <input
          type="number"
          name="wednesdayHours"
          value={task.wednesdayHours || ""}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="thursdayHours">Jueves:</label>
        <input
          type="number"
          name="thursdayHours"
          value={task.thursdayHours || ""}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="fridayHours">Viernes:</label>
        <input
          type="number"
          name="fridayHours"
          value={task.fridayHours || ""}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="saturdayHours">Sabado:</label>
        <input
          type="number"
          name="saturdayHours"
          value={task.saturdayHours || ""}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="sundayHours">Domingo:</label>
        <input
          type="number"
          name="sundayHours"
          value={task.sundayHours || ""}
          onChange={handleInputChange}
        />
      </div>

      <button type="submit">Guardar cambios</button>
    </form>
  );
}

export default EditObjectivek;