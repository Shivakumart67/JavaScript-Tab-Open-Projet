
const input = document.getElementById("input");
const number = document.getElementById("num");
function GotoLink(){
    for(var i  =1; i <= number.value; i++){
    window.open(input.value, '_blank');
    }
}