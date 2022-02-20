const numbers =[3,5,67,794,8563,74646,56,67,,11,45,89];

const bigNumbers=numbers.filter(num => num>65)
const smallNumbers=numbers.filter(num => num<65);

console.log(smallNumbers)



console.log(bigNumbers);


const products =[

        {
                name:'water bottle',
                price:50,
                color:'transparent',
        },
        {
                name:'phone',
                price:25000,
                color:'black',
        },
        {
                name:'smart watch',
                price:4550,
                color:'green',
        },
        {
                name:'water glass',
                price:450,
                color:'white',
        },
        {
                name:'stick',
                price:40,
                color:'green',
        }
]

const cheap =products.filter(product=> product.price <100)

const green=products.filter(product=> product.color=='green');


const lightblue=products.filter(product=> product.color=='lightblue');


// console.log(cheap);
// console.log(green);
// console.log(lightblue);


const whiteItem=products.find( product=> product.color == 'green');

console.log(whiteItem);