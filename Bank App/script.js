"use strict";

//////////////////////////////////////////////Introduction///////////////////////////////////////////
/* 
Name : Banking App
Date: 21-10-2021 

This app is designed simply to show a good UI to the user where they can see there transaction total amount the amount IN and OUT and the intresent bank is paying. It also has a timer which logouts the user if it remained idle for 2 minutes.

I have designed it also using internalization which can show the currency of different accounts differently.

The date system has also been done to show the date of each trasaction
A login system is also formed which essentailly take the data from the object of the user.

*/

///////////////////////////////////////////////// Data////////////////////////////////////////////////
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2,
  pin: 1111,

  movementsDates: [
    '2021-10-15T21:31:17.178Z',
    '2021-12-23T07:42:02.383Z',
    '2021-10-18T09:15:04.904Z',
    '2021-10-19T16:33:06.386Z',
    '2021-05-08T14:11:59.604Z',
    '2021-05-27T17:01:17.194Z',
    '2021-07-11T23:36:17.929Z',
    '2021-10-20T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2021-11-15T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2021-10-20T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

////////////////////////////////////// Elements///////////////////////////////////////////////////////

const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

//////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////Formatting the Currency////////////////////////////////////////////////
const formattingCurrency = function (value,local,currency)
{
  return new Intl.NumberFormat(local,{
    style : 'currency',
    currency : currency,
  }).format(value);
};
//////////////////////////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////Time date calculatio///////////////n//////////////////////////////

const formatMovementDate =  function(date,locale)
{
  const calcDaysPassed = (date1,date2) => 
  Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24)); 

  const daysPassed = calcDaysPassed(new Date(), date);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  return new Intl.DateTimeFormat(locale).format(date);
};


///////////////////////////////Populating the data in the html////////////////////////////////////////

