const myNums = [1, 2, 3, 4]
const initialVal = 0;
const newNums = myNums.reduce((acc,curr) =>{
    // console.log(`Acc : ${acc} and Curr : ${curr}`);
    return acc+curr
},initialVal);

// console.log(newNums)


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc,curr) => acc+curr.price,0);
console.log(priceToPay)