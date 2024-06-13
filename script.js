document.addEventListener("DOMContentLoaded", function () {
  // Inisialisasi variabel
  const containerDiv = document.querySelector(".container");
  const inputForm = document.querySelector(".input-form");

  const listContainerDiv = document.createElement("div");
  listContainerDiv.classList.add("list-container");

  const listContainerH2 = document.createElement("h2");
  listContainerH2.textContent = "DAFTAR MAHASISWA";

  const studentInformationDiv = document.createElement("div");
  studentInformationDiv.classList.add("student-information");

  const fullNameDiv = document.createElement("div");
  fullNameDiv.classList.add("full-name");
  fullNameDiv.innerText = "Nama Lengkap";

  const studentIdDiv = document.createElement("div");
  studentIdDiv.classList.add("student-id");
  studentIdDiv.innerText = "Nomor Induk Mahasiswa";

  const majorDiv = document.createElement("div");
  majorDiv.classList.add("major");
  majorDiv.innerText = "Program Studi";

  // Function untuk menambah data ke list
  function addToList() {
    const fullNameInput = document.getElementById("full-name").value;
    const studentIdInput = document.getElementById("student-id").value;
    const majorInput = document.getElementById("major").value;

    // console.log(`Nama Lengkap: ${fullNameInput}`);
    // console.log(`Nomor Induk Mahasiswa: ${studentIdInput}`);
    // console.log(`Program Studi: ${majorInput}`);
    // console.log(`\n`);

    const fullNameP = document.createElement("p");
    const studentIdP = document.createElement("p");
    const majorP = document.createElement("p");

    fullNameP.textContent = `${fullNameInput}`;
    studentIdP.textContent = `${studentIdInput}`;
    majorP.textContent = `${majorInput}`;

    fullNameDiv.appendChild(fullNameP);
    studentIdDiv.appendChild(studentIdP);
    majorDiv.appendChild(majorP);

    studentInformationDiv.appendChild(fullNameDiv);
    studentInformationDiv.appendChild(studentIdDiv);
    studentInformationDiv.appendChild(majorDiv);

    listContainerDiv.appendChild(listContainerH2);
    listContainerDiv.appendChild(studentInformationDiv);

    containerDiv.appendChild(listContainerDiv);
  }

  // Menjalankan event
  inputForm.addEventListener("submit", function (event) {
    addToList();
    event.preventDefault();
  });
});
