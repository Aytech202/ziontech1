
let errorAll = document.querySelector("#errorAll");
let names = document.querySelector("#FullName");
let emailAdd = document.querySelector("#Email");
let message = document.querySelector("#Message");
let btnSubmit = document.querySelector("#btnSubmit");
let messageError = document.querySelector("#MessageError");
let telephone = document.querySelector("#tellphone");



btnSubmit.addEventListener('click', () =>{
  changeErrorText(errorAll, "");


  if (emailAdd.value === "" || names.value === "" || message.value === "" || telephone.value === "") {
   changeErrorText(errorAll,"All fields cannot be empty");
   changeColor = (errorAll);
    setTimeout(() => {
        changeErrorText(errorAll, "");
    }, 2000);
    
  }else if(message.value.length < 10)
  {
   changeErrorText(messageError,"No message fields");
   setTimeout(() => {
    changeErrorText(messageError, "");
}, 3000);
  }else {
    // process the form
    //  get the key called users if it exists and convert to an array using JSON.parse, or else create an empty array []
    let users = JSON.parse(localStorage.getItem('users')) || [];
    // to set user exist to false (initializer)
    let userExists = false;

    // to loop through all of the indexes in the users array
    for (let i = 0; i < users.length; i++) {
        // to check if the email in any of the array indexes matches with the user input
        if (users[i].email === emailAdd.value) {
            // change user Exits to true if it matches
            userExists = true;
            // stop the loop 
            break;
        }
    }

    // display an error if userExists is true
    if (userExists) {
        // changeColor(errorAll)
        // changeErrorText(errorAll, "User already Exists");
        // setTimeout(() => {
        //     changeErrorText(errorAll, "");
        // }, 3000);
        Swal.fire('Error..', 'Email already Exists', 'error');

    }else{
        // if userExists is false
        // adds the object/new value of the user input to the existing user array
        users.push({
            Email: emailAdd.value,
            Names: names.value,
            Message: message.value,
        });

        // covert the user array to a string and pass it into a localStorage key called users
        localStorage.setItem('users', JSON.stringify(users));
        Swal.fire('Thank you!!!', 'Message received successfully', 'success')
    }

    // add sweetAlert later !!!!!

    // empty all user input fields 
    emailAdd.value = "";
    names.value = "";
    message.value = "";
}


});
function changeColor(Color) {
  return Color.style.color = "red";
}
// to change the textContent 
function changeErrorText(text, value) {
  return text.textContent = value;
}
// localStorage.clear()