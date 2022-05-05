


var attempt = 3;

function validate(){
    var username = document.getElementById("usernameStaff").value;
    var password = document.getElementById("passwordStaff").value;
    if ( username == "Staff" && password == "Staff"){
        alert ("Login successfully");
        window.location = "admin.html";
        return false;
    }
    else{
        attempt --;
        alert("You have left "+attempt+" attempt;");
        if( attempt == 0){
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}
