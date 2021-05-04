const fields = document.querySelectorAll("input");
console.log(fields)



const button = document.querySelector("button");
const customerNameNode = fields[0];
const passwordNode = fields[1];
const confirmPasswordNode = fields[2]
const emailNode = fields[3]
const customerNode = fields[4]
const adminNode = fields[5]
const emailCheck = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const specialCharacter = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/



button.addEventListener("click", () => {
    const customerName = customerNameNode.value;
    const password = passwordNode.value;
    const confirmPassword = confirmPasswordNode.value;
    const email = emailNode.value;
    const customer = customerNode.checked;
    const admin = adminNode.checked;
    console.log(password.length)

    if (customerName != '' && password != '' && confirmPassword != '' && email != '' && ((customer == false && admin == true) || (admin == false && customer == true))) {
        if (password.match(confirmPassword) && email.match(emailCheck)) {
            if (!(password.length < 6 && password.length > 12)) {
                if (password.match(specialCharacter)) {
                    if (customer == true) {
                        window.location = 'customer.html';
                    } else if (admin == true) {
                        window.location = 'admin.html';
                    }
                }

            }
        }

    }

    if (!((password.length >= 6 && password.length <= 12) && password.match(specialCharacter) && password.match(confirmPassword) && (email.match(emailCheck)))) {
        alert('Invalid field')
    }

    if (admin == false && customer == false) {
        alert("select account type")
    }

    if (customerName == '') {
        alert("Fill all fields")
    }

})
