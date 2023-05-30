// Listing consts where we will see changes
const password = document.querySelector("#pwd");
const eyeIcon = document.querySelector(".input-field i");
const requirementList = document.querySelectorAll(".requirements li");

// An array to set all the requirements with corresponding regEx and index of the list
const requirements = [
    {regex: /.{8,}/, index: 0}, // Minimum 8 characters length
    {regex: /[0-9]/, index: 1}, // At least 1 number
    {regex: /[a-z]/, index: 2}, // At least 1 lowecase letter
    {regex: /[A-Z]/, index: 3}, // At least 1 uppercase letter
    {regex: /[^A-Za-z0-9]/, index: 4}, // At least 1 special character
]

password.addEventListener("keyup", (e) => {
    requirements.forEach(item => {
        // Check if the input password matches the regEx requirements
        const isValid = item.regex.test(e.target.value);
        const requirementItem = requirementList[item.index];

        // Updating class and icon of each requirement item if regEx requirement matched or not
        if (isValid) {
            requirementItem.classList.add("valid");
            requirementItem.firstElementChild.className = "fa-solid fa-check";
        } else{
            requirementItem.classList.remove("valid");
            requirementItem.firstElementChild.className = "fa-solid fa-circle";
        }
    });
});

eyeIcon.addEventListener("click", () => {
    // Toggle input type between password and text
    password.type = password.type === "password" ? "text" : "password";

    // Update eye icon class based on password input type
    eyeIcon.className = `fa-solid fa-eye${password.type === "password" ? "" : "-slash"}`;
});