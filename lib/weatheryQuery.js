export const weatherRequest = (string) => {
      fetch(string)
     .then(response => response.json())
     .then((data) => {
 console.log(data)
  });
};








// const myKey = "3dfd5d6b3e2c3f991639dc0095a6a044";

// const inputButton = document.querySelector("#button");


// inputButton.addEventListener('click', (event) => {
//   event.preventDefault();
//   const textSelect = document.querySelector('#text').value;
//   const query = `http://api.openweathermap.org/data/2.5/weather?q=${textSelect}&appid=${myKey}`;

//   fetch(query)
//     .then(response => response.json())
//     .then((data) => {

//       const cityDescrip = `<h2>Weather in ${textSelect}</h2>`;
//       let dateDescrip = new Date;
//       dateDescrip = dateDescrip.toString();
//       const dateTag = `<h3>${dateDescrip}</h3>`;
//       const weatherDescrip = `<p>${data.weather[0].description}</p>`;
//       const weatherUrl = data.weather[0].icon;
//      const weatherimg = `<img src="http://openweathermap.org/img/w/${weatherUrl}.png" /img>`;
//      const temp = parseInt(data.main.temp, 10) - 273.15
//      const tempTag `<h3>${temp}</h3>`
//      const div = `<div id="stamp">${weatherimg} ${tempTag}</div>`
// const finalDiv = `<div id="container">


// </div> `
//     });
// });
