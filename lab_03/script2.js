function genPass() {
  const form = document.forms["myForm"];
  const min = parseInt(form["min"].value);
  const max = parseInt(form["max"].value);
  const big = form["big"].checked;
  const special = form["special"].checked;
  let base = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];
  const bigList = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
  ];
  const specialList = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "+",
  ];
  if (min > max) {
    alert("Nah.............");
    return false;
  }

  let len = Math.floor(Math.random() * (max - min)) + min + 1;

  let password = "";
  if (big) {
    base = base.concat(bigList);
  }
  if (special) {
    base = base.concat(specialList);
  }
  let baselen = base.length;
  for (let i = 0; i < len; i++) {
    let char = base[Math.floor(Math.random() * baselen)];
    password += String(char);
  }
  alert(password);
}
