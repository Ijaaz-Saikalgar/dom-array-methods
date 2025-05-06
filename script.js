
/*
const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

let data = [];

getRandomUser();
getRandomUser();
getRandomUser();

// Fetch random user and add money
async function getRandomUser() {
  const res = await fetch('https://randomuser.me/api');
  const data = await res.json();

  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000)
  };

  addData(newUser);
}

// Double eveyones money
function doubleMoney() {
  data = data.map(user => {
    return { ...user, money: user.money * 2 };
  });

  updateDOM();
}

// Sort users by richest
function sortByRichest() {
  console.log(123);
  data.sort((a, b) => b.money - a.money);

  updateDOM();
}

// Filter only millionaires
function showMillionaires() {
  data = data.filter(user => user.money > 1000000);

  updateDOM();
}

// Calculate the total wealth
function calculateWealth() {
  const wealth = data.reduce((acc, user) => (acc += user.money), 0);

  const wealthEl = document.createElement('div');
  wealthEl.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(
    wealth
  )}</strong></h3>`;
  main.appendChild(wealthEl);
}

// Add new obj to data arr
function addData(obj) {
  data.push(obj);

  updateDOM();
}

// Update DOM
function updateDOM(providedData = data) {
  // Clear main div
  main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';

  providedData.forEach(item => {
    const element = document.createElement('div');
    element.classList.add('person');
    element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(
      item.money
    )}`;
    main.appendChild(element);
  });
}

// Format number as money - https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string
function formatMoney(number) {
  return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// Event listeners
addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
sortBtn.addEventListener('click', sortByRichest);
showMillionairesBtn.addEventListener('click', showMillionaires);
calculateWealthBtn.addEventListener('click', calculateWealth);

 */


const main = document.getElementById("main");
const addUserBtn = document.getElementById("add-user");
const doubleBtn = document.getElementById("double");
const millionairesBtn = document.getElementById("show-millionaires");
const sortBtn = document.getElementById("sort");
const calcWealthBtn = document.getElementById("calculate-wealth");

let data = [];

getUserApi();
getUserApi();

// fetch iser api 
async function getUserApi() {
  const res = await fetch("https://randomuser.me/api");
  const data = await res.json();
  const userData = data.results[0].name;

  const userName = {
    fullName: `${userData.first} ${userData.last}`,
    money: +(Math.random() * 10000).toFixed(2)
  }

  storeData(userName);
}

// store data
function storeData(userName = data) {
  data.push(userName);
  updateDOM();
}

// updateDOM UI 
function updateDOM() {
  main.innerHTML = "<h2><strong>Person</strong> Wealth</h2>";

  data.forEach(item => {
    const element = document.createElement('h2');
    element.classList.add('person');
    element.innerHTML = `<strong>${item.fullName}</strong> ${formatMoney(item.money)}`;
    main.appendChild(element);
  })
}


function formatMoney(randomNo) {
  return `$ ${(randomNo).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
}


function addUser() {
  getUserApi();
}


function double() {
  data = data.map(item => {
    return { ...item, money: item.money * 2 };
  })
  updateDOM()
}


function millionaires() {
  data = data.filter(item => item.money > 5000)
  updateDOM()
}

function sortRich() {
  data = data.sort((a, b) => b.money - a.money);
  updateDOM()
}

function calcWealth() {
  const totalMonay = data.reduce((acc, num) => acc + num.money, 0);

  if (!main.querySelectorAll('h3').length > 0) {
    const element = document.createElement('h3');
    element.innerHTML = `<span>Total </span> <span>${formatMoney(totalMonay)}</span>`;
    main.appendChild(element);

    calcWealthBtn.style.cursor = "auto";
  }
}

// all events 
addUserBtn.addEventListener('click', addUser);
doubleBtn.addEventListener('click', double);
millionairesBtn.addEventListener('click', millionaires);
sortBtn.addEventListener('click', sortRich);
calcWealthBtn.addEventListener('click', calcWealth);


