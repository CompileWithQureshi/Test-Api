//Call,Apply and Bind

const student = {
    firstName: 'Sajid',
    lastName: 'Qureshi',
    age: 22,


}

const teacher = {
    firstName: 'Said',
    lastName: 'Happy',
    age: 20,
}

function getEmail(params) {
    return this.email = `${this.firstName}.${this.lastName}@test.mail`

}
function addSubject(...data) {
    return this.subject = data
}
console.log(getEmail.call(student));//Call use to call the funcion with object data in it
console.log(addSubject.apply(student, ['Math', 'English', 'Science']));//Apply is to add additional data to object 

let bindData = getEmail.bind(teacher)()

console.log(bindData);


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

//Inhertance in Class which shares its methods to another class
//Based class
class Employee {
    constructor(pos, name, salary) {
        this.pos = pos,
            this.name = name,
            this.salary = this.salary
        console.log(`Empeloyee name: ${name} Empeloyee position is: ${pos} Empeloyee Salary is: ${salary}`);
    }
}

let empeloyeeDeatils = new Employee('HR', 'Sajid', 25000)

//Derived Class and we need to use super if there is  a constructore in base class
class NewCommers extends Employee {
    constructor() {
        super(...data)
        console.log(`We are new commers: ${data}`);
    }
}
let data = ['Staff', 'Qureshi', 15000]
let b = new NewCommers()


//Promises 

//Compelete will give us boolean value
let compelete = true
const promise = new Promise((resolve, reject) => {

    // If its is true resolve:Sucessfull
    if (compelete) {
        resolve('Sucessfull')
    } else {

        //If its false reject:Failed
        reject('Failed')
    }

})

console.log(promise);

//Promise exer2
let url = 'https://jsonplaceholder.typicode.com/todos/2'

let pros = (link) => {
    return new Promise((resolve, reject) => {
        try {
            resolve(fetch(link).then(res => res.json()).then(data => console.log(data)))

        } catch (error) {

            reject(e => console.log(e))
        }
    })
}
pros(url)

//Promise all 

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(`The first promise has resolved`);
        resolve(10)
    }, 1 * 1000)
})
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(`The secound promise has resolved`);
        resolve(10)
    }, 2 * 1000)
})
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(`The third promise has resolved`);
        resolve(10)
    }, 3 * 1000)
})
let p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(`The foruth promise has resolved`);
        resolve(10)
    }, 4 * 1000)
})

Promise.all([p1, p2, p3, p4]).then(result => console.log(result)).catch(e => console.error(e))

//Async and await ES6

const Test = async () => {
    console.log(`2 :Message`);
    console.log(`3 :Message`);
    console.log(`4 :Message`);
    await fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json()).then(json => console.log(json)).catch(e => console.log(e))
    console.log(`6 :Message`);

}

console.log(`1 :Message`);
Test()
console.log(`7 :Message`);

//Asycn and awit short hand 

let Test2 = async () => {
    return (await fetch('https://jsonplaceholder.typicode.com/todos/3')).json()
}
Test2().then(res => console.log(res)).catch(e => console.error(e))

//Symbol data-type

let x = Symbol('Hello')
let y = Symbol('Hello')

let typex = typeof (x.toString())
let typey = typeof (y.description)
let type = typeof (y.valueOf(typex))



console.log(x);
console.log(y);
console.log(typex);
console.log(typey);
console.log(type);

//Itearotrs

var fruits = ['Apple', 'Orange', 'Grapes']
//While loop
let i = 0
while (i < fruits.length) {

    console.log(fruits[i]);
    i++
}
console.log(fruits);

//Do while
let j = 0
do {
    console.log(fruits[j]);
    j++
} while (j < fruits.length);

//For loop 

let k = 0
for (k = 0; k < fruits.length; k++) {
    console.log(fruits[k]);
}

//For each
fruits.forEach(element => {
    console.log(element);
});

//For of 
for (const fruit of fruits) {
    console.log(fruit);
}
//For in
for (const fruit in fruits) {
    if (Object.hasOwnProperty.call(fruits, fruit)) {
        const element = fruits[fruit];
        console.log(element);
    }
}
//For map

fruits.map((fruit) => {
    console.log(fruit);
})


//Iterators
let itr = fruits[Symbol.iterator]()
console.log(itr.next().value);
console.log(itr.next().done);
console.log(itr.next().value);

//Generators we use in the function as * and there is a property as yeild which means pause

function* test() {
    console.log("First");
    yield 'First'
    console.log("Sec");
    yield 'Secound'


}

let g = test()
console.log(g.next());
console.log(g.next());
console.log(g.next());



//Curring= When a function takes all arrgument once. in curring it takes one argument and give another function it goes on it all arrgument executed.
const curring = (x) => {
    return y => {
        return z => x + y + z
    }
}
console.log(curring(1)(1)(1));


//Bind the data which is used later if we want to


