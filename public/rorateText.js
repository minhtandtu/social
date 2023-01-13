// Text Circle
console.log("Rotate Text");
let textArray = document
  .querySelector(".text-circle")
  .innerHTML.split("")
  .map(
    (item, index) =>
      `<span style="transform:rotate(${
        index * 13
      }deg)" key=${index} >${item}</span>`
  )
  .join("");
document.querySelector(".text-circle").innerHTML = textArray;
