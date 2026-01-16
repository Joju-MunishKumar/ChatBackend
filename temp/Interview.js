// import { useSyncExternalStore } from "react"

// User .aggregate([
//     {
//         $match : {_id : new mongoose.Types.ObjectID(userID)}
//     }
// ])





// db.user.aggregate([
//     {
//         _id : "$role",
//         count : {$sum : 1}
//     }
// ])



// // {
// //   "_id": { "role": "admin", "city": "Delhi" },
// //   "count": 2
// // }


// db.users.aggregate([
//     {
//         $group : {
//         _id : null, //sab documents ek hi group mein 
//         totalAmount : { $sum : "$amount"}
//         }
//     }
// ])


// db.users.aggregate([
//     {
//         $group : {
//             _id : null ,
//             average : {$avg : '$age'}
//         }
//     }
// ])



// db.users.aggregate([
//     {
//         $group : {
//             _id : "$role",
//             totalUsers : {$sum : 1}
//         }
//     }, 
//     $sort : {totalUsers : -1}
// ])


// reverse a String
// let str = "manu"
// let rev = ''
// for( let i = str.length - 1 ; i >=0; i--){
//     rev += str[i]; 

// }
// console.log(rev)


// function isPrime(num){
//     if(num <= 1) return false ; 

//     for( let i = 2; i < num ; i++){
//         if(num % i === 0) return false ; 
//     }
//     return true;
// }


// function dup(arr){
//     return arr.filter((item,index)=>{
//         arr.indexof(item) !== index
//     })
// }


// counts of string 
let str = 'hello my name is munish'.replace(/\s/g,"")
let res = {}
for (let char of str){
   res[char] = (res[char] || 0) + 1 
}
console.log(res)