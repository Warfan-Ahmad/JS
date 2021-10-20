'use strict'

const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
    ];

    dogs.map(iter => iter.recommendedFood = Math.trunc(iter.weight ** 0.75 * 28));


    const dogSarah = dogs.find(nam => nam.owners.includes('Sarah'));
    console.log(`Sarah dog's is eating too ${dogSarah.curFood > dogSarah.recommendedFood ? 'much':'little'} `);


    const ownersEatTooMuch = dogs.filter(cur => cur.curFood > cur.recommendedFood).map(dog => dog.owners).flat();
    console.log(ownersEatTooMuch);
    
    const ownersEatTooLittle = dogs.filter(cur => cur.curFood < cur.recommendedFood).flatMap(dog => dog.owners);
    console.log(ownersEatTooLittle);

    console.log(`${ownersEatTooMuch.join(' and ')} dogs eat too much!`);
    console.log(`${ownersEatTooLittle.join(' and ')} dogs eat too little!`);

    dogs.some(cur=>cur.curFood === cur.recommendedFood);

    dogs.some(cur => cur.curFood > (recommendedFood * 0.90) && cur.curFood < (recommendedFood * 1.10));

    dogs.filter(cur => cur.curFood > (recommendedFood * 0.90) && cur.curFood < (recommendedFood * 1.10));

    const dogsCopy = dogs.slice().sort((a,b)=> a.recommendedFood - b.recommendedFood);
    








