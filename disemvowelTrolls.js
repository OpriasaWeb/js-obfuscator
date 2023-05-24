// ------------- Author: Jeremy Opriasa ------------ //
function disemvowel(str) {

  var removeVowel = '';
  var vowelRegex = /[aeiou]/i;
  
  for(let i = 0; i < str.length; i++){
//     first if approach:
    if(!str[i].match(vowelRegex)){
      removeVowel += str[i];
    }
  }
  return removeVowel; 
}
  
// ------------------- //
//     second if approach:
//     if(str[i].match(vowelRegex)){
//       continue;
//     } else{
//       removeVowel += str[i];
//     }
// ------------------- //
  

console.time();
// console.log(disemvowel("aeiou"));
console.log(disemvowel("This website is for losers LOL!"));
console.timeEnd();

// ------------- Author: Jeremy Opriasa ------------ //


// ------------- Others code - best practices ------------ //

// function disemvowel(str) {
//   return str.replace(/[aeiou]/gi, '');
// }

// ------------- Others code - best practices ------------ //