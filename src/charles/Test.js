// Synchronous example
console.log("Start");

function syncTask() {
  console.log("Performing synchronous task...");
  for (let i = 0; i < 3; i++) {
    console.log(`Task step ${i + 1}`);
  }
  console.log("Synchronous task completed.");
}

syncTask();

console.log("End");

// Asynchronous example using a callback
console.log("Start");

function asyncTask(callback) {
  console.log("Performing asynchronous task...");
  setTimeout(() => {
    console.log("Asynchronous task completed.");
    callback();  // Callback is invoked when the task is done.
  }, 2000);  // Simulates an asynchronous task that takes 2 seconds
}

asyncTask(() => {
  console.log("Callback executed after asynchronous task.");
});

console.log("End");

//Callbacks

console.log("Start");

setTimeout(function abc() {console.log("ok")}, 2000);
setTimeout(() => console.log("ok") , 2000);

console.log("End");

//Promises using fetch

const fetchAPIPromises = () => {
    const apiUrl = 'https://fake-json-api.mock.beeceptor.com/users';

    //declare function fetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response>;

    // Fetch data from the API
    fetch(apiUrl)
      .then((resolve) => {
        console.log(resolve.formData);
      })
      .catch((reject) => {
        console.error('There was a problem with the fetch operation:', reject);
      });
  };


// Async/Await

const fetchAPI = async () => {
    const apiUrl = 'https://fake-json-api.mock.beeceptor.com/users';
    try {
      // Fetch data from the API
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
    console.log('screen');
  };