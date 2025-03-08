1.  What are the three states of a Promise?

    i. Pending : The initial state of a Promise.
    ii. Fulfilled : The operation completed successfully.
    iii.Rejected : The operation failed.

2.  How does the async keyword affect a function's return value?

    async keyword is using for an asynchronous function.
    When we use async before a function it will be like a promise.
    The resolved value of the Promise is the value of the success function.
    function has an error, the Promise will be reject the error.
    async use the try and catch for display the results.

3.  Explain the purpose of the await keyword.

    await only can be used with async functions. because async is run like as a promise,
    when we fetch the data, js running the processes asynchronously, output will be mismatched with expected result. await keyword hold the second output until success the first output.

4.  What is a callback function and how is it used in asynchronous operations?

    The simple examples for the process of callback function are 'resolve' and 'reject', we have used with Promise.

    callback function is a function that is passed as an argument to another function.

                    function fetchData(callback) {



    /_it is executed after some operation has been completed. as below example after 5 seconds gone, the data of the callback's parameter will pass to the fetchData function_/

                    setTimeout(() => {
                        const data = "Some data";
                        callback(data);
                    }, 5000);
                    }

    /_Define the callback function as receivedData_/

                    function receivedData(data){
                        console.log("Data received ", data)
                    }

    /_call the function inside in the function_/

                    fetchData(receivedData);

5.  Describe the role of the event loop in JavaScript.

        event loop is a simple term and we use an event loop for setting a timeout to delay the output what we selected.
        js is a single thread language. event loop is used to handle multitask without blocking main thread of js.

6.  Write a function called delayedGreeting that takes a name as an argument and logs a greeting message to the console after a 2-second delay using setTimeout. Use a callback function to achieve this.

          function delayedGreeting(callback) {

          console.log("Fetching started!");

          setTimeout(() => {
              const name = "Sandun Ravindrajith";
              callback(name);
          }, 2000); // simulate Greetings with a delay of 2 seconds
          }


          function handleData(data) {
          console.log("Hellooo Mr. ", data);
          }

          delayedGreeting(handledData);
