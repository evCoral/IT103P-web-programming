var attempt = 3; 
function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username.toLowerCase() == "admin" && password == "1234"){
        alert ("Login successfully");
        window.location = "activityPage.html";
        return false;
    } else{
        attempt --;
        if( attempt == 0){
            alert("You don't have any attempt left, please refresh the page");
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true
        } else {
            alert("You have left "+attempt+" attempt;");
        }
        return false;
    }
}