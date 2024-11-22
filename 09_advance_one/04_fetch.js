// Interview Question (SDE-2)

// If we requested something using promises and we get an error 404 so we will get the data in resolve or reject ?

/*
    We will get it in the resolve as it is not an error and error will be in the case when something cannot be requested by the browser then it will go inside reject
*/

// The fetch api is executed first even before the setTimeout/setInterval as there is something known as Microtask / Priority Queue which is queue that is special and prioritized more (VIP line) than the task Queue (used for setTimeout/setInterval) 

/* fetch api works in two parts
1. To reserve space in memory named Data(example)
2. To handle node/browser api request

- Data (initially empty)
    onfulfilled[] // promise Resolve
    onRejection[] // promise Reject

    cannot be accessed directly

- Access the web based api or node based api
  Here the network request goes and we need resource to fire the network request via browser or nodejs

  If resolved, then it goes to onfulfilled[]
  else it goes to onRejection[]

  inside the onfulfilled/onRejection we get function and these function are responsible for fulfilling the Data which is initially empty

  now Data returns the fulfillment to the variable response 

*/

// const response = fetch('www.example.com');