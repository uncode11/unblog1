

function loginSubmit(){
    const logname = document.getElementById("loguname")
    const logpassword = document.getElementById("logpass").value;
    let passregex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    let label = document.getElementsByClassName("form-label")[0];
    let check = document.getElementsByClassName("form-check-input")[0];
    var err1 =document.getElementById("logspan");
    var err2 =document.getElementById("passspan");
   

    if(logname.value.length == 0 && logpassword.length == 0){
        

        err1.innerHTML = "Enter your username.";
        err1.style.display = "block";
        err2.innerHTML = "Enter your Password.";
        err2.style.display = "block";
        return false
    }
    else if( logname.value.length == 0 ){
        
        err1.innerHTML = "Username field cannot be blank";
        err1.style.display = "block";
       
        return false
    }else if(logpassword.length == 0){
        
        
        err2.innerHTML = "Password field is blank";
        err2.style.display = "block";
        return false
    }
     else if(!logpassword.match(passregex)){
        
        
        err2.innerHTML = "Invalid password <br> (Hint: Password should be minumum 8 letters, with at least a symbol, upper and lower case letters and a number)";
        err2.style.display = "block";
        return false
    }
    else if(!check.checked){
        
        alert("Clik the checkbox")
        return false
    }
    else{
        alert("Login succesful")
        err1.style.display = "none";
        err2.style.display = "none";
        return true
    }
        


}
let err1 =document.getElementById("logspan");
let err2 =document.getElementById("passspan");

let field1 = document.getElementsByTagName("input")[0];
let field2 = document.getElementsByTagName("input")[1];

field1.addEventListener("click", ()=>{
    err1.style.display = "none";
    chbx.style.display = "none";
    return true;
})
field2.addEventListener("click", ()=>{
    err2.style.display = "none";
    chbx.style.display = "none";
    return true;
})
check.addEventListener("click", ()=>{
    err2.style.display = "none";
    chbx.style.display = "none";
    return true;
})