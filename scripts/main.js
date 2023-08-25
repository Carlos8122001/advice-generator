const API = `https://api.adviceslip.com/advice??`;
const advice_id = document.getElementById("advice_id");
const advice_text = document.getElementById("advice_text");
const advice_button = document.getElementById("advice_button");

if (advice_id.textContent === "") {
  advice_text.textContent = `Please click for advice
`;
}

const getAdvice = () => {
  fetch(API)
    .then((response) => response.json())
    .then((data) => {
      advice_id.textContent = ` ADVICE # ${data.slip.id}`;
      advice_text.textContent = `${data.slip.advice}`;
    })
    .catch((error) => console.log(error));
};

advice_button.addEventListener("click", () => {
  getAdvice();
});
