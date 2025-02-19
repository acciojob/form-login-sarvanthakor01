function getFormvalue(event) {
    if (event) event.preventDefault(); // Prevent form submission refresh

    // Retrieve and trim values
    let firstName = document.querySelector('input[name="fname"]').value.trim();
    let lastName = document.querySelector('input[name="lname"]').value.trim();

    if (!firstName || !lastName) {
        alert("Please enter both First Name and Last Name.");
        return;
    }

    let fullName = `${firstName} ${lastName}`; // Preserve middle name in Last Name field
    alert(fullName);
}

// Attach event listener properly
document.getElementById("form1").addEventListener("submit", getFormvalue);
