/* ----------------- keep the valid input, show the invalid errors ------------------*/
function submitForm2(event) {
    event.preventDefault()
    let inputs = document.getElementById("my-info").elements
    let all_valid = true
    for (let x = 0; x < inputs.length - 1; x++) {
        valid = inputs[x].checkValidity()
        inputs[x].removeAttribute('placeholder')
        all_valid = all_valid && valid
        if (!valid) {
            inputs[x].value = ""
        }
    }
    if (all_valid) {
        alert("submitted!")

    } else {
        alert("bad format")
    }
    return false
}

/* ------------ agreeToTerms btn toggle with submit Btn -----------*/
const agree = document.getElementById("agree")
const submitBtn = document.getElementById("submitBtn")

function toggleSubmit() {
    if (agree.checked) {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
}
