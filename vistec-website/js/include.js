document.addEventListener("DOMContentLoaded", function () {
  // Navbar yükle
  fetch("navbar.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("navbar-placeholder").innerHTML = data;

      // Aktif link belirleme
      const currentPath = window.location.pathname.split("/").pop();
      const links = document.querySelectorAll(".navbar-menu a");

      links.forEach(link => {
        link.classList.remove("active"); // Önce tüm active'leri kaldır
        const href = link.getAttribute("href");

        if (
          href === currentPath ||
          (currentPath === "" && (href === "/" || href === "index.html"))
        ) {
          link.classList.add("active");
        }
      });
    });

  // Footer yükle
  fetch("footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("footer-placeholder").innerHTML = data;
    });
});

