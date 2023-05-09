
//Cada vez que refresque la pagina mas de 4 veces entrará dará un mensaje de animos en el alert
export const saveLocalStorage = () => {
    const count = localStorage.getItem('count') || 0;
    localStorage.setItem('count', parseInt(count) + 1);
  
    if (count >= 7) {
      alert('Animo! Ya queda menos para finalizar tus tareas.');
    }
  };