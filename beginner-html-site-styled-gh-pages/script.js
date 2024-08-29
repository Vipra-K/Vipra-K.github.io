let btn = document.querySelector("button");
let h1 = document.querySelector("h1");

if (!localStorage.getItem("name")) {
  const inp = prompt("Enter name:");
  localStorage.setItem("name", inp);
  h1.textContent = `Mozilla is cool, ${inp}`;
} else {
  let nam = localStorage.getItem("name");
  h1.textContent = `Mozilla is cool, ${nam}`;
}

function set() {
  let name = prompt("Enter your name");
  if (!name) return;
  else {
    localStorage.setItem("name", name);
    h1.textContent = `Mozilla is cool, ${name}`;
  }
}
btn.onclick = set;
