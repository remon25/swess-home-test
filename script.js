var students = [];

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function generateCode(){
    let newCode = getRandomArbitrary(10000, 99999);
    elementById("code_value").innerText = newCode;
}

generateCode();

function isArabic (string) {
    let def = 0;
    let ar = 0;
  
    string.split('').forEach(i => /[\u0600-\u06FF]/.test(i) ? (ar++) : (def++))
  
    return ar >= def
  }

function validateUserName() {
    let user_name = document.getElementById("user_name").value;
    let index = user_name.indexOf('_');
    if(index == -1) {
        return false;
    } else {
        first_part = user_name.substr(0,index);
        last_part = user_name.substr(index + 1);
        if(first_part == "" || last_part == "") {
            return false;
        }
        if(first_part[0] != first_part[0].toUpperCase()) {
           return false;
        }
    }
    return true;
}

function validateStudentName() {
    let student_name = document.getElementById("student_name").value;
    let index = student_name.indexOf(' ');
    var arabic = /[\u0600-\u06FF]/;
    if(index == -1) {
        return false;
    } else {
        let first_part = student_name.substr(0, index);
        let last_part = student_name.substr(index + 1);
        if(first_part == "" || last_part == "") {
            return false;
        }
        if(!isArabic(first_part) || !isArabic(last_part)){
            return false;
        }
    }
    return true;
}

function elementById(id){
    return document.getElementById(id);
}

function requiredFields(fields = []){
    let notVailedFields = [];
    for(let i in fields){
        let field = fields[i];
        if(field.value == ''){
            notVailedFields.push(field);
        }
    }
    return notVailedFields.length == 0;
}

function validate(){
    let user_name = elementById("user_name")
    let student_name = elementById("student_name")
    let birth_date = elementById("birth_date")
    let programNameInput = elementById("programNameInput")
    let mobile = elementById("mobile")
    let code = elementById("code")
    if (!requiredFields([user_name,student_name,birth_date,programNameInput,mobile,code])){
        return {
            vaild: false,
            message: "fields are requred"
        }
    }

    let code_value = elementById("code_value").innerText;
    if(code.value != code_value){
        return {
            vaild: false,
            message: "code is not correct"
        }
    }
    if(!validateUserName()){
        return {
            vaild: false,
            message: "Username is not vailed."
        }
    }
    if(!validateStudentName()){
        return {
            vaild: false,
            message: "Student Name is not vailed, bust be two arabic parts."
        }
    }
    return true;
}

function getCurrentIndex(){
    let table = elementById("displayTable");
    return table.children[0].children.length;

}

function appendData(){
    let validationValue = validate();
    if (validationValue == true){
        let user_name = elementById("user_name").value;
        let student_name = elementById("student_name").value;
        let programNameInput = elementById("programNameInput").value;
        students.push({
            No: getCurrentIndex(),
            Username: user_name,
            BDate: elementById("birth_date").value,
            Name: elementById("student_name").value,
            Program: elementById("programNameInput").value,
            Mobile: elementById("mobile").value
        });
        let row = `
        <tr>
            <td>${getCurrentIndex()}</td>
            <td>${user_name}</td>
            <td>${student_name}</td>
            <td>${programNameInput}</td>
        </tr>`;
        let table = elementById("displayTable").getElementsByTagName('tbody')[0];
        var newRow = table.insertRow(table.rows.length);
        newRow.innerHTML = row;
    }else{
        alert(validationValue.message);
    }
}

function toJSON(){
    elementById("JSONtable").value = JSON.stringify(students, 0, 2);
}