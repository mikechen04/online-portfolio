// mobile menu
var menuBtn = document.getElementById("menuBtn");
var mobileDrawer = document.getElementById("mobileDrawer");

if (menuBtn && mobileDrawer) {
  menuBtn.addEventListener("click", function () {
    var open = menuBtn.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    mobileDrawer.hidden = !open;
  });

  mobileDrawer.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      menuBtn.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
      mobileDrawer.hidden = true;
    });
  });
}

// speech bubbles
function startSpeech(el, lines, intervalMs) {
  if (!el || !lines.length) return;
  var last = -1;

  function pick() {
    var i = Math.floor(Math.random() * lines.length);
    if (lines.length > 1) {
      while (i === last) i = Math.floor(Math.random() * lines.length);
    }
    last = i;
    return lines[i];
  }

  function tick() {
    el.style.opacity = "0";
    window.setTimeout(function () {
      el.textContent = pick();
      el.style.opacity = "1";
    }, 160);
  }

  el.style.transition = "opacity 160ms ease";
  el.style.opacity = "1";
  el.textContent = pick();
  window.setInterval(tick, intervalMs);
}

startSpeech(
  document.getElementById("speechMine"),
  ["hi celybi", "meow", "i love u", "wruff", "celybi", "selling bee"],
  2500
);

startSpeech(
  document.getElementById("speechTheirs"),
  [">rs", ">c", "meow", "awruff", "im gay", ">~<"],
  2800
);
