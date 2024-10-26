//დავალება 1
const myPromise = new Promise((resolve, reject) => {
    resolve("Hello, Promise!");
});

myPromise.then((message) => {
    console.log(message); // გამოიტანს: Hello, Promise!
});


//დავალება 2
const myPromise = new Promise((resolve, reject) => {
    reject("Something went wrong!");
});

myPromise.catch((error) => {
    console.log(error); // გამოიტანს: Something went wrong!
});

//დავალება 3
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("2 seconds have passed");
    }, 2000);
});

myPromise.then((message) => {
    console.log(message); // 2-წამის შემდეგ გამოიტანს: 2 seconds have passed
});

//დავალება 4
const myPromise = new Promise((resolve, reject) => {
    const randomValue = Math.random();

    if (randomValue > 0.5) {
        resolve("Success!");
    } else {
        reject("Failed!");
    }
});

myPromise
    .then((message) => {
        console.log(message); // გამოიტანს: Success!
    })
    .catch((error) => {
        console.log(error); // გამოიტანს: Failed!
    });

//დავალება 5
const myPromise = new Promise((resolve, reject) => {
    resolve(5);
});

myPromise
    .then((number) => {
        console.log(number); // გამოიტანს: 5
        return number * 2;
    })
    .then((number) => {
        console.log(number); // გამოიტანს: 10
        return number * 2;
    })
    .then((number) => {
        console.log(number); // გამოიტანს: 20
        return number * 2;
    })
    .then((number) => {
        console.log(number); // გამოიტანს: 40
    });

// დავალება 6
const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched!");
    }, 1000); // 1 second delay
  });
  
  // To test the promise
  fetchData.then((message) => {
    console.log(message); // გამოიტანს: "Data fetched!" 1-წამის გასვლის შემდეგ 
  });
  