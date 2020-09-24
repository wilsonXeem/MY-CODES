let form = document.getElementById("userEntry");

function myFunction(event){
    event.preventDefault();
    
    let userName = document.getElementById("user-input").value;
    let password = document.getElementById("user-password").value;
    
    if(userName.trim().length === 0) {
        alert("Username not entered!")
        return
    }
    if(password.trim().length < 8){
        alert("Password should not be less than 8")
        return
    }
    
    let User = {
        username: userName,
        pWord: password
    }
    
    console.log(User);
    console.log("welcome " + User.username);
    
}

form.addEventListener('submit', myFunction)