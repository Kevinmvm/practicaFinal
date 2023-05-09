
//Funcion para calcular el fin de una tarea en función de las horas que le
// vallamos a dedicar cada dia y el tiempo total

function calculateEndDate(startDate, totalHours, task) {
  const endDate = new Date(startDate);
  let remainingHours = totalHours;
  let daysToAdd = 0;
  while (remainingHours > 0) {
    const dayOfWeek = endDate.getDay();
    const hoursForDay = task[`${dayOfWeekString(dayOfWeek)}Hours`];
    if (hoursForDay > 0) {
      remainingHours -= hoursForDay;
    }
    daysToAdd++;
    endDate.setDate(endDate.getDate() + 1);
  }

  endDate.setDate(endDate.getDate() - 1);

  return endDate;
}

function dayOfWeekString(dayOfWeek) {
  return ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'][dayOfWeek];
}

export default calculateEndDate;


/*
//FUNCION PARA EL FETCH No acaba de funcionar

async function calculateEndDate(startDate, totalHours, task) {
    const endDate = new Date(startDate);
    let remainingHours = totalHours;
    let daysToAdd = 0;
    // Consultar los días festivos
    const response = await fetch('http://127.0.0.1:5000/festivos');
    const holidays = await response.json();
    
    while (remainingHours > 0) {
      const dayOfWeek = endDate.getDay();
      const hoursForDay = task[`${dayOfWeekString(dayOfWeek)}Hours`];
      const isHoliday = holidays.some(holiday => new Date(holiday.date) >= endDate && new Date(holiday.date) < endDate.setDate(endDate.getDate() + 1));
      
      if (hoursForDay > 0 && !isHoliday) {
        remainingHours -= hoursForDay;
      }
      
      if (!isHoliday) {
        daysToAdd++;
      }
      
      endDate.setDate(endDate.getDate() + 1);
    }
  
    endDate.setDate(endDate.getDate() - 1);
  
    return endDate;
  }
  
  function dayOfWeekString(dayOfWeek) {
    return ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'][dayOfWeek];
  }

  export default calculateEndDate;*/