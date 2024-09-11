var inputValue = document.getElementById("input-box");
var del = document.getElementById("del");
// var history = document.getElementById("history")
// var history1 = document.getElementById("history1")
// var historyElement =   inputValue.value += num

var notAbleOnStart = ["*", "+", "/"];
var operators = ["+", "-", "*", "/","."];
// var letters = ["a","b","c","d",]

function getValue(num) {
    if (inputValue.value.replace("-", "") === "") {
        if (notAbleOnStart.includes(num)) {
        } else {
            var lastIndex = inputValue.value.slice(inputValue.value.length - 1)
            if (operators.includes(lastIndex) && operators.includes(num)) {
                inputValue.value = inputValue.value.replace(lastIndex, num)
            } else {
                inputValue.value += num
                
            }
        }
    } else {
        var lastIndex = inputValue.value.slice(inputValue.value.length - 1)
        if (operators.includes(lastIndex) && operators.includes(num)) {
            inputValue.value = inputValue.value.replace(lastIndex, num)
        } else {
            inputValue.value += num
            
        }
        
    }  

}
function clearAll() {
    inputValue.value = "";
}

function equalVal() {
    var his = inputValue.value
    inputValue.value = eval(inputValue.value);

    console.log(his)
    console.log(inputValue.value)
    document.getElementById("history").innerHTML += " "+ his;
    document.getElementById("history1").innerHTML += inputValue.value = eval(inputValue.value);
   
    
    if(inputValue.value === 'undefined'){
        inputValue.value = "";
    }

    
}

function clearGr() {
    var delVal = inputValue.value.slice(0,-1);
    // inputBox.value = inputBox.value.slice(0, -1);
    inputValue.value = delVal;
}