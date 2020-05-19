//always use the first letter of class name in caps


class Person  {
     constructor(name= 'Anonymous',age=0)
     {
         this.name = name ;
         this.age= age;
     }
     getGretting()
     {
     return `hi i am ${this.name} !`; 
    }
    getDescription()
    {
        return `${this.name} is ${this.age} years old`;
    }
}

class Student extends Person {
     constructor(name,age,major){
       super(name, age);
        this.major = major;
     }
     hasMajor()
     {
         return !!this.major;
     }
     getDescription()
     {
         let description = super.getDescription();
         if(this.hasMajor())
         {
               description  += ` Their major is ${this.major}`;
         }
         return description;
     }
}

class Traveller extends Person {
    constructor(name,age,homeLocation)
    {
         super(name,age);
        this.homeLocation=homeLocation;
        }

        getGretting()
        {
            let Gretting = super.getGretting();

            if(this.homeLocation)
            {
                Gretting += `I'm Visiting  from ${this.homeLocation}`
            }
            return Gretting;
        }
}
const me = new Traveller('Vivek',18,'Newyork');
console.log(me.getGretting());

const other = new Traveller();
console.log(other.getGretting());