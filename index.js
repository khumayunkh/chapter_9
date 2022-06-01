// console.log('hello'.toUpperCase())

// // let a = {
// //     name:'Humoyun'
// // }

// // let y = Object.create(a)
// // console.log(y) 


// class Sum{
//     constructor(sum){
//         this.sum = sum.x * sum.y
//     }
// }

// let sum = new Sum({
//     x:5,
//     y:4
// })
// console.log(sum) //20

// class Animals{
//     constructor(info){
//         this.name = info.name,
//         this.age = info.age,
//         this.color = info.color
//     }
// }


// let cat = new Animals({
//     name:'cat',
//     age: 5,
//     color:'white'
// })

// console.log(cat)

// class Dogs extends Animals{
//     constructor(info){
//         super(info)
//         this.country = info.country
//     }
//     get voice(){
//         return console.log('i am dog')
//     }
// }

// const dog = new Dogs({
//     name: 'dog',
//     age:12,
//     color:'black',
//     country: 'uzb'
// })

// console.log(dog.voice) // i am dog


// class User{
//     constructor(user){
//         this.name = user.name,
//         this.age = user.age
//     }
//     get sayHello(){
//         return `Hello ${this.name}`
//     }
// }

// let alex = new User({
//     name:"Alex",
//     age:18
// })
// console.log(alex.sayHello.toUpperCase()) // HELLO ALEX
// console.log(alex.ad ? alex.age+2 : alex.name) // Alex

// class Person extends User{
//     constructor(user){
//         super(user)
//         this.country = user.country
//         this.email = user.email 
//     }
//     get sayHello(){
//         return `${this.name} from ${this.country}`  
//     }
// }

// let humoyun = new Person({
//     name:"Humoyun",
//     age: 19,
//     country:'UZB',
//     email: 'khumoyunkh@email.com'
// })

// console.log(humoyun.country)
// console.log(humoyun.sayHello) // Humoyun from UZB

// class Students extends Person{
//     constructor(user){
//         super(user)
//         this.form = user.form
//     }
//     get student(){
//         return `My name is ${this.name}. I study at ${this.form} form`
//     }
// }

// let sha = new Students({
//     name:'Sha',
//     age:18,
//     form:10,
//     country: "UZB"
// })

// console.log(sha.student) // My name is Sha. I study at 10 form
// console.log(sha.sayHello)

class Students{
    constructor(student){
        // this._name = student._name,
        this.form = student.form
        this.age = student.age
    }
    #url = 'https//khumayunkh.com'
    url(){
        return this.#url
    }
    set name(name){
        this._name = name.trim().toLowerCase()
    }
    get name(){
        return this._name +' '+ this.age
    }
    get student(){
        return this._name + ' ' + this.age + ' ' + this.form
    }
}

let humoyun = new Students({
    // _name:'Humoyun',
    age: 19,
    form: 11
})

humoyun.name = '       HUMOYUN'
console.log(humoyun.name) // humoyun 19
console.log(humoyun.url()) 
console.log(humoyun.student)
console.log(humoyun._name) // humoyun

function o(){
    return this.x + this.y
}

let obj ={
    x:4,
    y:8
}

let g = o.bind(obj)
console.log(g()) // 12

const x = (x,y) => x+y

let p = x.bind(null,3)
console.log(p(2)) // 5
