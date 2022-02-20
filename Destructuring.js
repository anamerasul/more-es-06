const fish ={
        id:58,
        name:'king hilsha',
        price:9000,
        phone:'0155556555',
        address:'chadpur',
        dress:'silver'
}
// const phone =fish.phone;

// const  price=fish.price;

// const dress=fish.dress;

const {phone,price,dress,id}=fish;
console.log(fish.price);
console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);
console.log(price);
console.log(dress);
console.log(id);

const company ={name:'gp',

ceo:{
        id:"1",
        name:'ajmol',
        food:'fish'

},
web:{
        work:'development',
        employee:22,
        framework:"node",


tech:{
first:'html',
second:'css',
third:'js'
}}
}
// const work =company.web.work;
const {work ,framework}=company.web;

const {food}=company.ceo;


const {second}=company.web.tech

console.log(work,food,framework)
