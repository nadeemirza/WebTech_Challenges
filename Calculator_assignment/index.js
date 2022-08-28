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
      case "del":
        display.innerText = display.innerText.slice(0, -1);
        break;
      default:
        display.innerText += e.target.innerText;
    }
  });
});
