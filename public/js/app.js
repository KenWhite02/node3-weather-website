const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.getElementById('message-1');
const messageTwo = document.getElementById('message-2');

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();

  messageOne.textContent = 'Loading...';
  messageTwo.textContent = '';

  const weatherData = async () => {
    const address = search.value;
    const response = await fetch(
      `http://localhost:3000/weather?address=${address}`
    );
    const data = await response.json();
    const { forecast, location, error } = data;
    if (error) {
      return (messageOne.textContent = error);
    }
    messageOne.textContent = location;
    messageTwo.textContent = forecast;
  };
  weatherData();
});
