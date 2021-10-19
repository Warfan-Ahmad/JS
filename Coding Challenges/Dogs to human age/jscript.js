/*
const testDataJuliaone = [3, 5, 2, 12, 7];
const testDataKateone = [4, 1, 15, 8, 3];
const testDataJuliatwo = [9, 16, 6, 8, 3];
const testDataKatetwo = [10, 5, 6, 1, 4];


const checkDogs = function(dogsJulia,dogsKate)
{
    const shallowCopyofJulia = dogsJulia.slice(1,dogsJulia.length - 2);

    const newArray = [...shallowCopyofJulia,...dogsKate];
    console.log(newArray);
    newArray.forEach(function(age,i)
    {
        if(age<=3)
        {
            console.log(`Dog Number ${i + 1} is still a puppy🐶`);
        }
        else
        {
            console.log(`Dog Number ${i+1} is an adult and is ${age} old `);
        }
    })

}
checkDogs(testDataJuliaone,testDataKateone);
checkDogs(testDataJuliatwo,testDataKatetwo);


*/

const testData = [5, 2, 4, 1, 15, 8, 3];
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
