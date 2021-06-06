const orders = [
  { orderId: '123', customerId: '123', deliveryDate: '01-01-2020', delivered: true, items: [
      { productId: '123', price: 55 },
      { productId: '234', price: 30 },
  ]},
  { orderId: '234', customerId: '234', deliveryDate: '01-02-2020', delivered: false, items: [
      { productId: '234', price: 30 },
  ]},
  { orderId: '345', customerId: '234', deliveryDate: '05-01-2020', delivered: true, items: [
      { productId: '567', price: 30 },
      { productId: '678', price: 80 },
  ]},
  { orderId: '456', customerId: '345', deliveryDate: '12-01-2020', delivered: true, items: [
      { productId: '789', price: 12 },
      { productId: '123', price: 90 },
  ]},
      { orderId: '578', customerId: '456', deliveryDate: '12-01-2020', delivered: true, items: [
      { productId: '901', price: 43 },
      { productId: '123', price: 55 },
  ]},
];

// const notDelivred = orders.filter((costumer) => costumer.customerId === '234' && !costumer.delivered);
// console.log(notDelivred);

// const totalPrice = orders.map((order) => ({...order, totalPirce: order.items.reduce((acc, item) => acc + item.price, 0)}));
// console.log(totalPrice);

// const isDelivred = orders.every((item) => item.delivered);
// console.log(isDelivred);

// const productsOrdered = orders.filter((costum) => costum.customerId === '123')
// console.log(productsOrdered);

const product123 = orders.reduce((acc, order) => acc + order.items.reduce((acc, item) => acc + (item.productId === '123'), 0), 0);
console.log(product123);


const str = "one.two.three";

console.log(str.replace(/\./g, '-'))

var humanYearsCatYearsDogYears = function(hYears) {
  // Your code here!
  const arr = Array.from({length: hYears}, (_,i) => i + 1);
  let catY = 0;
  let dogY = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] == 1) {
      catY = 15;
      dogY = 15;
    } else if (arr[i] == 2) {
      catY = 24;
      dogY = 24;
    } else if (arr[i] >= 3) {
      catY += 4;
      dogY += 5;
    }
  }
 
  return [hYears,catY,dogY];
}

console.log(humanYearsCatYearsDogYears(10));

function digitize(n) {
  return String(n).split('').map(Number).reverse();
}

console.log(digitize(35231));