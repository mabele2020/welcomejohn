document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    
    if (!name || !email) {
        alert("All fields are required!");
        return;
    }
    
    let formData = { name, email };
    
    fetch("YOUR_APPS_SCRIPT_URL", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => response.json())
    .then(data => {
        document.getElementById("responseMessage").innerText = "Submitted successfully!";
    })
    .catch(error => console.error("Error:", error));
});