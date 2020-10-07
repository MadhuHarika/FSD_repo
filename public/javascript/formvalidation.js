function validName() {
    var name=document.getElementById("todoname").value;
    console.log(name);
    if (name == "") {
        alert("Name of the ToDo can't be empty");
    } else if (name.length < 5) {
        alert("Name of the ToDo can't be less than 5 characters")
    }
    else{
        alert("ToDo Name is accepted");
    }
}

function validId() {
    var x = document.getElementById("todoid").value;
    if (isNaN(x)) {
        alert("ToDo Id can be numbers only");
    } else {
        alert("ToDo Id is accepted");
    }
}

function successMsg(){
    alert("Added data successfully");
}