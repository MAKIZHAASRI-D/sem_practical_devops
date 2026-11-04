const form = document.getElementById("devops-form");

function handleSubmit(event) {
    event.preventDefault();
    document.getElementById("index").textContent = "Form submitted successfully";
}

form.addEventListener("submit", handleSubmit);