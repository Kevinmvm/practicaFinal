import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
function DeleteObjective (){
  const { id } = useParams();
  //Pasame el valor a un numero entero ya que era un string
  //const idInt = parseInt(id);
  //console.log("Valor de TASKID "+ id + typeof id)
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const task = tasks.find((t) => t.id === id);
  console.log("TASK: " + task)
  //Con useEffect eliminamos la tarea automáticamente.
  useEffect(() => {
    if (task) {
      const nuevasTareas = tasks.filter((t) => t.id !== id);
      localStorage.setItem('tasks', JSON.stringify(nuevasTareas));
      window.location.href = "/";
    }
    alert('Objetivo eliminado')
  }, [task, tasks, id]);

};
export default DeleteObjective;

