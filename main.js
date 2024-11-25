// Part 1: Growing Pains

// Your task is to create a program that advises a group of environmental scientists how to handle the growth and spread of a unique plant species under their supervision. 
// You must develop a growth control system that will monitor and predict the plant growth, making decisions based on the available space and potential growth.

// Here is the information you have been given:
// The area in which the plants are contained is circular, with a radius of 5 meters.
// The formula for calculating the area of a circle is PI multiplied by the radius, squared:
//     const PI = 3.1415;
//     const area = PI * radius * radius;
// Each plant requires a minimum space of 0.8 square meters.
// The area is starting with 20 plants.
// The plants double in number every week.

// Using this information, your objectives are to:
// Predict the plant growth after a specific number of weeks.

// Implement control flow to make decisions on whether the plants should be:
// Pruned, to stop them from exceeding the capacity of the garden.
//          This condition should be met if the plant count after the given number of weeks is greater than 80% of the maximum capacity of the garden.
// Monitored, if they are growing at an acceptable rate.
//          This condition should be met if the plant count is between 50% and 80% of the maximum capacity of the garden after the given number of weeks.
// Planted, if there is room to plant more plants.
//          This condition should be met if the plant count after the given number of weeks is less than 50% of the maximum capacity of the garden.
// Within your submission, include the results for 1, 2, and 3 weeks of growth as inputs.

const PI = 3.1415;
let maxRadius = 5;
let radius = 0.8;
const area = PI * radius * radius;
const maxArea = PI * maxRadius * maxRadius;
console.log(`Max area ${maxArea}`);
let reqSpase = 0.8;
plantsAmount = 20;
week0 = plantsAmount*reqSpase;
console.log(`Start point, for ${plantsAmount} plants we need ${week0} sq.feet`);
plantsAmount=plantsAmount*2;
week1 = plantsAmount * reqSpase; 
console.log(`Week1, for ${plantsAmount} plants we need ${week1} sq.feet`);
plantsAmount=plantsAmount*2;
week2 = plantsAmount * reqSpase; 
console.log(`Week2, for ${plantsAmount} plants we need ${week2} sq.feet`);
plantsAmount=plantsAmount*2;
week3 = plantsAmount * reqSpase; 
console.log(`Week3, for ${plantsAmount} plants we need ${week3} sq.feet`);



// const PI = 3.1415;
// const radius = 5; // radius in meters
// const area = PI * radius * radius; // area of the circular garden in square meters
// const plantSpace = 0.8; // space required for each plant in square meters

// // Maximum plant capacity of the garden
// const maxPlants = area / plantSpace; // max number of plants that can fit in the garden

// // Starting number of plants
// let plants = 20; // initial plant count
// const weeks = [1, 2, 3]; // Weeks to simulate

// for (let i = 0; i < weeks.length; i++) {
//   let week = weeks[i];
//   let plantCount = plants;

//   // Simulating plant growth over the number of weeks
//   for (let j = 1; j <= week; j++) {
//     plantCount *= 2; // doubling the plant count each week
//   }

//   // Print the plant count after the given number of weeks
//   console.log(`After ${week} week(s):`);
//   console.log(`Plant count: ${plantCount}`);

//   // Determine the control flow based on plant count
//   if (plantCount > 0.8 * maxPlants) {
//     console.log("Action: Prune the plants to prevent overcrowding.");
//   } else if (plantCount >= 0.5 * maxPlants && plantCount <= 0.8 * maxPlants) {
//     console.log("Action: Monitor the plant growth, they are growing at an acceptable rate.");
//   } else if (plantCount < 0.5 * maxPlants) {
//     console.log("Action: Plant more plants, there's room in the garden.");
//   }
//   console.log('-------------------');
// }
