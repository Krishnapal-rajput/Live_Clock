// Function to update the clock and date
function updateClock() {
  // Get references to the HTML elements where the date and time will be displayed
  const dateElement = document.querySelector(".date");    // For the date
  const monthElement = document.querySelector(".month");  // For the month
  const yearElement = document.querySelector(".year");    // For the year
  const dayElement = document.querySelector(".day");      // For the day of the week
  const hourElement = document.querySelector(".hour");    // For the hour
  const minElement = document.querySelector(".min");      // For the minutes
  const secondElement = document.querySelector(".second"); // For the seconds

  // Get current date and time using the Date object
  const now = new Date();

  // Format the date and time values to always show two digits (e.g., "01" for single-digit days or months)
  const day = now.getDate().toString().padStart(2, "0"); // Get day of the month, pad with zero if necessary
  const month = (now.getMonth() + 1).toString().padStart(2, "0"); // Get month (0-indexed, so adding 1), pad with zero
  const year = now.getFullYear(); // Get the full year (e.g., 2025)
  const dayOfWeek = now.toLocaleString("en-us", { weekday: "long" }); // Get the name of the day of the week (e.g., "Monday")
  const hours = now.getHours().toString().padStart(2, "0"); // Get the current hour, pad with zero
  const minutes = now.getMinutes().toString().padStart(2, "0"); // Get the current minutes, pad with zero
  const seconds = now.getSeconds().toString().padStart(2, "0"); // Get the current seconds, pad with zero

  // Update the HTML elements with the formatted date and time
  dateElement.textContent = day; // Display the day
  monthElement.textContent = month; // Display the month
  yearElement.textContent = year; // Display the year
  dayElement.textContent = dayOfWeek; // Display the day of the week (e.g., "Monday")
  hourElement.textContent = hours; // Display the hour
  minElement.textContent = minutes; // Display the minutes
  secondElement.textContent = seconds; // Display the seconds
}

// Update the clock every second (1000 milliseconds)
setInterval(updateClock, 1000);

// Initial call to display the time immediately when the page loads
updateClock();
