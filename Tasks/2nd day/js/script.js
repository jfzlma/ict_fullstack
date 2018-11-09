function larg() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;
    var x = parseInt(num1);
    var y = parseInt(num2);
    var z = parseInt(num3);

    if( x>y) {
        if(x>z) {
            console.log(x + "is largest");
        }
        else {
            console.log(z);
        }
    }
    else {
        if(y>z){
            console.log(y);
        }
        else{
            console.log(z);
        }
    }
}

function small() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;
    var x = parseInt(num1);
    var y = parseInt(num2);
    var z = parseInt(num3);

    if( x<y) {
        if(x<z) {
            console.log(x + "is largest");
        }
        else {
            console.log(z);
        }
    }
    else {
        if(y<z){
            console.log(y);
        }
        else{
            console.log(z);
        }
    }
}

function read() {
    var num1 = document.getElementById("op1").value;
    var num2 = document.getElementById("op2").value;
    var x = parseInt(num1);
    var y = parseInt(num2);
    var op = document.getElementById("operation");
    var operation = op.options[op.selectedIndex].value;

    if(operation == "add") {
        var res = x+y;
        console.log(res);
    }
    else if(operation == "sub") {
        var res = x-y;
        console.log(res);
    }
    else if(operation == "mul") {
        var res = x*y;
        console.log(res);
    }
    else if(operation == "div"){
        var res = x/y;
        console.log(res);
    }


    //console.log(sum);

}

