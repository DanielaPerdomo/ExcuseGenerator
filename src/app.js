/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
let quien = ["EL PERRO", "EL ABUELO", "EL MECANICO"];
let verbo = ["ORINO", "MORDIO", "DAÑO"];
let cuando = ["HOY", "AYER", "HACE UNAS HORAS"];
let que = ["LA TAREA", "EL CAUCHO", "EL CARRO"];
window.onload = function() {
  //write your code here
  const elemento = document.querySelector("#name");
  let randomQuien = quien[Math.floor(Math.random() * quien.length)];
  let randomVerbo = verbo[Math.floor(Math.random() * verbo.length)];
  let randomCuando = cuando[Math.floor(Math.random() * cuando.length)];
  let randomQue = que[Math.floor(Math.random() * que.length)];

  elemento.innerText = `${randomQuien} ${randomVerbo} ${randomCuando} ${randomQue}`;
  console.log(quien[Math.floor(Math.random() * quien.length)]);
};
