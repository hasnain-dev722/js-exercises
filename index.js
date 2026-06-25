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

let users = [
  {items: 4,totalprice: 6000,coupon: "yes" }

]
let newarray = users.map((anything)=>{
  if(anything.totalprice<=6000){
    console.log(`delivery free to you`)
  }else{
    console.log(`delivery charges rs 300`)
  }
  if(anything.coupon=== "yes",anything.items<=4){
    console.log(`you apply coupon get 50% discount`)
       anything.totalprice = 3000;
  }
  return anything;
});
console.log(newarray)