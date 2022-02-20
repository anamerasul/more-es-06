class Support{

        name;
        role='support web dev';
        address="bd";

        constructor(name,address) {
                this.name=name;
                this.address=address;
        }
        startSection(){
                console.log(this.name,'start section');
        } 

       
}


const amir =new Support('amir khan','bd');

const salam =new Support('salma','solaimun');

amir.startSection()

// console.log(amir )

// console.log(salam)