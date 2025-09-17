const STORAGE_KEY = "feedback-form-state";

let formData = {
    email: "",
    message: "",
};

const form = document.querySelector(".feedback-form");


const savedData = localStorage.getItem(STORAGE_KEY);

if (savedData) {
    try {
        formData = JSON.parse(savedData);
        form.elements.email.value = formData.email || "";
        form.elements.message.value = formData.message || "";
    } catch (error) {
        console.error("Помилка читання з localStorage:", error);
    }
}


form.addEventListener("input", (event) => {
    const { name, value } = event.target;
        formData[name] = value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});


form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!formData.email.trim() || !formData.message.trim()) {
        alert("Fill please all fields");
        return;
    }

    console.log("Form Data:", formData);


    localStorage.removeItem(STORAGE_KEY);
    formData = { email: "", message: "" };
    form.reset();
});