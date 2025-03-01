// console.log("I'm Second JavaScript file Here! ", userEmail);
//primitive types
// let UserId = 412;

// //Number
// console.log("User ID : ", UserId);
// console.log("Type of User ID : ", typeof UserId);

// //String
// let UserEmail = "sanravijith@gmail.com";
// console.log("Email : ", UserEmail);
// console.log("Type of User Email : ", typeof UserEmail);

// //Boolean
// let isAuthenticated = false;
// console.log("Authentication : ", UserEmail);
// console.log("Type of User Authentication : ", typeof UserEmail);

// //Null
// let PhoneNumber = null;
// console.log("Phone Number : ", PhoneNumber);
// console.log("Type of User ID : ", typeof PhoneNumber);

// //Undefined
// let dob;
// console.log("DOB : ", dob);
// console.log("Type of DOB : ", typeof dob);

// let UniqueID = Symbol("id");
// console.log("UID : ", UniqueID);
// console.log("Type of UID : ", typeof UniqueID);

//Object Types
// let person = { name: "Sandun", age: 34 };
// console.log("Person : ", person);
// console.log("Type of Person : ", typeof person);

// let myArray = [1, 2, 3, 4, 5];
// console.log("My Array : ", myArray.length);
// console.log("My Array : ", myArray);
// console.log("Type of My Array : ", typeof myArray);

// function greet(name) {
//   //   return "Hello, " + name;
//   //template Literals (ES6)
//   return `Hello, ${name}`;
// }

// // calling to a js function with a parameter
// // console.log("Value of Greet : ", greet("Sandun"));
// // console.log("Type of Greet : ", typeof greet);

// //After ES(6)

// const greet2 = (name) => {
//   //   return `Hello, ${name}`;
// };

// console.log("Value of Greet2 : ", greet2("Sandun"));
// console.log("Type of Greet2 : ", typeof greet2);

// //Destructuring
// let user = {
//   name: "Sandun",
//   age: 29,
//   data: {
//     uuid: "23456456",
//     token: "hjskahdsdh235a4sd",
//     createdAt: "23.02.2025",
//     images: ["164546", "789564", "64543"],
//   },
// };
// // const { name, age } = person;
// console.log("Name: ", user.name);
// console.log("Age: ", user.age);

// const { uuid } = user.data;
// console.log("UUID : ", uuid);

//Optional Chaining
// console.log("UpdatedAt : ", user?.data?.updatedAt ?? "Not Available"); //Nullish Coalescing

//Spread & Rest Operator (ES6)

// const myArray2 = [1, 2, 3, 4, 5];
//const myArray3 = [...myArray2, 6, 7];

// myArray2.push(6);
// myArray2.push(7);

// myArray2.pop(1);

// console.log(myArray2);

console.log("I'm Here before DOM Load");

const startTime = performance.now();

//Event Listener

document.addEventListener("DOMContentLoaded", (event) => {
  const endTime = performance.now();
  const loadTime = (endTime - startTime).toFixed(2); //Calculate time in milliseconds
  console.log("DOM fully loaded and parsed");
  console.log(`DOM load time: ${loadTime} ms`);

  const mainTitle = document?.querySelector("#main-title");
  console.log(mainTitle);

  const mainButton = document.querySelector("#main-button");
  // console.log(mainButton);

  // Bind click event to the main button
  mainButton.addEventListener("click", () => {
    // Change the main title
    mainTitle.textContent = "I'm the Changed One!";

    // setTimeout(() => {
    //   window.location.reload(true);
    // }, 200);
  });
});
