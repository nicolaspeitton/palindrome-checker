const button = document.getElementById("check-btn")
const input = document.getElementById("text-input")
let inputValue=""
let result = document.getElementById("result")

button.addEventListener('click', ()=> {
    inputValue = input.value;
    let invertedString = inputValue
    .replace(/\s/g, '') 
    .split('')
    .filter(c => /[a-zA-Z0-9]/.test(c))
    .reverse()
    .join('');


    let word = inputValue
    .replace(/\s/g, '') 
    .split('')
    .filter(c => /[a-zA-Z0-9]/.test(c))
    .join('');


    if (inputValue===""){
    alert("Please input a value")
    } else {
        if (invertedString.toUpperCase()===word.toUpperCase()){
            result.innerText=inputValue + " is a palindrome"
        } else result.innerText=inputValue + " is not a palindrome"

    }


}); 




// const inputValue = document.getElementById("text-input").value;
// let invertedString = inputValue.split('').reverse().join('');
// invertedString = invertedString.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
// console.log(invertedString)


// if(invertedString===""){

// } else {
    

// }
