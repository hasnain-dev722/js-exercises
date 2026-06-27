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
// let a = prompt ("enter a number")
// let b = prompt ("enter second number")

// if(isNaN(a) && isNaN(b)){
//   throw SyntaxError("sorry this is not allowed")
// }
// let sum = parseInt(a)+parseInt(b)
// function main(){
// let x = 1;
// try{
// console.log("the sum is", sum*x)
// return false
// } catch (error) {
//  console.log('error agya bhai');
//  return true

// }
// finally{
//   console.log('files closed ha');

// }
// }
// let c = main();
// let container = document.querySelector(".container")
// let paragraph = document.querySelector(".color")
// let mybutton = document.querySelector("#btn")
// container.classList.toggle("magic-style")
// mybutton.addEventListener("click",()=>{
//    container.classList.toggle("magic-style")
// })

// let paragraph = document.querySelector(".color")
// container.innerHTML = "hasnain conatiner";
// paragraph.style.color = "green"

// let obj = {
//     a : 1,
//     b :"hasnain",
// }
// console.log(obj)

// let animal = {
//     eats : true
// };
// let rabbit = {
//     jumps: true
// };
// rabbit.__proto__ = animal;

// class Animal {
//   constructor(name) {
//     this.name= name
//     console.log("object is created...");
//   }
//   eats() {
//     console.log("kha rha hu");
//   }
//   jumps() {
//     console.log("kood rha hu");
//   }
// }
// class lion extends Animal {
//   constructor(name) {
//     super(name);
//     this.name = name;
//     console.log("object is created and he is lion...");
//   }
//   eats() {
//     super.eats()
//     console.log("kha rha hu roar");
//   }
// }
// let a = new Animal("hasnain")
// console.log(a);
// let l = new lion("shera")
// console.log(l)

// class joker{
//     constructor(name){
//         this.name = name
//     }
//     set name(newname){
//         if(newname.length<3){
//             console.log('modabana bra name likho');
            
//         }else{
//             this._name = newname;
//         }
//     }
//     get name(){
//         return this._name.toUppercase()
//     }
//     eats(){
//         console.log('gemini joker ha');
        
//     }
//     jumps(){
//         console.log('bra dimag khatii ha ');
        
//     }
// }
// class hasnain extends joker {
//     constructor(name){
//         super(name)
//         this.name= name
//     }
//     eats(){
//         console.log('hasnin genius ha');
        
//     }
//     jumps(){
//         console.log('shair ha');
        
//     }
// }
// let a = new joker("gemini")
// console.log(a);
// let b = new hasnain("ge")
// console.log(b);

async function sleep(){
   return new Promise((reslove, reject)=>{
      setTimeout(()=>{
          reslove (45)
      }, 1000);
   })
}