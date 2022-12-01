window.onload = function(){
    var User = localStorage.getItem("User");
    document.getElementById("txtWelcome").innerHTML += User;
    if(User == null){
        var URL = window.location.toString().replace( "Dashboard.html", "LogIn.html");
        console.log(URL);
        window.location.href = URL;
    }
    var Container = document.getElementById("div-CheckList");
    if(Container != null){
        console.log("Container not null");
        FillGrid();
    }
    else{
        console.log("Container is null");
    }
}
window.onclose = function(){
    localStorage.clear();
}

function FillGrid(){
    var Container = document.getElementById("div-CheckList");
    console.log(Container);
    //Days
    for (let index = 2; index <= 8; index++) {
        var Item = document.createElement("div");
            Item.classList.add("div-CheckList-Item");
            Item.style.gridRow = 1;
            Item.style.gridColumn = index;
            var day;
            switch(index){
                case 2: day = "Monday";
                break;
                case 3: day = "Tuesday";
                break;
                case 4: day = "Wednesday";
                break;
                case 5: day = "Thursday";
                break;
                case 6: day = "Friday";
                break;
                case 7: day = "Saturday";
                break;
                case 8: day = "Sunday";
                break;
            }
            Item.innerHTML = day;
            console.log(index + "-" + day);
            Container.appendChild(Item);
    }

    //Time
    for (let index = 2; index <= 25; index++) {
        var Item = document.createElement("div");
            Item.classList.add("div-CheckList-Item");
            Item.style.gridRow = index;
            Item.style.gridColumn = 1;
            Item.innerHTML = index - 1 + ":00";
            Container.appendChild(Item);
    }
    
    //Content
    for (let Columnindex = 2; Columnindex <= 8; Columnindex++) {
        for (let Rowindex = 2; Rowindex <= 25; Rowindex++) {
            var Item = document.createElement("div");
            Item.classList.add("div-CheckList-Item");
            Item.style.gridRow = Rowindex;
            Item.style.gridColumn = Columnindex;
            Container.appendChild(Item);
        }
        
    }
    console.log(Container);
}