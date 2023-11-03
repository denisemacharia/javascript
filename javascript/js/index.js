function display(){
//alert("Welcome to Our System!");
document.getElementById("heading").innerHTML="This is Javascript";
}
function hide(){
document.getElementById("heading").innerHTML="";
}

function read(){
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;

    document.getElementById("fnamevalue").innerHTML=fname;
    document.getElementById("lnamevalue").innerHTML=lname;
}