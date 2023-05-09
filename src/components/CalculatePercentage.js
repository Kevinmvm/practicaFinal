//No lo acaba de calcular bien.

function calculatePercentage(task) {
    const { mondayHours, tuesdayHours, wednesdayHours, thursdayHours, fridayHours, saturdayHours, sundayHours } = task;
    const totalHours = parseInt(task.totalHours);
  
    const completedHours = parseInt(mondayHours) + parseInt(tuesdayHours) + parseInt(wednesdayHours) + parseInt(thursdayHours) + parseInt(fridayHours) + parseInt(saturdayHours) + parseInt(sundayHours);
    const percentage = Math.round((completedHours / totalHours) * 100);
  
    return percentage;
  }
export default calculatePercentage;


/* PROTOTIPO
function calculatePercentage(task, startDate, endDate, currentDate) {
    const currentDate2 = new Date();
    //const { mondayHours, tuesdayHours, wednesdayHours, thursdayHours, fridayHours, saturdayHours, sundayHours } = task;
    console.log('TASK: '+ Object.values(task))
    
    const totalHours = parseInt(task.totalHours);
    console.log("totalHours: "+ totalHours)
    const monday = parseInt(task.mondayHours);
    console.log("mondayHours: "+ monday)
    const completedHours = parseInt(task.mondayHours) + parseInt(task.tuesdayHours) + parseInt(task.wednesdayHours) + parseInt(task.thursdayHours) + parseInt(task.fridayHours) + parseInt(task.saturdayHours) + parseInt(task.sundayHours);
    console.log("CompletedHours: "+ completedHours)
    console.log("END DATE: "+ task.endDate)
    const totalDays = Math.ceil((task.endDate.getTime() - task.startDate.getTime()) / (1000 * 3600 * 24));
    console.log("totalDays: "+ totalDays)
    console.log("CURRENT DAY: "+ currentDate2)
    const elapsedDays = Math.ceil((currentDate2.getTime() - task.startDate.getTime()) / (1000 * 3600 * 24));
    console.log("elapsedDays: "+ elapsedDays)
    const remainingDays = Math.ceil((task.endDate.getTime() - currentDate2.getTime()) / (1000 * 3600 * 24));
    console.log("remainingDays: "+ remainingDays)

    const percentage = Math.round((completedHours / totalHours) * 100);
    console.log("Porcentje: "+ percentage)
    const dailyPercentage = Math.round((totalDays / 100));
    const elapsedPercentage = Math.round((elapsedDays / dailyPercentage));
    const remainingPercentage = Math.round((remainingDays / dailyPercentage));
  
    return {
      percentage,
      elapsedPercentage,
      remainingPercentage,
    };
}

export default calculatePercentage;*/