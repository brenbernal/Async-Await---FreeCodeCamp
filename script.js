//Ice cream shop w/Async/Await

let stocks = {
    Fruits : ["Strawberry", "Grapes", "Banana", "Apple"],
    Liquid : ["Water", "Ice"],
    Holder : ["cone", "cup"],
    Toppings : ["Chocolate", "Sprinkles"]
}

let is_shop_open = true;

function time(ms){
    return new Promise((resolve, reject)=>{
        if(is_shop_open){
            setTimeout(resolve, ms)
        } else {
            reject(console.log("shop is closed"))
        }
    })
}

async function kitchen(){
    try{
        await time(2000)
        console.log(`${stocks.Fruits[2]} was selected`)

        await time(1000)
        console.log("Start production")

        await time(2000)
        console.log("Cutting the fruit")

        await time(1000)
        console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} added`)

        await time(1000)
        console.log("The machine started")

        await time(2000)
        console.log(`Ice cream was placed on ${stocks.Holder[0]}`)

        await time(3000)
        console.log(`${stocks.Toppings[0]} was selected for topping`)

        await time(2000)
        console.log("Ice cream is served")

    }catch(error){
        console.log("Costumer left", error)
    }finally{
        console.log("Day ended shop is closed")
    }
}

kitchen()




// Asynchronus
// console.log (" I ")
// console.log (" eat ")
// console.log (" ice cream ")
// console.log (" with a ")
// console.log (" spoon ")





//Callbacks
// function one(call_two){
//     call_two()
//     console.log('step one complete, please call step two')}

// function two(){
//         console.log('step two')}

// one(two)

// let stocks = {
//     Fruits : ["strawberry", "grapes", "banana", "apple"],
//     Liquid : ["water", "ice"],
//     Holder : ["cone", "cup", "stick"],
//     Toppings : ["chocolate", "sprinkles"]
// }

// let order = (Fruit_name, call_production) => {
//     setTimeout(()=>{
//         console.log(`${stocks.Fruits[Fruit_name]} was selected`)
//         call_production()},2000)}



//Callback hell
// let production = () => {
//     setTimeout(()=>{
//         console.log('production has started')

//         setTimeout(()=>{
//             console.log('the fruit has been chopped')

//             setTimeout(()=>{
//                 console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} was added`)

//                 setTimeout(()=>{
//                     console.log("the machine was started")
                    
//                     setTimeout(()=>{
//                         console.log(`ice cream was placed on ${stocks.Holder[0]}`)

//                         setTimeout(()=>{
//                             console.log(`${stocks.Toppings[0]} was added as toppings`)

//                             setTimeout(()=>{
//                                 console.log("serve ice cream")
//                             },2000)

//                         },3000)

//                     },1000)
//                 },1000)

//             },1000)

//         },2000)

//     },0000)
// }

// order("0",production)





//Promises
// let is_shop_open = true;

// //Resolve
// let order = (time, work) =>{
//     return new Promise((resolve, reject)=>{
//         if(is_shop_open){
//             setTimeout(()=>{
//                 resolve(work())
//             },time)} 
//         //Reject
//         else {
//             reject(console.log("Our shop is closed"))}
//     })
// }

// order(2000, ()=>console.log(`${stocks.Fruits[0]} was selected`))

// //Promise chaining
// .then(()=>{
//     return order(0000,()=>console.log("production has started"))
// })

// .then(()=>order(2000,()=>console.log("the fruit was chopped")))

// .then(()=>order(1000,()=>console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} was added`)))

// .then(()=>order(1000,()=>console.log("the machine was started")))

// .then(()=>order(2000,()=>console.log(`ice cream was placed on ${stocks.Holder[0]}`)))

// .then(()=>order(3000,()=>console.log(`${stocks.Toppings[0]} was selected`)))

// .then(()=>order(1000,()=>console.log("ice cream was served")))

// // Error handling
// .catch(()=>console.log("Customer left"))

// //The finally handler
// .finally(()=>console.log("Day ended shop is close"))



//Async/Await

// let stocks = {
//     Fruits : ["strawberry", "grapes", "banana", "apple"],
//     Liquid : ["water", "ice"],
//     Holder : ["cone", "cup", "stick"],
//     Toppings : ["chocolate", "sprinkles"]
// }

// let is_shop_open = true;

//Promise structure
// let order = ()=>{
//     return new Promise((resolve, reject)=>{
//         if(true){
//             resolve()
//         } else{
//             reject()
//         }
//    })
// }

// order()
// .then()
// .catch()
// .finally()

//Async/Await structure
// async function order (){
//     try{
//         await abc
//     }catch(error) {    
//         console.log("abc doesn't exist", error)
//         }finally {
//             console.log("runs code anyways")
//         }
// }
// order().then(()=>console.log('hi'))



//Await

// let stocks = {
//     Fruits : ["strawberry", "grapes", "banana", "apple"],
//     Liquid : ["water", "ice"],
//     Holder : ["cone", "cup", "stick"],
//     Toppings : ["chocolate", "sprinkles"]
// }

// let is_shop_open = true;


// Await word
// let topping_choice = ()=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(console.log("which topping would you like?"))
//         },3000)
//     })
// }

// async function kitchen(){
//     console.log("A")
//     console.log("B")
//     console.log("C")

//     await topping_choice()

//     console.log("D")
//     console.log("E")

// }

// kitchen()

// console.log("doing the dishes")
// console.log("cleaning the tables")
// console.log("taking others order")


