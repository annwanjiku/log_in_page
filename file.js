document.addEventListener("DOMContentLoaded",()=>{
let logIn = document.querySelector("#login")
let textInput1;
let textInput;
let myObject={};

let passwordInput = document.querySelector("#input2");
let eyeIcon = document.querySelector("#button");

eyeIcon.addEventListener("mouseenter" ,() => {
  passwordInput.type = "text";
});

eyeIcon.addEventListener("mouseleave", () => {
  passwordInput.type = "password";
});

logIn.addEventListener("click",()=>{

textInput1 =document.querySelector('#input1').value;
textInput = textInput1.toLowerCase()

if(textInput.indexOf("@")!=-1){
  myObject.Email = textInput;
}
else{
  myObject.userName =textInput;
}

myObject.password = passwordInput.value;

console.log(myObject)
let keysArray = Object.keys(myObject)
let value_of_length = keysArray.length
console.log(value_of_length)
if(value_of_length==2){
  alert("LogIn accepted!")
}
else{
  alert("Missing Login credentials")
}


});

});