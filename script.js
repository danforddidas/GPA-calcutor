let totalPoints = 0;
let totalCourses = 0;

function getGrade(marks) {
  if (marks >= 70) {
    return { grade: 'A', point: 5 };
  } else if (marks >= 60) {
    return { grade: 'B+', point: 4 };
  } else if (marks >= 50) {
    return { grade: 'B', point: 3 };
  } else if (marks >= 40) {
    return { grade: 'C', point: 2 };
  } else if (marks >= 34) {
    return { grade: 'D', point: 1 };
  } else {
    return { grade: 'E', point: 0 };
  }
}

function addResult() {
  const course = document.getElementById('course').value;
  const marks = parseFloat(document.getElementById('marks').value);

  if (course === '' || isNaN(marks)) {
    alert('Enter Course Name and Marks');
    return;
  }

  const result = getGrade(marks);

  totalPoints += result.point;
  totalCourses++;

  const gpa = (totalPoints / totalCourses).toFixed(2);
  document.getElementById('gpa').innerText = gpa;

  const table = document.getElementById('resultTable');

  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${course}</td>
    <td>${marks}</td>
    <td>${result.grade}</td>
    <td>${result.point}</td>
    <td><button onclick="deleteRow(this, ${result.point})">Delete</button></td>
  `;

  table.appendChild(row);

  document.getElementById('course').value = '';
  document.getElementById('marks').value = '';
}

function deleteRow(button, point) {
  button.parentElement.parentElement.remove();

  totalPoints -= point;
  totalCourses--;

  let gpa = 0;

  if (totalCourses > 0) {
    gpa = (totalPoints / totalCourses).toFixed(2);
  }

  document.getElementById('gpa').innerText = gpa;
}