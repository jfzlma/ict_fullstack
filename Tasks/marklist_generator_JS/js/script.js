function calGrade(percent){
    document.documentElement.scrollTop = 300;
    var grade;
    if(percent>=90)
    {
        grade='S';
    }
    else if(percent>=80)
    {
        grade='A'
    }
    else if(percent>=70)
    {
        grade='B'
    }
    else if(percent>=60)
    {
        grade = 'C'
    }
    else if(percent>=50)
    {
        grade = 'D'
    }
    else{
        grade = 'F'
    }

    return grade;
    
}

function generate() {
    var name = document.getElementById("name").value;
    var regnum = document.getElementById("regNum").value;
    var sem1 = document.getElementById("sem")
    var sem = sem1.options[sem1.selectedIndex].text;
    var sub1 = document.getElementById("sub1").value;
    var mark1 = document.getElementById("mark1").value;
    var total1 = document.getElementById("total1").value;

    var sub2 = document.getElementById("sub2").value;
    var mark2 = parseInt(document.getElementById("mark2").value);
    var total2 = parseInt(document.getElementById("total2").value);

    var sub3 = document.getElementById("sub3").value;
    var mark3 = parseInt(document.getElementById("mark3").value);
    var total3 = parseInt(document.getElementById("total3").value);

    var sub4 = document.getElementById("sub4").value;
    var mark4 = parseInt(document.getElementById("mark4").value);
    var total4 = parseInt(document.getElementById("total4").value);

    per1 = (mark1/total1)*100;
    per2 = (mark2/total2)*100;
    per3 = (mark3/total3)*100;
    per4 = (mark4/total4)*100;

    var grade1 = calGrade(per1);
    var grade2 = calGrade(per2);
    var grade3 = calGrade(per3);
    var grade4 = calGrade(per4);

    var status='Pass';
    if( (grade1 || grade2 || grade3 || grade4) =='F')
        {
            status = 'Fail'
        }
    else{
        status = 'Pass'
    }

    document.getElementById("getName").innerHTML=name;
    document.getElementById("getRegNum").innerHTML=regnum;
    document.getElementById("getSem").innerHTML=sem;

    document.getElementById("getSub1").innerHTML=sub1;
    document.getElementById("getMark1").innerHTML=mark1;
    document.getElementById("getTotal1").innerHTML=total1;
    document.getElementById("getGra1").innerHTML=grade1;

    document.getElementById("getSub2").innerHTML=sub2;
    document.getElementById("getMark2").innerHTML=mark2;
    document.getElementById("getTotal2").innerHTML=total2;
    document.getElementById("getGra2").innerHTML=grade2;


    document.getElementById("getSub3").innerHTML=sub3;
    document.getElementById("getMark3").innerHTML=mark3;
    document.getElementById("getTotal3").innerHTML=total3;
    document.getElementById("getGra3").innerHTML=grade3;
   
    document.getElementById("getSub4").innerHTML=sub4;
    document.getElementById("getMark4").innerHTML=mark4;
    document.getElementById("getTotal4").innerHTML=total4;
    document.getElementById("getGra4").innerHTML=grade4;
    
    document.getElementById("getStatus").innerHTML=status;
    
    
}
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }