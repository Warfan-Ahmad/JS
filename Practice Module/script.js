'use strict'
/*

///////////////////////Working with Objects Basic Operations//////////////////////////////////

const students = {
    firstName: "warfan",
    lastName: "Ahmad",
    age:18
};
for (const i in students) {
    console.log(students[i]);
}
delete students.age;
students.school = "GEI";
for (const i in students) {
    console.log(students[i]);
}
  document.getElementById("demo").innerHTML =
  person.name + "," + person.age + "," + person.city;

  let myString = JSON.stringify(person);
document.getElementById("demo").innerHTML = myString;

const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  const myArray = Object.values(person);
  document.getElementById("demo").innerHTML = myArray;

   const person = {
    name: "John",
    today: new Date()
  };
  
  let myString = JSON.stringify(person);
  document.getElementById("demo").innerHTML = myString;

///////////////////////////////////////////////////////////////////////////////////////////////



//////////////////////////This Keyword Practice ////////////////////////////////////////////
const students = {
    firstName: "warfan",
    lastName: "Ahmad",
    age:18,
    changeName : function(newName)
    {
        this.firstName = newName;
        // return this.firstName + " " + this.lastName;
    }
   
};

function Students(firstName,lastName,age)
{
    this.firstName = firstName;
    this.lastName  = lastName;
    this.age = age,
    this.changeName = function(newName)
    {
        this.firstName = newName;
        // return this.firstName + " " + this.lastName;
    }
}

const sT1 = new Students("Aijaz","Ahmad",17)
console.log(sT1);
console.log(sT1.age);
console.log(sT1.changeName("Arya"));
function BellBoy(firstName,lastName,age)
{
    this.firstName = firstName,
    this.lastName = lastName,
    this.age = age,
    this.cleaning = function()
    {
        alert("Cleaning in Progress!!!");
    }
};
const bellboy1 = new BellBoy("Smith","Johnasan",22);
bellboy1.cleaning();
////////////////////////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////Array Destructor practice///////////////////////////////////////
const arr = ["Warfan","Ahmad", "Bhat",[9149962264,9149765282]];

let [firstName = " ",lastName = " ",surName = " ",[primaryPhoneNumber,secondaryPhoneNumber]] = arr;
console.log(firstName, lastName,surName,primaryPhoneNumber,secondaryPhoneNumber);
console.log(secondaryPhoneNumber + 213123);
 

/////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////Object Destructors///////////////////////////////////////////////


const obj = 
{
    fisrtName : "Warfan",
    lastName : "Ahmad",
    surName : "Bhat",
    fullName: function()
    {
        console.log(`Your Full Name is ${this.fisrtName} ${this.lastName} ${this.surName}`);
    },
    nestedobject : {
        mon:18,
        tue:19,
    },

    delivery: function({time,deliverGuy})
    {
        console.log(`Order Received ${this.fisrtName} and will be delivered at ${time}, Address is at ${this.fullName()} House by ${deliverGuy}`);
    //This.Fullname is not working why
    }
};

obj.delivery( 
{
    time : "12.00",
    deliverGuy: "Steven"
});

//obj.fullName();
//const {fisrtName:fname = " ",surName:sName = " ",lastName:lName = " "} = obj;
//console.log(fname,sName,lName);

//const {fisrtName,surName, nestedobject } = obj; //In case you want to use this change the firstname it is getting used in the second line also
//const {fisrtName,surName,nestedobject:{mon,tue}} = obj;
//console.log(fisrtName,surName,mon,tue);
*/

//////////////////////////Coding Challenge Fucntions/////////////////////////////

const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
    answers: new Array(4).fill(0),
    registerNewAnswer()
    {
        // const userInput = Number(prompt(`${this.question} \n ${this.options}`));
        const userInput = Number(prompt("What is your favourite programming language? \n 0: JavaScript \n 1: Python\n  2: Rust \n  3: C++"));
        if(userInput >=0 && userInput < 4)
        {
            let spot = poll.answers[userInput];
            let valuesUpdate = spot + 1;
            // console.log(poll.answers.push(valuesUpdate));
            //console.log(poll.answers.push(valuesUpdate));
        }
        console.log(poll.answers);
    },
    
    };

    document.querySelector('.poll').addEventListener('click',poll.registerNewAnswer);
