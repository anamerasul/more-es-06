const friends=['tom','kruse','braddy','solaiman','henresay']

const flenghts=friends.map(frnd=>frnd.length)

console.log(flenghts);

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

const productsName =products.map(product=>product.name);

const productPrice=products.map(price=>price.price);

products.map(product => console.log(product));


products.forEach(product => console.log(product))


console.log(productsName);

console.log(productPrice)