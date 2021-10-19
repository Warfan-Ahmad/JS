'use strict'

/////////////////////////Finding max or min using the reduce method/////////////

//here in this example we have an array and on the array we use a method reduce and we check if the accumulator which keeps the track of the previous element is larger than the current one if so we dont do anything if it is smaller then we send the current element in the accumulator
const movements = [22,12,-22,5546,7754,3435,998]; 
const max = movements.reduce((acc,mov) =>
{
    if(acc > mov) return acc;
    else return mov;
},movements[0]);

 
console.log(max); 