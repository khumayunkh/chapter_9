console.log('hello'.toUpperCase())

// let a = {
//     name:'Humoyun'
// }

// let y = Object.create(a)
// console.log(y) 


class Animals{
    constructor(name, age, color){
        this.name = name,
        this.age = age,
        this.color = color
    }
}


let cat = new Animals('cat', 5, 'black')
console.log(cat.name) //cat

dog = new Animals('dog', 3, 'silver')
console.log(dog)