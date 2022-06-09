
function showDiv() {
    document.getElementById('add_cont').style.display = "block";
}

document.querySelector('#add_student').addEventListener('click',function () {
    const nameInput = document.querySelector('#nameInput');
    const surnameInput = document.querySelector('#surnameInput');
    const idInput = document.querySelector('#IDInput');
    const dateInput = document.querySelector('#dateInput');
    const depInput = document.querySelector('#depInput');
    const emailInput = document.querySelector('#emailInput');
    const genderInput = displayRadioValue();

    const dob = null;
    if(isOver17(dateInput.value == true)){
        addStudent(nameInput.value,surnameInput.value,idInput.value,dateInput.value,depInput.value,emailInput.value,genderInput.value);}

    });


function addStudent(name,surname,studentID,DOB,gender,email,department){
    const entryDiv = document.createElement('div')
    entryDiv.className = 'student'

    const nameDiv = document.createElement('div');
    nameDiv.className = 'name';
    nameDiv.textContent = name;

    const surnameDiv = document.createElement('div');
    surnameDiv.className = 'surname';
    surnameDiv.textContent = surname;

    const stdIdDiv = document.createElement('div');
    stdIdDiv.className = 'studentId';
    stdIdDiv.textContent = studentID;

    const dateDiv = document.createElement('div');
    dateDiv.className = 'dob';
    dateDiv.textContent = DOB;

    const genderDiv = document.createElement('div');
    genderDiv.className = 'gender';
    genderDiv.textContent = gender;

    const emailDiv = document.createElement('div');
    emailDiv.className = 'email';
    emailDiv.textContent = email;

    const departmentDiv = document.createElement('div');
    departmentDiv.className = 'department';
    departmentDiv.textContent = department;

    entryDiv.append(nameDiv);
    entryDiv.append(surnameDiv);
    entryDiv.append(stdIdDiv);
    entryDiv.append(dateDiv);
    entryDiv.append(genderDiv);
    entryDiv.append(genderDiv);
    entryDiv.append(emailDiv);

    document.querySelector('#student_list').append(entryDiv);

    }

function displayRadioValue() {
    var ele = document.getElementsByName('gender');

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            return ele[i];
    }
}
    function isOver17(dateOfBirth) {
        const date17YrsAgo = new Date();
        date18YrsAgo.setFullYear(date18YrsAgo.getFullYear() - 17);
        return dateOfBirth <= date18YrsAgo;
    }


