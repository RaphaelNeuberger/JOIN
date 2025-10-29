let users = [{ email: "junus@test.de", password: "tes123" }];

function addUser() {
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  users.push({ user: email.value, password: password.value });
  Weiterleitung zur Login Seite + Nachricht anzeigen 

  window.location.href = 'login.html?msg=Du hast dich erfolgreich registriert';
}