const displayMovements = function (acc,sort = false) {
  //In this section we are manipulating DOM with the data we have in the array.
  containerMovements.innerHTML = "";
  //This cleans the entire section of movements before populating the data

//Sorting if the sort parameter becomes true which is becoming with the button click
  const movs = sort ? acc.movements.slice().sort((a,b) => a - b) : acc.movements; 


  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date,acc.locale);

    const formattedMovement = formattingCurrency(mov,acc.locale,acc.currency);

    //In this part we are calculating the two parts the value of the trascation and the transaction number we have and accordingly populate in the DOM
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}"> ${
      i + 1
    } ${type}</div>
      <div class="movements__date">${displayDate}</div>
      <div class="movements__value">${formattedMovement}</div>
      </div>
    `;

    //This line populates the DOM with the method after begin i.e., after the movements block has started with the template literals we have created above
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

//////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////Displaying the Balance/////////////////////////////////////////////

const displayBalance = function (accounts) {
  accounts.balance = accounts.movements.reduce((accumulator, currentElement) => accumulator  + currentElement,0);
  labelBalance.textContent = formattingCurrency(accounts.balance, accounts.locale, accounts.currency); 
  };
//////////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////Calculating the Summary at the last//////////////////////////////////////

const calcDisplaySummary = function (accounts) {
  //In this part of code we have used the magic of chaining methods where we can use the multiple method together..
  //in order to calculate the income total we take the array and extract the deposits only with the filter and then we add them up with reduce method.........same is the case with withdrawals but the condition changes to the negative deposits
  const incomes = accounts.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formattingCurrency(incomes,accounts.locale,accounts.currency);

  const out = accounts.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formattingCurrency(Math.abs(out),accounts.locale,accounts.currency);

  //here we have made it little intresting where we are giving a 1.2% interest on each of the deposit made by the user so we first extract the deposits and then give interest on that using map method and then calculate the total..... we also added a method of filter which takes only the interst which are greater than 1 and then add them

  const interest = accounts.movements
    .filter(mov => mov > 0)
    .map((mov) => (mov * accounts.interestRate) / 100)
    .filter((int) => int >= 1)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = formattingCurrency(interest,accounts.locale,accounts.currency);
};
//////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////Generating the UserNames from the Names///////////////////////////////

//In this part we are taking the whole accounts list and then iterating over them with forEach loop
const CreateUserNames = function (accos) {
  accos.forEach(function (nameOfUser) {
    //In this line we make a new property inside each of the object as username and we extract that username from the owner key in the object ......after perfoming the basic opertions like to lower case and split after the space we use the map function which is important which actually creates a new array with the first letter of the each word which came from splitting method after we have our required new array its the time to join them together so we join them with the join method
    nameOfUser.username = nameOfUser.owner
      .toLowerCase()
      .split(" ")
      .map((nam) => nam[0])
      .join("");
  });
};
CreateUserNames(accounts);
//////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////Login System///////////////////////////////////////////////////

const updateUI = function (Acc) {
  displayMovements(Acc);

  //Display balance
  displayBalance(Acc);

  //Display Summary
  calcDisplaySummary(Acc);
};
//////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////Timer Function for logout System////////////////////////////////
const startLogOutTimer = function()
{ 
  const tick = function()
  {
  //Call the timer every second
    const min = String(Math.trunc(time / 60)).padStart(2,0);
    const sec = String(time % 60).padStart(2,0);
    //In each call print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;
  
    //When at 0 stop the timer and logout
    if(time === 0 )
    {
      clearInterval(timer);
      labelWelcome.textContent = `Login to get started`;
      containerApp.style.opacity = 0;
    }
    //decrease one second
    time --;
  };
   // Set time to 5 minutes
  let time = 120;

   // Call the timer every second
  tick();
  const timer = setInterval(tick, 1000);

  return timer;
};

//////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////Adding event listener/////////////////////////////////////////

let currentAccount,timer;

btnLogin.addEventListener("click", function (event) {
  //Prevent from submitting
  event.preventDefault();

  //Here we are checking the value which is provided in the input field is it same as any of the objects username
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);

  //if the above user is present current account gets populated as the name of that account now we perform opeations based on the object so then we check the pin is same as provided if the object isnt found we have added optional chaining ? to check if the object is present then perform this operation
  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display the UI and Message
    labelWelcome.textContent = `Welcome Back ${currentAccount.owner.split(" ")[0]}`;

    //Display the movements
    containerApp.style.opacity = 100;

    const now = new Date();
    const options = {
      hour:'numeric',
      minute : 'numeric',
      day : 'numeric',
      month : 'numeric',
      year : 'numeric',
      };

    labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale,options).format(now); 


    if(timer) clearInterval(timer);
    timer = startLogOutTimer();
    //Update the UI
    updateUI(currentAccount);

    //Emptying the login fields
    inputLoginUsername.value = inputLoginPin.value = " ";
    inputLoginPin.blur();
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////Transferring the money to other user/////////////////////////////

btnTransfer.addEventListener("click", function (event) {
  event.preventDefault();

  const amount = +inputTransferAmount.value;

  //Here is an important step were we directly find the username of the provided in the input field
  const receiverAccount = accounts.find(acc => acc.username === inputTransferTo.value);

  inputTransferTo.value = inputTransferAmount.value = '';
  inputTransferAmount.blur();

  //In this condtion everything is checked before transfering the amount the reciver account is also checked with optional chaning before the transfer is made and also the account shouldnt be the same.
  if (amount > 0 && currentAccount.balance >= amount && receiverAccount?.username !== currentAccount.username && receiverAccount) {
    //Doing the Transfer
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);

    //////Add date and time of trasaction/////////
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAccount.movementsDates.push(new Date().toISOString());
    
    updateUI(currentAccount);
    

    ///reset the timer 
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});
//////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////Requesting the Loan//////////////////////////////////////////////////

btnLoan.addEventListener('click',function(event)
{
  event.preventDefault();
  const amount = Math.floor(inputLoanAmount.value);

   if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1))
  {
    setTimeout(function(){
    currentAccount.movements.push(amount);

        //////Add date and time of trasaction/////////
    currentAccount.movementsDates.push(new Date().toISOString());    
    updateUI(currentAccount);
    
    //REset timer
    clearInterval(timer);
    timer = startLogOutTimer();
    },3000);
  }
  inputLoanAmount.value = ' ';
  inputLoanAmount.blur();
});
//////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////Closing the Account///////////////////////////////////////////////

btnClose.addEventListener('click',function(event)
{
  event.preventDefault();

  if(currentAccount.username === inputCloseUsername.value && currentAccount.pin === +inputClosePin.value)
  {
    const index = accounts.findIndex( acc => acc.username === currentAccount.username);
    accounts.splice(index,1);
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = " ";
  inputClosePin.blur();
  labelWelcome.textContent = `Log in to get started`
});

/////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////Sort the Movements////////////////////////////////////////////
let sorted = false;
btnSort.addEventListener('click',function(e)
{
  e.preventDefault();
  displayMovements(currentAccount,!sorted);
  sorted = !sorted;
});
///////////////////////////////////////////////////////////////////////////////////////////////
