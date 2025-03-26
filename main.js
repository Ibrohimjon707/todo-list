let ul = document.querySelector("ul");
let moon = document.querySelector("#moon");
let buttonSend = document.querySelector(".send-button");
let input = document.querySelector(".input-text");
let editing = null;

buttonSend.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value === "") {
    alert("Iltimos, inputga nimadir kiriting");
    return;
  }

  if (editing) {
    editing.querySelector("p").textContent = input.value;
    editing = null;
  } else {
    let li = document.createElement("li");
    let p = document.createElement("p");
    let div = document.createElement("div");

    div.classList.add("item");
    div.innerHTML = `<i class="fas fa-pen pen"></i> <i class="fas fa-trash trash"></i>`;

    p.textContent = input.value;
    li.append(p, div);
    ul.prepend(li);

    let trash = li.querySelector(".trash");
    let pen = li.querySelector(".pen");

    trash.addEventListener("click", function () {
      li.remove();
    });

    pen.addEventListener("click", (e) => {
      input.value = p.textContent;
      input.focus();
      editing = li;
    });

    li.addEventListener("click", () => {
      p.classList.toggle("line-through");
    });
  }

  input.value = "";
});

function darkMode() {
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector("body").style.color = "white";
  document.querySelector(".input-text").style.color = "black";
  document.querySelector("#moon").style.display = "none";
  document.querySelector(".sun").style.display = "block";
  document.querySelector(".line-through").style.color = "white";
}

function lightMode() {
  document.querySelector("body").style.backgroundColor = "white";
  document.querySelector("body").style.color = "black";
  document.querySelector(".input-text").style.color = "black";
  document.querySelector("#moon").style.display = "block";
  document.querySelector(".sun").style.display = "none";
  document.querySelector("..line-through").style.color = "#25252580";
}

document.querySelector("#moon").addEventListener("click", darkMode);
document.querySelector(".sun").addEventListener("click", lightMode);

document.querySelector("#search-icon").addEventListener("click", () => {
  let allP = document.querySelectorAll("p");
  let found = false;

  for (let one of allP) {
    if (one.textContent.toLowerCase() === input.value.toLowerCase()) {
      alert("Found");
      found = true;
      break;
    }
  }

  if (!found) {
    alert("Not Found");
  }
});
