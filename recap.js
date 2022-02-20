// 1.let and const
const hubby ="mousomi";

let phone ="htc";

phone="samgsamg"

// 02 default parameter
//05 spread or three dots

function findMax(array = []){
        const max=Math.max(...array);
        return max;


}

console.log(findMax())

// 3.template string

const myNotes= `I am mojnu of ${hubby} like her i have ${phone}`;


console.log(myNotes)

// o4 arrow function

const squre =x=>x*x;

console.log(squre(4))