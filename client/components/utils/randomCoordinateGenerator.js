import { randomCirclePoint } from 'random-location';

const myCoords = {
  latitude: 40.6065478,
  longitude: -73.9994892,
};

const radius = 500; //meters

console.log(randomCirclePoint(myCoords, radius));
