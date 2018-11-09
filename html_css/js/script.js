function Read() {
    var name = document.getElementById("getName").value;
    console.log(name);
    var roll = document.getElementById("getRoll").value;
    console.log(roll);
    var admission = document.getElementById("getAdmission").value;
    console.log(admission);
    var age = document.getElementById("getAge").value;
    console.log(age);
    var op = document.getElementById("district");
    var dist = op.options[op.selectedIndex].value;
    console.log(dist);


    if(age>=18)
    {
        console.log("You are Eligible")
        alert("You are Eligible")
    }
    else{
        console.log("You are Not Eligible")
        alert("You are Not Eligible")
    }

    

}