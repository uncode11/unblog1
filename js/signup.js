

function signinSubmit(){
    
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let uname = document.getElementById("uname").value;
    let email = document.getElementById("email").value;
    let password =document.getElementById("pass1").value;
    let confirmpass = document.getElementById("pass2").value;
    let errmsg =document.getElementById("message");
    let regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let passregex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    let chbx = document.getElementById("form2Example3c")
 
        let msg1= document.getElementById("msg1");   
        let msg2= document.getElementById("msg2"); 
        let msg3= document.getElementById("msg3");   
        let msg4= document.getElementById("msg4"); 
        let msg5= document.getElementById("msg5");   
        let msg6= document.getElementById("msg6"); 


    
   if(fname.length == 0){
        msg1.innerText = "Enter your last name";
        msg1.style.display = "block";
        return false;
    }
    else if(  lname.length ==0 ){
        msg2.innerText = "Enter your last name";
        msg2.style.display = "block";
        return false;
    }else if(uname.length == 0){
        msg3.innerText = "Enter your prefered username";
        msg3.style.display = "block";
        return false;
    }
    

    if(email.trim()== ""){
        
        msg4.innerText = "Email field cannot be blank";
        msg4.style.display = "block";
        return false;
    }else if(!email.match(regEx)){
        msg4.innerText = "Please enter a valid email address";
        msg4.style.display = "block";
        return false;
        
    } 
     else if(password.length ==0){
        msg5.innerText = "Please enter a password";
        msg5.style.display = "block";
        return false;
    }
    else if(!password.match(passregex)){
        msg5.innerText = " Password should be minumum 8 letters, with at least a symbol, upper and lower case letters and a number"
        msg5.style.display = "block";
        return false;
    }
    else if(confirmpass == 0){
        msg6.innerText = "Confirm password"
        msg6.style.display = "block";
        return false
    }
    else if(confirmpass != password){
        msg6.innerText = "☒ Use same password"
        msg6.style.display = "block";
        return false
        
    }
    else if(!chbx.checked){
        
        alert("Clik the checkbox");
        return false
    }else{
        errmsg.style.display = "none";
        
        alert("Sign up successful");
       
        
        
        return true

    }
}





fname.addEventListener("blur", ()=>{
        if(fname.value.length==0){
            
            fname.style.borderColor="red";
            fname.style.borderWidth="4px"
            msg1.innerHTML="Enter first name."
            msg1.style.display="block";
        }})
   

    lname.addEventListener("blur", ()=>{
        if(lname.value.length==0){
            lname.style.borderColor="red";
            lname.style.borderWidth="4px"
            msg2.innerHTML="Enter last name"
            msg2.style.display="block";
        }
    })

    uname.addEventListener("blur", ()=>{
        if(uname.value.length==0){
            uname.style.borderColor="red";
            uname.style.borderWidth="4px"
           msg3.innerHTML="Enter Username"
            msg3.style.display="block";
        }
    })
    email.addEventListener("blur", ()=>{
        
        if(email.value.length==0){
            email.style.borderColor="red";
            email.style.borderWidth="4px"
            msg4.innerHTML="Enter your email id."
            msg4.style.display="block";

        }else if(!email.match(regEx)){
            
            email.style.borderColor="red";
            email.style.borderWidth="4px"
            msg4,innerHTML = "Invalid email format"
            msg4.style.display="block";

        }
    })
    password.addEventListener("blur", ()=>{
        if(password.value.length==0){
            alert("hai")
            password.style.borderColor="red";
            password.style.borderWidth="4px"
            msg5.innerHTML="Enter your password."
            msg5.style.display="block";

        }
    })
    confirmpass.addEventListener("blur", ()=>{
        if(confirmpass.value.length==0){
            confirmpass.style.borderColor="red";
            confirmpass.style.borderWidth="4px"
            fname.style.borderWidth="4px"
            msg6.innerHTML="Confirm password."
            msg6.style.display="block";

        }
    })

    function fieldClick(){
        msg1.style.display="none";
        msg2.style.display="none";
        msg3.style.display="none";
        msg4.style.display="none";
        msg5.style.display="none";
        msg6.style.display="none";
        fname.style.borderColor= null;
        fname.style.borderWidth=null;
        lname.style.borderColor= null;
        lname.style.borderWidth=null;
        uname.style.borderColor= null;
        uname.style.borderWidth=null;
        email.style.borderColor= null;
        email.style.borderWidth=null;
        password.style.borderColor= null;
        password.style.borderWidth=null;
        confirmpass.style.borderColor= null;
        confirmpass.style.borderWidth=null;
    }
    

    


    