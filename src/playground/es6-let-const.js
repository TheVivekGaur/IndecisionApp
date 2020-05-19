var nameVar = 'vivek';
var nameVar =  'mike';
console.log('nameVar', nameVar);

// in var we can reassign and also redefine the variable this can cause overwriting the same variable 
//but in the case of  let we can reassign but cannot redfine that variable with same name
//but in case of const we cannot even reassign value cannot mutate change the value

let nameLet = 'Jen';
 nameLet= 'jully';
console.log('nameLet', nameLet)

const nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName(){
    var petName = 'hal';
    return petName;
}
//var is functoin scoped only avaiable in block of fn
//let and const are also function scoped but they are also blocked scoped 
 const petName = getPetName();
console.log(petName);

//block scoping

var fullName = 'vivek  gaur';
let firstName;

if(fullName)
{
    firstName = fullName.split('  ')[0];
    console.log(firstName);
}

console.log(firstName);