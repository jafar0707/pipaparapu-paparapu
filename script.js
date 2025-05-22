// let a = prompt('your password')

// let users = [    {
//         id:1,
//         name:'Abdulaziz',
//         password:'0052'
//     },
//      {
//         id:2,
//         name:'Akromjon',
//         password:'0001'
//     },
//      {
//         id:3,
//         name:'Yahyo',
//         password:'2010'
//     },
//      {
//         id:4,
//         name:'Kamron',
//         password:'1100'
//     },
//      {
//         id:5,
//         name:'Jafar',
//         password:'0605'
//     }
// ]

// console.log(users);


// for(i=0; i<users.length; i++)
//     if(users[i].password==a){
//         console.log(users[i].name);
        


// }
let data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let even = [];   
let odd = [];     

for (let i = 0; i < data.length; i++) {
  if (data[i] % 2 === 0) {
    even.push(data[i]); 
  } else {
    odd.push(data[i]);  
  }
}

console.log("Чётные числа:", even);
console.log("Нечётные числа:", odd);