// const name = "Claire Rose"; //string
// let age = 34; //number
// const birthday = "August 20"; //string
// const detroitGC = true; //boolean
// let lifeEvents = [
//   "I have a baby boy named Harrison",
//   "I went to Grand Valley State University",
//   "My dog named Chopper is a vv good boy",
//   "I married my husband Cody in 2015"
// ]; //array

// if (detroitGC === true)
//   console.log(
//     `My name is ${name} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`
//   );
// else {
//   console.log(
//     `My name is ${name} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`
//   );
// }

// for (i = 0; i < lifeEvents.length; i++) {
//   console.log(lifeEvents[i]);
// }

// var counter = 0;
// let randomNumberBetween0and10 = Math.floor(Math.random() * 10 + 1);

// while (true) {
//   if (randomNumber != 5) {
//     console.log(`${randomNumber} !==5`);
//     counter++;
//   } else {
//     counter++;
//     console.log(
//       `${randomNumber} === 5. It took ${counter} iterations to randomly generate the number 5`
//     );
//     break;
//   }
// }

//function declaration
// function printArea(length, width) {
//   console.log(length * width);
// }

// printArea(10, 5);
// printArea(17, 42);
// printArea(22, 15);

// function logRectInfo(topLeft, bottomRight) {
//   const length = getLength(topLeft, bottomRight);
//   const width = getWidth(topLeft, bottomRight);
//   const area = getArea(length, width);
//   const perimeter = getPerimeter(topLeft, bottomRight);
//   console.log(area);
//   console.log(perimeter);
// }
// function getLength(topLeft, bottomRight) {
//   return bottomRight[1] - topLeft[1];
// }

// console.log(getLength([0, 5], [3, 2]));

// function getWidth(topLeft, bottomRight) {
//   return bottomRight[0] - topLeft[0];
// }

// console.log(getWidth([0, 5], [3, 2]));

// function getPerimeter(topLeft, bottomRight) {
//   return 2 * (length + width);
// }

// function getArea(topLeft, bottomRight) {
//   const length = getLength(topLeft, bottomRight);
//   const width = getWidth(topLeft, bottomRight);
//   return length * width;
// }

// logRectInfo([-4, 5], [-2, 2]);

const FarToCel = function(f) {
  return ((f - 32) * 5) / 9;
};

const CelToFar = Cel => ((Cel - 32) * 9) / 5;

console.log(FarToCel(45).toFixed(2));
console.log(CelToFar(100)).toFixed(2);
