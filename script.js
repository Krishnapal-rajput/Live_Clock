// Function to update the clock and date
function updateClock() {
  const dateElement = document.querySelector(".date");
  const monthElement = document.querySelector(".month");
  const yearElement = document.querySelector(".year");
  const dayElement = document.querySelector(".day");
  const hourElement = document.querySelector(".hour");
  const minElement = document.querySelector(".min");
  const secondElement = document.querySelector(".second");

  // Get current date and time
  const now = new Date();

  // Format the date and time
  const day = now.getDate().toString().padStart(2, "0");
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const year = now.getFullYear();
  const dayOfWeek = now.toLocaleString("en-us", { weekday: "long" });
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  // Update the elements
  dateElement.textContent = day;
  monthElement.textContent = month;
  yearElement.textContent = year;
  dayElement.textContent = dayOfWeek;
  hourElement.textContent = hours;
  minElement.textContent = minutes;
  secondElement.textContent = seconds;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the time immediately
updateClock();
