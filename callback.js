function validateForm(callback) {
    setTimeout(() => {
        console.log("Form validation called");
        callback();
    }, 2000);
}

function formComplete() {
    console.log("Form validation completed");
}

validateForm(formComplete);
