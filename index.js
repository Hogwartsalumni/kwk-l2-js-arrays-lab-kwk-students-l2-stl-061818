// Write your solution here!
const drivers = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver(name) {
  drivers.pop(name);
}

function destructivelyRemoveFirstDriver(name) {
  drivers.shift(name);
}

function appendDriver(name) {
  drivers.concat(name);
  drivers();
}

function prependDriver(name) {
  
}

function removeLastDriver(name) {
  newDrivers = drivers.slice(0, drivers.length - 1);
  newDrivers();
}

function removeFirstDriver(name) {
  drivers.slice(1);
  drivers;
}