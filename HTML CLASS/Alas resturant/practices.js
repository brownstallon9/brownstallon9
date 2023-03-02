// for(var i=1; i<=10; i++){
//     if(i >  5){
//         console.log('superb')
//     }
//     else if(i < 5){
//         console.log("Great!")
//     }
//     else if(i = 5){
//         console.log('Very good')
//     }
//     else{
//         console.log('bad')
//     }
// }
// Switch
// switch(num){
//     case 5:
//         console.log("even")
//     break
//     case num > 5:
//         console.log("odd")
//     break
//     case 4:
//         console.log("both")
//     break
//     default:
//     console.log("Wrong")
// }
// While Loop
// var i = 1;
// while(i<=5){
//     console.log('Good Job! ' + i)
//     i++
// }
// Do...While loop
// var i = 1;
// do{
//     console.log('Good Job! ' + i)
//     i++
// }
// while(i<=50)
// Function
// function Alas(userName){
//     console.log('Good Morning ' + userName)
// }
// Alas('Habeebullah')
// let a = 2
// Nested Function
// function outer(){
//     let b = 3
//     function inner(){
//         let c = 4
//         console.log(a , b, c)
//     } 
//     inner()
// }
// outer()
// closure
// function outer(){
//     let counter = 0
//     function inner(){
//         counter++
//         console.log(counter)
//     }
//     return inner
// }
// const fn = outer()
// fn()
// fn()
// fn()
// function sum(a, b, c){
//     return a + b + c
// }
// console.log(sum(2, 3, 5))
// function sayMyName(name){
//     console.log('My Name is ${name}' )
// }
// sayMyName('Abdulhakeem Habeebullah')
// var clothingItem = {
//     price: 50,
//     color: 'beige',
//     material: 'cotton',
//     season: 'autumn'
// }

// for( key of Object.keys(clothingItem) ) {
//     console.log(keys, ":", clothingItem[key])
// }
// function testBracketsDynamicAccess() {
//     var dynamicKey;
//     if(Math.random() > 0.5) {
//       dynamicKey = "speed";
//      }else{
//        dynamicKey = "color";
//      }
  
//       var drone = {
//         speed: 15,
//         color: "orange"
//       }
  
//       console.log(drone[dynamicKey]);
//   }
//   testBracketsDynamicAccess();
// const meal = ["soup", "steak", "ice cream"]
//     let [starter] = meal;
//     console.log(starter);
// let food = "Chocolate";
//     console.log(`My favourite food is ${food}`);
// let set = new Set();
//     set.add(1);
//     set.add(2);
//     set.add(3);
//     set.add(2);
//     set.add(1);
// let obj = {
//   key: 1,
//   value: 4
// };

// let output = { ...obj };
// output.value -= obj.key;

// console.log(output.value);
// function count(...basket) {
//   console.log(basket.length)
// }

// count(10, 9, 8, 7, 6);
function add(a, b) {
  return a + b;
}

expect(add(10, 5)).toBe(16);

