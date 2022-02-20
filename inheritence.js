class TeamMember{
        name;
        role='support web dev';
        address="bd";

        constructor(name,address) {
                this.name=name;
                this.address=address;
        }
}

class Support extends  TeamMember{

      
        startSection(){
                console.log(this.name,'start section');
        } 

       
}




// console.log(amir )

// console.log(salam)

class StudentCare extends TeamMember {
     
        buidARoutine(student){
                console.log(this.name ,'build a routine', student)
        }
}
class NeptuneDev{
        name;
        designation='student care web dev';
        address='bd';
        constructor(name,address){
                this.name=name;
                this.address=address
        }
        ReleaseApp(release){
                console.log(this.name ,'build a routine', release)
        }
}


const amir =new Support('amir khan','bd');

const salam =new Support('salma','solaimun');

amir.startSection()


const alia =new StudentCare('alia','moibai')

console.log(alia)