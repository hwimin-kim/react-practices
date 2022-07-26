import fs from 'fs';

//fs.readFile('./json/data.json', 'utf-8',(err, data) => {console.log(data)});
let state = {
  order: JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'))
}

const updateOrderProducts1 = state.order.products;
updateOrderProducts1.push({
  no: "c002-001",
  name: "블루양말",
  price: 1000,
  amount: 1
});

console.log(state.order.products, updateOrderProducts1, state.order.products === updateOrderProducts1);
console.log('===================================');

state = {
  order: JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'))
}

const updateOrderProducts2 = state.order.products.concat({
  no: "c002-001",
  name: "블루양말",
  price: 1000,
  amount: 1
});

console.log(state.order.products, updateOrderProducts2, state.order.products === updateOrderProducts2);

console.log('===================================');

state = {
  order: JSON.parse(fs.readFileSync('./json/data.json', 'utf-8'))
}

const updateOrderProducts3 = [...state.order.products, {
  no: "c002-001",
  name: "블루양말",
  price: 1000,
  amount: 1
}];

console.log(state.order.products, updateOrderProducts3, state.order.products === updateOrderProducts3);