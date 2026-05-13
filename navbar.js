document.addEventListener("DOMContentLoaded", () => {
  const navbheader = document.getElementById("navbheader");
  const navbtopbar = document.getElementById("navbtopbar");
  const navbhamburgerbtn = document.getElementById("navbhamburgerbtn");
  const navbmobilemenu = document.getElementById("navbmobilemenu");
  const navbclosebtn = document.getElementById("navbclosebtn");
  const navbmobileitems = document.querySelectorAll(".navbmobileitem");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      navbheader.classList.add("navbsticky");
      navbtopbar.classList.add("navbsticky-topbar-hide");
      navbheader.style.top = "0";
    } else {
      navbheader.classList.remove("navbsticky");
      navbtopbar.classList.remove("navbsticky-topbar-hide");
      // Only apply top offset on mobile when not sticky
      if (window.innerWidth < 1024) {
        navbheader.style.top = "35px";
      } else {
        navbheader.style.top = "0";
      }
    }
  });

  navbhamburgerbtn.addEventListener("click", () => {
    navbmobilemenu.classList.add("navbactive");
    document.body.classList.add("navbnoscroll");
  });

  const closeMenu = () => {
    navbmobilemenu.classList.remove("navbactive");
    document.body.classList.remove("navbnoscroll");
  };

  navbclosebtn.addEventListener("click", closeMenu);
  navbmobileitems.forEach((item) => item.addEventListener("click", closeMenu));
});
