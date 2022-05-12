

var ul = document.getElementsByTagName("ul")[0];
var myList = document.getElementsByTagName("li");
var myListSpan = document.getElementsByTagName("span");

function ajout(){
    var todo = document.getElementById("todo").value;
    if(todo === "") alert ("Vous devez écrire une tâche d'abord!");  
    else {
        document.getElementById("todo").value = "";
        var li = document.createElement("li");
        li.innerHTML = todo;
        li.addEventListener("click", checked)
        var span = document.createElement("span");
        span.innerHTML += "<p class='x'>x</p>";
        span.addEventListener("click", supprimer);
        li.appendChild(span);
        ul.appendChild(li);
    }
}

function supprimer(){
    ul.removeChild(this.parentElement);
}

function checked(){
    var classLi = this.getAttribute("class");
    if(classLi === "checked") this.setAttribute("class", "unchecked");
    else this.setAttribute("class", "checked");
}

for (let i = 0; i < myList.length; i++) {
    myListSpan[i].addEventListener("click", supprimer);
    myList[i].addEventListener("click", checked);
}



