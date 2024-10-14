// let date = new Date();
// console.log(date);
// console.log(date.getDate())
// console.log(date.getMonth()+1)
// console.log(date.getFullYear())


let dateEle = document.getElementById('dd')
let monthEle = document.getElementById('mm')
let yearEle = document.getElementById('yy')
let hourEle =document.getElementById('hh')
let minEle =document.getElementById('min')
let secEle =document.getElementById('sec')
console.log(dateEle,monthEle,yearEle);
function showDate(){
let date = new Date();
dateEle.innerHTML = date.getDate();
monthEle.innerHTML = date.getMonth()+1;
yearEle.innerHTML = date.getFullYear();
let hour =date.getHours();
hour = hour >=12 ? hour -12 : hour;
console.log(hour);
hourEle.innerHTML =hour;
minEle.innerHTML = date.getMinutes();
secEle.innerHTML = date.getSeconds();
}
setInterval(showDate,1000)
