function updateClock() {
  
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0'); // Format with leading zeros
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

   
    const timeString = `${hours}:${minutes}:${seconds}`;

   
    document.getElementById('clock').textContent = timeString;
}


setInterval(updateClock, 1000);


updateClock();