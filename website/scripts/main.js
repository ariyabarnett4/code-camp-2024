var email = prompt("Enter your email:");

function checkEmail() {
if ( Email.length < 1) {
    alert("E-mail cannot be blank. Try again!");
} else {
alert("Thanks! We will spam you at " + email);
}
}

checkEmail ();