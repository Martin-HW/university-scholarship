document.getElementById("page-header").innerHTML = "University scholarships";
let studentsList = document.getElementById("students");
// document.getElementById("mytable").style.display = "none";
// if (students.length > 0) {
//   document.getElementById("mytable").style.display = "block";
// }

// let students = [
//   {
//     studentID: 20124009246,
//     firstName: "United",
//     lastName: "States",
//     gpa: 8.0,
//     scholarship: 1000,
//   },
// ];

let students = [];

function Add() {
  //   // document.getElementById("firstName").value === "" ||
  //   // document.getElementById("lastName").value === "" ||
  //   // document.getElementById("gpa").value == "0"

  let myScholarship = Number(document.getElementById("gpa").value);
  if (myScholarship > 10.0) {
    alert("The GPA must be less than 10.00");
    throw new Error("The GPA must be less than 10.00");
  } else if (myScholarship <= 6.0) {
    alert("GPA needs to be greater than 6.00 to get an scholarship");
    throw new Error("GPA needs to be greater than 6.00 to get an scholarship");
  }

  if (myScholarship === 10 || myScholarship === 10.0) {
    myScholarship = 100;
  } else if (myScholarship === 9 || myScholarship === 9.0) {
    myScholarship = 30;
  } else if (myScholarship > 9.0 && myScholarship < 10.0) {
    let one = myScholarship + "";
    let two = Number(one.slice(one.indexOf(".") + 1));
    myScholarship = 30 + two;
  } else if (myScholarship === 8 || myScholarship === 8.0) {
    myScholarship = 20;
  } else if (myScholarship > 8.0 && myScholarship < 9.0) {
    let one = myScholarship + "";
    let two = Number(one.slice(one.indexOf(".") + 1));
    myScholarship = 20 + two;
  } else if (myScholarship === 7 || myScholarship === 7.0) {
    myScholarship = 10;
  } else if (myScholarship > 7.0 && myScholarship < 8.0) {
    let one = myScholarship + "";
    let two = Number(one.slice(one.indexOf(".") + 1));
    myScholarship = 10 + two;
  } else if (myScholarship > 6.0 && myScholarship < 7.0) {
    let one = myScholarship + "";
    let two = Number(one.slice(one.indexOf(".") + 1));
    myScholarship = 0 + two;
  }

  let studentCreate = {
    studentID: new Date().getTime(),
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    gpa: document.getElementById("gpa").value,
    scholarship: myScholarship,
  };
  console.log(studentCreate);
  FetchAll(studentCreate);
}

function FetchAll(student) {
  console.log({ student });
  students = students.concat(student);
  console.log(students);
  let data = "";
  if (students.length > 0) {
    for (i = 0; i < students.length; i++) {
      data += "<tr>";
      data += "<td>" + students[i].studentID + "</td>";
      data += "<td>" + students[i].firstName + "</td>";
      data += "<td>" + students[i].lastName + "</td>";
      data += "<td>" + students[i].gpa + "</td>";
      data += "<td>" + students[i].scholarship + " " + "%" + "</td>";
      data += "</tr>";
    }
  }
  studentsList.innerHTML = data;
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("gpa").value = "";
}
