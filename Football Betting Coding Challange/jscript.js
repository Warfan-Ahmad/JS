'use strict'
/*
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
    [
    'Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandowski',
    ],
    [
    'Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',
    ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
    },
    };
*/
/*
const [players1,players2] = game.players;
// console.log(players1,players2);

const [gk,...team1otherplayers] = players1;
// console.log(gk,otherplayers);

const allPlayers = [...players1,...players2];
// console.log(allPlayers);

const players1Final = [...players1,'Thiago','Coutinho','Perisic'];
// console.log(players1Final);

//One other way to do it is by using nested destructuring
const {odds:{team1,x:draw,team2}} = game;
//const {team1:team1,x:draw,team2:team2} = game.odds;
console.log(team1,draw,team2);

const printGoals = function(...noOfPlayers)
{
    console.log(...noOfPlayers);
    console.log(noOfPlayers.length);
}
//printGoals('warfan','AIjaz',"Sam");

//console.log() ;

team1 < team2 && console.log(`Team 1 is likely to win`);
team1 > team2 && console.log(`Team 2 is likely to win`);
*/


/*
1.
for(const [i,player] of game.scored.entries())
{
    console.log(`The Goal ${i+1} : ${player}`);
}
*/

//2.
/*
let values = Object.values(game.odds);
let average=0;
let sum = 0;
for ( const val of values)
{
    sum += val; 
}
console.log(sum);
average = sum/values.length;
console.log(average);
*/

//3.
/*
for(const [team,val] of Object.entries(game.odds))
{
    const teamStr = team === 'x' ? 'draw' : `Victory ${game[team]}`;
    //Here we are extracting in a more difficult way we are using the ternary operator which if is x then we say draw becuase in the object odd there is x which is reffered to draw then there is we have to find the team we do that by specifying game[team] as the team1 and team2 is same as in the odds object

    console.log(`Odd of victory ${teamStr} : ${val}`);
}
*/

/** 
const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '🔶 Yellow card'],
    ]);
*/

    /**1.Getting the events*/
    /**
const events = [...new Set(gameEvents.values())];
 //console.log(events);

/**2.Removing the Element from logs yellow card which was wrong  */
// gameEvents.delete(64);
// //console.log(gameEvents);

// /**3.  */
// console.log(`An event happened, on average,every ${90/gameEvents.size} minutes`)

// /**4. Loop over gameEvents*/

// for(const [key,value] of gameEvents.entries())
// {
//     const half = key <= 45 ? 'FIRST': 'SECOND';
//     console.log(`[${half} HALF] ${key} : ${value}`);
// }



/**1.Recieving the underscore and converting to CamelCase */
/*
const camelCase = function(underscoreCase)
{
    let originalName = [];
    underscoreCase = underscoreCase.toLowerCase().split("_");
    
    for(const n of underscoreCase)
    {
        originalName.push(n.replace(n[0], n[0].toUpperCase()));
    }
    originalName.join(" ");
    console.log(originalName);
}
camelCase("warfan_Ahmad_bhat");
*/
/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const text = document.querySelector('textarea').value;
console.log(text);

document.querySelector('button').addEventListener('click',function(text)
{

})
*/

///////////////// Functions returning Functions/////////////////
/*
const greet = (greeting) => (name) => {
    console.log(`${greeting} ${name}`);
}

greet('hey')('jonas')
*/
///////////////////////Fucntion return function////////////////
/* 
const addTax = function(rate)
{
    return function(value)
    {
        return value + value * rate;
    };
};

const addVat = addTax(0.23);
console.log(addVat(100));
console.log(addVat(23));
*/

///////////////Coding Challenge Poll//////////////////////

const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
    // answers: new Array(4).fill(0),
    answers: [12,13,1,2,4,5,6],
    registerNewAnswer()
    {
        const userInput = Number(prompt("What is your favourite programming language? \n 0: JavaScript\n 1: Python \n 2: Rust \n 3: C++"));
        if(userInput>=0 && userInput < 4)
        {
            let a = this.answers[userInput];
            console.log(a+1);
        }
    },

    // displayResults(type)
    // {
    //     if(type === 'string' )
    //     {
    //         console.log(this.answers);
    //     }
    //     else
    //     {
    //         console.log(...poll.answers);
    //     }

    };
    
    poll.registerNewAnswer();


    // document.querySelector('btn').addEventListener('click',poll.registerNewAnswer());











