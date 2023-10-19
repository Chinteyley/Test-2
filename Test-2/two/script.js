function submitForm() {
    // Get form values
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var address = document.getElementById('address').value;
    var phonenumber = document.getElementById('ph').value;
    var sub = document.getElementById('sub').value;
    var exp = document.getElementById('exp').value;
    var edu = document.getElementById('edu').value;
    var interview = document.getElementById('interview').value;

    // Get selected values for gender and jobs
    var genderSelect = document.getElementById('gender');
    var gender = genderSelect.options[genderSelect.selectedIndex].value;

    var jobsSelect = document.getElementById('jobs');
    var jobs = jobsSelect.options[jobsSelect.selectedIndex].value;

    // Display enrollment confirmation
    document.getElementById('confirmationName').innerText = name;
    document.getElementById('confirmationAge').innerText = age;
    document.getElementById('confirmationGender').innerText = gender;
    document.getElementById('confirmationAddress').innerText = address;
    document.getElementById('confirmationPhonenumber').innerText = phonenumber;
    document.getElementById('confirmationsub').innerText = sub;
    document.getElementById('confirmationexp').innerText = exp;
    document.getElementById('confirmationedu').innerText = edu;
    document.getElementById('confirmationjobs').innerText = jobs;
    document.getElementById('confirmationinterview').innerText = interview;

    // Show enrollment confirmation section
    document.getElementById('JobConfirmation').classList.remove('hidden');
}
