// 1번
const cart = [
    { item: "노트북", price: 1200000, quantity: 1 },
    { item: "마우스", price: 35000, quantity: 2 },
    { item: "키보드", price: 89000, quantity: 1 }
];

let totalPrice = 0;
for (let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].price * cart[i].quantity;
}
console.log("Total Price: " + totalPrice);

totalPrice = 0; 
cart.forEach(
    (item) => {
    totalPrice += item.price * item.quantity;
}
);
console.log("Total Price: " + totalPrice);

totalPrice = cart.reduce(
    (acc, item) => {
        return acc + item.price * item.quantity;
    }, 0
);
console.log("Total Price: " + totalPrice);

const itemTotals = cart.map(
    (item) => {
        return {
            item: item.item,
            total: item.price * item.quantity
        };
    }
);
console.log("제품별 금액: ", itemTotals);


// 2번
const names = ['alice', 'bob', 'charlie'];
const uppercasedNames = names.map(
    name => name.toUpperCase()
);
console.log(uppercasedNames);

const capitalStartnames = names.map(
    name => name.charAt(0).toUpperCase() + name.slice(1)
);
console.log(capitalStartnames);

