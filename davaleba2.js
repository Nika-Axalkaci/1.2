// const arr = [
//   {
//     name: "Temo",
//     age: 25,
//   },
//   {
//     name: "Lasha",
//     age: 21,
//   },
//   {
//     name: "Ana",
//     age: 28,
//   },
// ];
// function user() {
//   let smallest = arr[0].age;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].age < smallest) {
//       return (smallest = arr[i].age);
//     }
//   }
// }
// console.log(user());

// const user = {
//   name: "nika",
//   lastname: "axalkaci",
//   age: 19,
// };

// function nObject(user) {
//   const vallues = {};
//   if (user.name) {
//     vallues.name = user.name;
//   }
//   if (user.lastname) {
//     vallues.lastname = user.lastname;
//   }
//   if (user.age) {
//     vallues.age = user.age;
//   }

//   return vallues;
// }

// console.log(nObject(user));

function randomInt(){
  return Math.floor(Math.random()*11)
}

let winner = null
while(winner === null){
  const a = randomInt()
  const b = randomInt()
  if(a === 3){
    winner = "A"
  }
  else if(b ===3){
    winner = "B"
  }
}
console.log("Winner: " + winner) 