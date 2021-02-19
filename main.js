Name_of_Student_Array = ["Chicken","Paneer","Fish"];

function Submit() {
    var name_1 = document.getElementById("name_of_the_student_1").value;
    var name_2 = document.getElementById("name_of_the_student_2").value;
    var name_3 = document.getElementById("name_of_the_student_3").value;
    var name_4 = document.getElementById("name_of_the_student_4").value;

    Name_of_Student_Array.push(name_1);
    Name_of_Student_Array.push(name_2);
    Name_of_Student_Array.push(name_3);
    Name_of_Student_Array.push(name_4);

    console.log(Name_of_Student_Array);
    document.getElementById("display_name").innerHTML=Name_of_Student_Array;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="h1";
  
    Name_of_Student_Array.sort();
    console.log(Name_of_Student_Array);
    document.getElementById("display_name").innerHTML=Name_of_Student_Array;
}
