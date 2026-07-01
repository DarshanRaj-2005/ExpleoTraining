function validate() {
    let fullname = document.getElementById("fullname");
    let email = document.getElementById("email");
    let date = document.getElementById("date");
    let course = document.getElementById("course");

    let errorFullname = document.getElementById("error-fullname");
    let errorEmail = document.getElementById("error-email");
    let errorDate = document.getElementById("error-date");
    let errorCourse = document.getElementById("error-course");

    let valid = true;

    if (fullname.value === "") {
        errorFullname.textContent = "Full Name not be null";
        errorFullname.style.color = "red";
        valid = false;
    } else {
        errorFullname.textContent = "";
    }
    if (!email.value.includes("@") || !email.value.endsWith(".com")) {
        errorEmail.textContent = "Email must contain '@' and end with '.com'";
        errorEmail.style.color = "red";
        valid = false;
    } else {
        errorEmail.textContent = "";
    }
    if (date.value) {
        let dob = new Date(date.value);
        let today = new Date();
        let age = today.getFullYear() - dob.getFullYear();
        let m = today.getMonth() - dob.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
            age--;
        }
        if (age < 17) {
            errorDate.textContent = "You must atleast 17 years old";
            errorDate.style.color = "red";
            valid = false;
        } else {
            errorDate.textContent = "";
        }
    } else {
        errorDate.textContent = "select your Date of Birth";
        errorDate.style.color = "red";
        valid = false;
    }
    if (course.value === "") {
        errorCourse.textContent = "select a course";
        errorCourse.style.color = "red";
        valid = false;
    } else {
        errorCourse.textContent = "";
    }

    return valid; 
}

