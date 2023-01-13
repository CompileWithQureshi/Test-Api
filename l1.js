//Spread Operator it give multiple values which is stored in a variable, array 
const arr1 = [10, 20, 30]
const arr2 = [...arr1]
arr2.push(50, 40)
console.log(...arr1);
console.log(...arr2);


//Rest operator it takes mulpitel argument 
const rest = (firstNmae, ...otherDetails) => {
    otherDetails.push('age', 'Edu')
    console.log(firstNmae, otherDetails);
}

rest('Sajid', 'Qureshi', 'Male', 'Student')
console.log(rest);

//Class , Objects and Methods

class Student {
    //Constructor has the same name as the class 
    constructor(name, age) {
        console.log(`Student name is :${name} Age of the student is: ${age}`);
    }
    //prototype has user defind name
    Address(add) {
        console.log(`Student address is : ${add}`);
    }
    //Static is use for Class name 
    static Standard(std) {
        console.log(`Student class is: ${std}`);
    }
}

//Constructor
let details = new Student('Sajid', 22)
//Prototype
details.Address('Bengaluru')
//Static 
Student.Standard('BCA')

