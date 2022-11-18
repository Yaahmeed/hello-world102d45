
function lab7(){
    alert("Hello! Welcome to The Saffron Shoppe!");
    console.log("I am in the console.");
    let usersName = prompt("What is your name?");

    console.log("The user's name is: ", usersName);
    // document.write("Welcome to The Saffron Shoppe, " + usersName);

    let response = prompt("Do you want to buy saffron?");

    if (response == "yes") {
        alert("You've come to the right place!");
        // document.write("You've come to the right place!");
    } else if (response == "no") {
        alert("What are you doing at a saffron shoppe website?");
        // document.write("What are you doing at a saffron shoppe website?")
    } else {
        alert("I'm not sure what that means..."); 
        response = prompt("Do you want to buy saffron?")
        // document.write("I'm not sure what you mean with that response...");
    }

 


    let response2 = prompt("Do you like flowers?");
    
    if (response2 == "yes") {
        alert("Cool!");
        // document.write("You've come to the right place!");
    } else if (response2 == "no") {
        alert("why not?");
        // document.write("What are you doing at a saffron shoppe website?")
    } else {
        alert("Ok!");
        // document.write("I'm not sure what you mean with that response...");
    }
    return; 
}

lab7();









    