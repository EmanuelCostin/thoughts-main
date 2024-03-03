// Obține elementele butoanelor și a modalului
var submitBtn = document.getElementById("submitBtn");
var modal = document.getElementById("myModal");
var closeModal = document.getElementsByClassName("close")[0];
var goBackBtn = document.getElementById("goBackBtn");

// Atașează evenimentul de click butonului "Submit!"
submitBtn.onclick = function () {
  modal.style.display = "block";
};

// Atașează evenimentul de click pentru închiderea modalului
closeModal.onclick = function () {
  modal.style.display = "none";
};

// Atașează evenimentul de click pentru butonul "Înapoi"
goBackBtn.onclick = function () {
  window.location.href = "login.html"; // Redirecționează către login.html
};


a = 1
b = 2

_ = a + b
print(_)