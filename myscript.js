function loadPage(page, element) {
  let content = document.getElementById("page-content");
  let navbarTitle = document.getElementById("navbar-title");

  // Menghapus class "active" dari semua menu
  document
    .querySelectorAll(".nav-link")
    .forEach((link) => link.classList.remove("active"));
  element.classList.add("active");

  // Transisi efek loading
  content.style.opacity = 0;

  fetch(page)
    .then((response) => response.text())
    .then((data) => {
      setTimeout(() => {
        content.innerHTML = data;
        content.style.opacity = 1;
        navbarTitle.textContent = element.textContent;

        // Eksekusi ulang script halaman baru jika ada
        let scripts = content.getElementsByTagName("script");
        for (let script of scripts) {
          eval(script.innerText);
        }
      }, 300);
    })
    .catch(() => {
      content.innerHTML = "<h2>Halaman tidak ditemukan</h2>";
      content.style.opacity = 1;
      navbarTitle.textContent = "Dashboard";
    });
}
function toggleSidebar() {
  let sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");
  let navbar = document.querySelector(".navbar");
  if (sidebar.classList.contains("active")) {
    navbar.style.left = "250px";
    navbar.style.width = "calc(100% - 250px)";
  } else {
    navbar.style.left = "0";
    navbar.style.width = "100%";
  }
}
