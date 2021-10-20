"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
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
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

// Elements
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

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

///////////////////////////////Populating the data in the html////////////////////////////////////

const displayMovements = function (movements,sort = false) {
  //In this section we are manipulating DOM with the data we have in the array.
  containerMovements.innerHTML = "";
  //This cleans the entire section of movements before populating the data

//Sorting if the sort parameter becomes true which is becoming with the button click
  const movs = sort ? movements.slice().sort((a,b) => a - b) : movements; 


  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    //In this part we are calculating the two parts the value of the trascation and the transaction number we have and accordingly populate in the DOM
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}"> ${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov} ₹</div>
      </div>
    `;

    //This line populates the DOM with the method after begin i.e., after the movements block has started with the template literals we have created above
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

///////////////////////////////////Displaying the Balance//////////////////////////////////////////

const displayBalance = function (accounts) {
  accounts.balance = accounts.movements.reduce(
    (accumulator, currentElement) => accumulator + currentElement,
    0
  ); //Inital value of acculmulator)
  labelBalance.textContent = `${accounts.balance} ₹`;
};

/////////////////////////////Calculating the Summary at the last///////////////////////////////////

const calcDisplaySummary = function (accounts) {
  //In this part of code we have used the magic of chaining methods where we can use the multiple method together..
  //in order to calculate the income total we take the array and extract the deposits only with the filter and then we add them up with reduce method.........same is the case with withdrawals but the condition changes to the negative deposits
  const incomes = accounts.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes} ₹`;

  const out = accounts.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)} ₹`;

  //here we have made it little intresting where we are giving a 1.2% interest on each of the deposit made by the user so we first extract the deposits and then give interest on that using map method and then calculate the total..... we also added a method of filter which takes only the interst which are greater than 1 and then add them

  const interest = accounts.movements
    .filter((mov) => mov > 0)
    .map((mov) => (mov * accounts.interestRate) / 100)
    .filter((int) => int >= 1)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = `${interest} ₹`;
};

///////////////////////////////Generating the UserNames from the Names/////////////////////////////

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

///////////////////////////////////////Login System///////////////////////////////////////////

const updateUI = function (Accoun) {
  displayMovements(Accoun.movements);

  //Display balance
  displayBalance(Accoun);

  //Display Summary
  calcDisplaySummary(Accoun);
};

let currentAccount;

///////////////////////////////Adding event listener/////////////////////////////////////////
btnLogin.addEventListener("click", function (event) {
  //Prevent from submitting
  event.preventDefault();

  //Here we are checking the value which is provided in the input field is it same as any of the objects username
  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );

  //if the above user is present current account gets populated as the name of that account now we perform opeations based on the object so then we check the pin is same as provided if the object isnt found we have added optional chaining ? to check if the object is present then perform this operation
  if (currentAccount?.pin === +(inputLoginPin.value)) {
    // Display the UI and Message
    labelWelcome.textContent = `Welcome Back ${
      currentAccount.owner.split(" ")[0]
    }`;

    //Display the movements
    containerApp.style.opacity = 100;

    //Update the UI
    updateUI(currentAccount);

    //Emptying the login fields
    inputLoginUsername.value = inputLoginPin.value = " ";
    inputLoginPin.blur();
  }
});
//////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////Transferring the money to other user//////////////////////////

btnTransfer.addEventListener("click", function (event) {
  event.preventDefault();

  const amount = +(inputTransferAmount.value);

  //Here is an important step were we directly find the username of the provided in the input field
  const receiverAccount = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );

  inputTransferTo.value = inputTransferAmount.value = " ";
  inputTransferAmount.blur();

  //In this condtion everything is checked before transfering the amount the reciver account is also checked with optional chaning before the transfer is made and also the account shouldnt be the same.
  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    receiverAccount?.username !== currentAccount.username &&
    receiverAccount
  ) {
    //Doing the Transfer
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);
    updateUI(currentAccount);
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////Requesting the Loan///////////////////////////////////////////////

btnLoan.addEventListener('click',function(event)
{
  event.preventDefault();
  const amount = +inputLoanAmount.value;

   if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1))
   {
     currentAccount.movements.push(amount);
     updateUI(currentAccount);

     inputLoanAmount.value = ' ';
     inputLoanAmount.blur();
   }
})

///////////////////////////////////Closing the Account////////////////////////////////////////////

btnClose.addEventListener('click',function(event)
{
  event.preventDefault();


  if(currentAccount.username === inputCloseUsername.value && currentAccount.pin === +inputClosePin.value)
  {
    const index = accounts.findIndex((acc => acc.username === currentAccount.username))
    accounts.splice(index,1);
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = " ";
  inputClosePin.blur();
  labelWelcome.textContent = `Log in to get started`
});

//////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////Sort the Movements////////////////////////////////////////////
let sorted = false;

btnSort.addEventListener('click',function(e)
{
  e.preventDefault();
  displayMovements(currentAccount.movements,!sorted);
  sorted = !sorted;
});

///////////////////////////////////////////////////////////////////////////////////////////////

