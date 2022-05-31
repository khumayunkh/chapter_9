console.log('hello'.toUpperCase())

// let a = {
//     name:'Humoyun'
// }

// let y = Object.create(a)
// console.log(y) 


class Sum{
    constructor(sum){
        this.sum = sum.x * sum.y
    }
}

let sum = new Sum({
    x:5,
    y:4
})
console.log(sum) //20

class Animals{
    constructor(info){
        this.name = info.name,
        this.age = info.age,
        this.color = info.color
    }
}


let cat = new Animals({
    name:'cat',
    age: 5,
    color:'white'
})

console.log(cat)

class Dogs extends Animals{
    constructor(info){
        super(info)
        this.country = info.country
    }
    voice(){
        console.log('i am dog')
    }
}

const dog = new Dogs({
    name: 'dog',
    age:12,
    color:'black',
    country: 'uzb'
})

console.log(dog.voice()) // i am dog


class User{
    constructor(user){
        this.name = user.name,
        this.age = user.age
    }
    sayHello(){
        return `Hello ${this.name}`
    }
}

let alex = new User({
    name:"Alex",
    age:18
})
console.log(alex.sayHello().toUpperCase()) // HELLO ALEX
console.log(alex.ad ? alex.age+2 : alex.name) // Alex

class Person extends User{
    constructor(user){
        super(user)
        this.country = user.country
        this.email = user.email 
    }
    sayHello(){
        return `${this.name} from ${this.country}`  
    }
}

let humoyun = new Person({
    name:"Humoyun",
    age: 19,
    country:'UZB',
    email: 'khumoyunkh@email.com'
})
console.log(humoyun.country)
console.log(humoyun.sayHello()) // Humoyun from UZB