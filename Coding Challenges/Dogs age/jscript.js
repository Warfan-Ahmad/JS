/*const testDataJuliaone = [3, 5, 2, 12, 7];
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

const movements = [200,300,22,23,4,65,76,45]; 
const euroToUsd = 1.1;

const movementsToUSD = movements.map( mov => mov * euroToUsd );
console.log(movementsToUSD);
movementsToUSD(movements);