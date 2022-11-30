function Submit()
{
    var InputUserField = document.getElementById("User");
    var InputPasswordField = document.getElementById("Password");

    var User = InputUserField.value;
    var Password = parseInt(InputPasswordField.value);

    console.log(User);
    console.log(Password);
    var HasUser = false;
    var HasPW = false;

    var UserIndex;
    var PasswordIndex;

    for (let index = 0; index < A_Usernames.length; index++) {
        const element = A_Usernames[index];
        if(User == element){
            HasUser = true;
            UserIndex = index;
        }
    }
    console.log(HasUser);
    
    for (let index = 0; index < A_Passwords.length; index++) {
        const element = A_Passwords[index];
        if(Password == element){
            HasPW = true;
            PasswordIndex = index;
        }
    }   
    console.log(HasPW);

    if(UserIndex == PasswordIndex && UserIndex != undefined && PasswordIndex != undefined){
        console.log(PasswordIndex);
        console.log(UserIndex);
        console.log("Access granted");
    }
    else{
        InputUserField.style.borderColor = "red";
        InputPasswordField.style.borderColor = "red";
        console.log("Access denied");
    }
}

const A_Usernames = ["Bao", "Hieu", "Max"]
const A_Passwords = [123, 456, 789]