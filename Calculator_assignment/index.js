const buttons = Array.from(document.querySelectorAll("button"));
let display = document.querySelector(".input");
console.log(buttons);
buttons.map((data) => {
  data.addEventListener("click", function (e) {
    switch (e.target.innerText) {
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = "Error!";
        }
        break;
      case "C":
        display.innerText = "";
        break;
      default:
        display.innerText += e.target.innerText;
    }
  });
});
