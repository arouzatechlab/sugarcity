document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("ftrYear").textContent = new Date().getFullYear();
  const backToTop = document.getElementById("ftrBackToTop");

  window.addEventListener(
    "scroll",
    function () {
      if (window.pageYOffset > 400) {
        backToTop.classList.add("ftrVisible");
      } else {
        backToTop.classList.remove("ftrVisible");
      }
    },
    { passive: true },
  );

  backToTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
