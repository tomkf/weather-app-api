const myKey = "3dfd5d6b3e2c3f991639dc0095a6a044";

const inputButton = document.querySelector("#button");


inputButton.addEventListener('click', (event) => {
  event.preventDefault();
  const textSelect = document.querySelector('#text').value;
  const query = `http://api.openweathermap.org/data/2.5/weather?q=${textSelect}&units=metric&appid=${myKey}`;


  fetch(query)
    .then(response => response.json())
    .then((data) => {
      let dateDescrip = new Date();
      dateDescrip = dateDescrip.toString();
      const weatherUrl = data.weather[0].icon;
      const weatherImg = `<img src="http://openweathermap.org/img/w/${weatherUrl}.png"/img>`;
      const temp = data.main.temp;
      const tempTag = `<span>${Math.round(temp)} celcius</span>`;
      const finalDiv = `<div id="container">
        <h2>Weather in ${textSelect}</h2>
        <h3>${dateDescrip}</h3>
        <p>${data.weather[0].description}</p>
        <div id="stamp">${weatherImg} ${tempTag}</div>
        </div> `;
      const position = document.querySelector('#display-box');
      position.innerHTML = "";
      position.insertAdjacentHTML("beforeend", finalDiv);
      position.style.visibility = "visible";
    });
});
