// Lấy tất cả các nút
const buttons = document.querySelectorAll(".btn");

// Gắn sự kiện click
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Nếu nút đang mở, đóng lại
    if (btn.classList.contains("active")) {
      btn.classList.remove("active");
      return;
    }

    // Đóng các nút khác
    buttons.forEach((b) => b.classList.remove("active"));

    // Mở nút được chọn
    btn.classList.add("active");
  });
});
