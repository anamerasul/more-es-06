const numbers=[4,6,8,10];

// function doubleOld(num){
//         return num*2;
// }

const doubleIt=num=>num*2

const output2=[];

for(const number of numbers){

        // const result =number*2;
        const result =doubleIt(number);
        output2.push(result);
}

console.log(output2);

// 1.loop
// element diye function call 

// result ekta array te push  

const output =numbers.map(doubleIt);

console.log(output)


const output3=numbers.map(num=>num*2)

console.log(output3)