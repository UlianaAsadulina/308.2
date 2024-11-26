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
const maxPlants = maxArea / radius; // max number of plants that can fit in the garden
console.log(`Max plants ${maxPlants}`);

let plantsAmount = 20;
let reqSpace = plantsAmount*radius;
console.log(`Start point, for ${plantsAmount} plants we need ${reqSpace} sq.m`);
for (let i=1; i<=3; i++) {
    plantsAmount=plantsAmount*2;
    console.log(`Week ${i}, we have ${plantsAmount} plants`);
    // Determine the control flow based on plant count
    if (plantsAmount > 0.8 * maxPlants) {
            console.log("Need Action: Prune the plants to prevent overcrowding.");
    }       else if (plantsAmount >= 0.5 * maxPlants && plantsAmount <= 0.8 * maxPlants) {
                        console.log("Monitor the plant growth, they are growing at an acceptable rate.");
                        } else if (plantsAmount < 0.5 * maxPlants) {
                                        console.log("Need Action: Plant more plants, there's room in the garden.");
            }
}


// Part 2: Thinking Bigger
// The conservation area in which the garden is located has multiple other gardens. 
// Using the logic you have already created, determine:
// The amount of additional space that would be required if the scientists were to start with 100 plants, and did not prune them for 10 weeks.
console.log("--- Start with 100 plants ---");
plantsAmount=100;
for (let i=1; i<=10; i++) {
        plantsAmount=plantsAmount*2;
        week = plantsAmount*radius;
        console.log(`Week ${i}, we have ${plantsAmount} plants and they are need ${week} sq.m`);
        try {
                if (week>=maxArea){
                        throw "Error! You are out of available space!";
                }
        }
        catch (error) {
                console.log(error);
        }
}

let area100 = plantsAmount*radius;
console.log(`For ${plantsAmount} plans we need ${area100} sq.m`);
let addSpace = area100-maxArea;
console.log(`We have only ${maxArea}, and need more ${addSpace} sq.m`);
// If the space remained circular, what would be the radius of this expanded garden?
let radius100 = Math.sqrt(area100 / PI);
console.log(`Radius of this area is ${radius100} metrs`);

// Part 3: Errors in Judgement
// The scientists decided not to listen to your recommendations, and have instead started with 100 plants in the original 5-meter-radius garden.
// Use try and catch to wrap your work in an error-handling block. If the amount of space required to hold the originally provided number of plants exceeds the amount of space available, throw a new error and log an appropriate message.