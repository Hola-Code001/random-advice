const getAdviceBtn = document.getElementById("get-advice");
const advice = document.querySelector(".advice");
const adviceId = document.querySelector(".advice-id");

const getAdvice = async () => {
  const url = "https://api.adviceslip.com/advice";
  const response = await fetch(url);
  const responseJson = await response.json();
  const adviceData = responseJson.slip;
  advice.textContent = `"${adviceData.advice}"`;
  adviceId.textContent = `#${adviceData.id}`;
};

getAdviceBtn.addEventListener("click", () => {
  advice.textContent = `Please Wait...`;
  adviceId.textContent = ``;
  setTimeout(() => {
    getAdvice();
  }, 1000);
});

window.onload = () => {
  advice.textContent = `Please Wait...`;
  adviceId.textContent = ``;
  setTimeout(() => {
    getAdvice();
  }, 1000);
};
