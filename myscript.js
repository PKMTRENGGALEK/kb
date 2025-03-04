function loadPage(page, element) {
  let content = document.getElementById("page-content");
  let navbarTitle = document.getElementById("navbar-title");
  let links = document.querySelectorAll(".sidebar .nav-link");
  links.forEach((link) => link.classList.remove("active"));
  element.classList.add("active");

  content.style.opacity = 0;

  fetch(page)
    .then((response) => response.text())
    .then((data) => {
      setTimeout(() => {
        content.innerHTML = data;
        content.style.opacity = 1;
        navbarTitle.textContent = element.textContent;
      }, 300);
    })
    .catch(() => {
      content.innerHTML = "<h2>Halaman tidak ditemukan</h2>";
      content.style.opacity = 1;
      navbarTitle.textContent = "Dashboard";
       window.location.reload(); // Refresh jika terjadi error
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
//data sasaran
$(document).ready(function () {
  fetch(
    "https://script.google.com/macros/s/AKfycbxKCCTCcAHxKa1Yx0ft1ItDxh_SUYtSE1Wj-IZupbj7Q64-JtbXhOoqqOiPvtTX2std6Q/exec"
  )
    .then((response) => response.json())
    .then((data) => {
      let tableBody = "";
      data.forEach((item, index) => {
        tableBody += `<tr>
                    <td>${index + 1}</td>
                    <td contenteditable="true">${item.POSYANDU}</td>
                    <td contenteditable="true" class="text-center">${
                      item.JUMLAH_PENDUDUK
                    }</td>
                    <td contenteditable="true" class="text-center">${
                      item.PUS
                    }</td>
                    <td contenteditable="true" class="text-center">${
                      item.BULIN
                    }</td>
                    <td contenteditable="true" class="text-center">${
                      item.PUS_GAKIN
                    }</td>
                    <td contenteditable="true" class="text-center">${
                      item.PUS_4T
                    }</td>
                    <td contenteditable="true" class="text-center">${
                      item.PUS_ALKI
                    }</td>
                    <td contenteditable="true" class="text-center">${
                      item.TAHUN
                    }</td>
                    
                </tr>`;
      });
      document.getElementById("table-body").innerHTML = tableBody;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      alert("Gagal mengambil data. Coba lagi nanti.");
    });
});
