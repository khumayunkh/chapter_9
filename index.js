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