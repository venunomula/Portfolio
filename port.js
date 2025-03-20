document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".form").addEventListener("submit", function (event) {
        event.preventDefault(); // ✅ Prevents page reload

        let nameInput = document.getElementById("i1");
        let emailInput = document.getElementById("i2");
        let messageInput = document.getElementById("i3");

        let name = nameInput.value.trim();
        let email = emailInput.value.trim();
        let message = messageInput.value.trim();

        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }

        // ✅ Store in localStorage
        let messages = JSON.parse(localStorage.getItem("messages")) || [];
        messages.push({ name, email, message });
        localStorage.setItem("messages", JSON.stringify(messages));

        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";

        console.log("Messages saved to local storage");
        alert("Message saved successfully!");
    });
});














  