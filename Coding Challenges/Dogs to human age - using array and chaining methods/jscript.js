/*const testData = [5, 2, 4, 1, 15, 8, 3];
const calcAverageHumanAge = function(agesArray)
{
     const humanAgeOfDogs = agesArray.map(function(curr)
    {
        if(curr <= 2)
        {
            return 2 * curr;
        }
        else
        {   
            return 16 + curr * 4
        }
        
    });
    console.log(humanAgeOfDogs);
    
    const afterRemovingDogs = humanAgeOfDogs.filter(function(curr)
    {
        if(curr > 18)
        {
            return curr;
        }
    });
    console.log(afterRemovingDogs);

    const avergeHumanAgeOfDogs = afterRemovingDogs.reduce((acc,curr)=> acc + curr)/afterRemovingDogs.length;

console.log(avergeHumanAgeOfDogs);
}
calcAverageHumanAge(testData);
*/

const testData = [5, 2, 4, 1, 15, 8, 3];
const calcAverageHumanAge = testData => testData.map(age => age <= 2 ? 2 * age : 16 + age * 4).filter(age => age >= 18).reduce((acc,age,i,arr) => acc + age / arr.length,0);



const avg = calcAverageHumanAge(testData);
console.log(avg);