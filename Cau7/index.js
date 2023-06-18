const displayClock = () => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentTime = new Date();

  const years = currentTime.getFullYear().toString().padStart(4, "0");
  const months = currentTime.getMonth().toString();
  const days = currentTime.getDate().toString().padStart(2, "0");
  const dayofWeek = currentTime.getDay().toString();
  const hours = currentTime.getHours().toString().padStart(2, "0");
  const minutes = currentTime.getMinutes().toString().padStart(2, "0");
  const seconds = currentTime.getSeconds().toString().padStart(2, "0");

  const timeString = `<h2>${weekday[dayofWeek]} ${days} ${monthNames[months]} ${years}</h2> 
  <h1>${hours}:${minutes}:${seconds}</h1>`;
  document.getElementById("clock").innerHTML = timeString;
};

// Cập nhật đồng hồ mỗi giây
setInterval(displayClock, 1000);
