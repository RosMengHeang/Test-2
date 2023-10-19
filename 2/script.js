function submitForm() {
    var name = document.getElementById('name').value;
    var genderSelect = document.getElementById('gender');
    var gender = genderSelect.options[genderSelect.selectedIndex].text;
    var dob = document.getElementById('dob').value;
    var phonenumber = document.getElementById('ph-number').value;
    var yoe = document.getElementById('yoe').value;
    var roleSelect = document.getElementById('role');
    var role = roleSelect.options[roleSelect.selectedIndex].text;
    var cv = document.getElementById('cv').value;
    var interview = document.getElementById('interview').value;

    document.getElementById('confirmationName').innerText = name;
    document.getElementById('confirmationGender').innerText = gender;
    document.getElementById('confirmationdob').innerText = dob;
    document.getElementById('confirmationph-number').innerText = phonenumber;
    document.getElementById('confirmationyoe').innerText = yoe;
    document.getElementById('confirmationrole').innerText = role;
    document.getElementById('confirmationcv').innerText = cv;
    document.getElementById('confirmationinterview').innerText = interview;

    document.getElementById('JobConfirmation').classList.remove('hidden');
}
