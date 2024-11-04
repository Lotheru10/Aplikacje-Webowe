function validateForm() {
  let fname = document.forms["myForm"]["fname"].value;
  let lname = document.forms["myForm"]["lname"].value;
  let pesel = document.forms["myForm"]["pesel"].value;
  if (fname == "") {
    alert("Wypełnij imie");
    return false;
  }
  if (lname == "") {
    alert("Wypełnij nazwisko");
    return false;
  }
  if (pesel == "") {
    alert("Wypełnij pesel");
    return false;
  }
}

const today = new Date();

vacationStart = new Date(today.getFullYear() + 1, 6, 1, 0, 0, 0);

function updateCountdown() {
  const now = new Date().getTime();
  const timeRemaining = vacationStart.getTime() - now;

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    days + " dni " + hours + " godz. " + minutes + " min " + seconds + " sek";
}

setInterval(updateCountdown, 1000);
