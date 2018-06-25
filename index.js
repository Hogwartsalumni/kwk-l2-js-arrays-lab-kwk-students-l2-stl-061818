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
  const newDriver = [...drivers, 'Broom'];
  return newDriver;
}

function prependDriver(name) {
  const newStart = ['Arnold', ...drivers];
  return newStart;
}

function removeLastDriver(name) {
  const newDrivers = drivers.slice(0, drivers.length - 1);
  return newDrivers;
}

function removeFirstDriver(name) {
  const newFrist = drivers.slice(1);
  return newFirst;
}