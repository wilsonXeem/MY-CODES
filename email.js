// function validateemail(){
//     var x = document.forms['myForm'].email.value;
//     var atposition = x.indexOf("@");
//     var dotposition = x.lastIndexOf(".");
//     if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length){
//         alert("please enter a valid email address");
//         return false;
//     }
// }

function validatepassword(){
    var y = document.forms['myForm'].password.value;
    var z = document.forms['myForm'].repassword.value;
    if (y !== z){
        alert("passowrd don't match");
        return false;
    }
}