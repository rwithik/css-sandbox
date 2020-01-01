// Text animation: Smooth

const smoothTextAnimator = () => {
  const textDiv = document.querySelector(".smooth-animation");

  const text = textDiv.innerText.split("");
  let spanText = "";

  text.forEach(element => {
    spanText = spanText + "<span class='fade-disabled'>" + element + "</span>";
  });
  textDiv.innerHTML = spanText;

  const spans = textDiv.querySelectorAll(".smooth-animation>span");
  spans.forEach(item => {
    item.classList.remove("fade-in");
  });

  let i = 0;
  const interval = setInterval(() => {
    spans[i].classList.add("fade-in");
    i++;
  }, 30);
};

smoothTextAnimator();

document
  .querySelector(".smooth-animation")
  .addEventListener("click", smoothTextAnimator);
