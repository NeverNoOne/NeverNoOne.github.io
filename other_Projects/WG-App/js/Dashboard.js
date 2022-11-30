window.onload = function(){
    var User = localStorage.getItem("User");
    document.getElementById("txtWelcome").innerHTML += User;
}