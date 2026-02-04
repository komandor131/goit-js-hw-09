let formData = { email: "", message: "" };
const storageKey = "feedback-form-state";

const form = document.querySelector(".feedback-form");

const rawData = localStorage.getItem(storageKey);
if (rawData) {
    formData = JSON.parse(rawData);
    form.elements.email.value = formData.email || "";
    form.elements.message.value = formData.message || "";
}

form.addEventListener("input", (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    formData[fieldName] = fieldValue;
    localStorage.setItem(storageKey, JSON.stringify(formData));
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!formData.email || !formData.message) {
        alert("Fill please all fields");
        return;
    }

    console.log(formData);
    
    localStorage.removeItem(storageKey);
    formData = { email: "", message: "" };
    form.reset();
});