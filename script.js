'use strict';
const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secHand = document.querySelector('.sec-hand');


function callTime() {
  let CurrDate = new Date();
  const hours = CurrDate.getHours();
  const min = CurrDate.getMinutes();
  const sec = CurrDate.getSeconds();
  
  
  // let secAngle = ((sec *6) - 90);
  let minAngle = (min * 6) - 90;
  let hourAngle = ( hours%12)*30-90;
  
  

  minHand.style.transform = `rotate(${minAngle}deg)`;
  hourHand.style.transform = `rotate(${hourAngle}deg)`;
  // secHand.style.transform = `rotate(${secAngle}deg)`;
}

setInterval(callTime, 1000);