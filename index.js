// async function waitkr() {
//   return new Promise((resolve) => {
//     let randomtime = Math.random() * 6000 + 1000;
//     setTimeout(() => {
//       resolve();
//     }, randomtime);
//   });
// }
// async function starthacking() {
//   document.getElementById("container").innerHTML +=
//     "<p>intializing hacking<span class='blink-dots'>...</span></p>";
//   await waitkr();
//   document.getElementById("container").innerHTML +=
//     "<p>reading your files<span class='blink-dots'>...</span></p>";
//   await waitkr();
//   document.getElementById("container").innerHTML +=
//     "<p>password detected<span class='blink-dots'>...</span></p>";
//   await waitkr();
//   document.getElementById("container").innerHTML +=
//     "<p>sending all fils to server<span class='blink-dots'>...</span></p>";
//   await waitkr();
//   document.getElementById("container").innerHTML +=
//     "<p> clean up<span class='blink-dots'>...</span></p>";
//   await waitkr();
// }
// starthacking();

// 
let a = prompt ("enter a number")
let b = prompt ("enter second number")
if(isNaN(a) && isNaN(b)){
  throw SyntaxError("sorry this is not allowed")
}
let sum = parseInt(a)+parseInt(b)
try{
console.log("the sum is", sum*x)
} catch (error) {
 console.log('error agya bhai');
 
}
finally{
  console.log('files closed ha');
  
}