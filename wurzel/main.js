var input = 0;
var digits = 0;
var output = []

function getinput() {
    input = document.querySelector('input').value;
}
function getdigits() {
    digits = document.querySelector('input').value;
}
function onclick() {
    
}

function wurzel() {
    for(let i=0;i<input;i++){
        if(sqr(i) > input){
           break; 
        }
        i
    }
}
function sqr(number){
    return number * number;
}