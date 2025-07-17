const staticText = 'Desenvolvedor ';
const dynamicTexts = [
  '<span class="blue-text">Web</span>',
  '<span class="blue-text">Front-End</span>'
];

let currentTextIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
const typeSpeed = 150;
const deleteSpeed = 75;
const delayBetweenTexts = 1500;

const typewriterElement = document.getElementById("typewriter");

function stripHTML(html) {
  let div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
}

function type() {
  const currentDynamicText = dynamicTexts[currentTextIndex];
  const plainDynamicText = stripHTML(currentDynamicText);

  if (!isDeleting) {
    currentCharIndex++;
    let html = staticText;
    let count = 0;
    for (let i = 0; i < currentDynamicText.length; i++) {
      if (currentDynamicText[i] === "<") {
        let endTag = currentDynamicText.indexOf(">", i);
        html += currentDynamicText.substring(i, endTag + 1);
        i = endTag;
      } else {
        if (count < currentCharIndex) {
          html += currentDynamicText[i];
          count++;
        } else {
          break;
        }
      }
    }
    typewriterElement.innerHTML = html;
    if (currentCharIndex === plainDynamicText.length) {
      isDeleting = true;
      setTimeout(type, delayBetweenTexts);
      return;
    }
  } else {
    currentCharIndex--;
    let html = staticText;
    let count = 0;
    for (let i = 0; i < currentDynamicText.length; i++) {
      if (currentDynamicText[i] === "<") {
        let endTag = currentDynamicText.indexOf(">", i);
        html += currentDynamicText.substring(i, endTag + 1);
        i = endTag;
      } else {
        if (count < currentCharIndex) {
          html += currentDynamicText[i];
          count++;
        } else {
          break;
        }
      }
    }
    typewriterElement.innerHTML = html;
    if (currentCharIndex === 0) {
      isDeleting = false;
      currentTextIndex = (currentTextIndex + 1) % dynamicTexts.length;
    }
  }
  setTimeout(type, isDeleting ? deleteSpeed : typeSpeed);
}

document.addEventListener("DOMContentLoaded", function () {
  typewriterElement.innerHTML = staticText;
  type();
});
