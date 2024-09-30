document.addEventListener("DOMContentLoaded", () => {
  const timelineItems = document.querySelectorAll(".timeline-item h3");

  timelineItems.forEach((item) => {
    item.addEventListener("click", () => {
      const parentItem = item.closest(".timeline-item"); // Tìm phần tử timeline-item gần nhất
      const content = parentItem.querySelector(".content"); // Nội dung cần mở rộng/thu gọn
      const borderExpand = document.querySelector(".border-expand"); // Border cần thay đổi chiều cao
      const arrowIcon = parentItem.querySelector(".arrow img"); // Mũi tên

      // Kiểm tra trạng thái của nội dung
      if (content.classList.contains("expanded")) {
        content.classList.remove("expanded");
        content.style.maxHeight = null; // Thu gọn nội dung
        borderExpand.style.height = "50px"; // Thu gọn border dọc về chiều cao mặc định
        arrowIcon.style.transform = "rotate(0deg)"; // Xoay lại mũi tên về trạng thái ban đầu
      } else {
        content.classList.add("expanded");
        const contentHeight = content.scrollHeight; // Lấy chiều cao thực tế của nội dung
        content.style.maxHeight = contentHeight + "px"; // Mở rộng nội dung
        borderExpand.style.height = contentHeight + "px"; // Đồng bộ chiều cao border với chiều cao nội dung
        arrowIcon.style.transform = "rotate(180deg)"; // Xoay mũi tên khi mở rộng
      }
    });
  });
});
