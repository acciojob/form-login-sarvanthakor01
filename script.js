function getFormvalue(event) {
    //Write your code here
    event.preventDefault(); // Prevents form from refreshing the page

    let firstName = document.querySelector('input[name="fname"]').value.trim();
    let lastName = document.querySelector('input[name="lname"]').value.trim();

    if (!firstName || !lastName) {
        alert("Please enter both First Name and Last Name.");
        return;
    }

    let fullName = `${firstName} ${lastName}`;
    alert(fullName);
}

// Attach event listener to the form
document.getElementById("form1").addEventListener("submit", getFormvalue);



