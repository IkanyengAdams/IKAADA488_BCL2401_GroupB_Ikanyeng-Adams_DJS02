const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  result.innerText = dividend / divider;

  //validation when values are missing
if (!dividend || !divider) {
  result.innerText = "Division not performed. Both values are required in inputs. Try again"; 
  return;
}

//Providing anything that is not a number should crash the program
if (isNaN(dividend) || isNaN(divider)) {
  document.body.innerHTML = "Something critical went wrong. PLease reload the page";
  console.error("Invalid input provided");
  return
}

});

