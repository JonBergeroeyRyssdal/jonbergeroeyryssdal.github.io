const phrases = ["Web Developer", "Backend Student", "Tech Enthusiast"];
let i = 0,
  j = 0,
  current = [],
  isDeleting = false;

function loop() {
  if (!isDeleting && j < phrases[i].length) {
    current.push(phrases[i][j++]);
  } else if (isDeleting && j > 0) {
    current.pop();
    j--;
  }

  // Only delay after full word is typed
  if (j === phrases[i].length && !isDeleting) {
    isDeleting = true;
    setTimeout(loop, 1000);
    document.getElementById("typed-text").innerHTML = current.join("");
    return;
  } else if (j === 0 && isDeleting) {
    isDeleting = false;
    i = (i + 1) % phrases.length;
  }

  document.getElementById("typed-text").innerHTML = current.join("");
  setTimeout(loop, isDeleting ? 50 : 100);
}

loop();
