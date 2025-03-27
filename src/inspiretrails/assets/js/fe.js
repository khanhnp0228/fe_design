document.addEventListener("DOMContentLoaded", function () {
  const sectionFaq = document.querySelector(".section-faq");

  if (!sectionFaq) return;

  const faqItems = sectionFaq.querySelectorAll(".faq-item");

  faqItems.forEach((faqItem, index) => {
    const question = faqItem.querySelector(".faq-question");
    const answer = faqItem.querySelector(".faq-answer");
    const icon = question.querySelector(".faq-icon");

    if (index === 0) {
      faqItem.classList.add("active");
      answer.classList.add("show");
      icon.textContent = "−";
    } else {
      answer.classList.remove("show");
      icon.textContent = "+";
    }

    question.addEventListener("click", () => {
      const isActive = faqItem.classList.contains("active");

      faqItems.forEach((item) => {
        item.classList.remove("active");
        item.querySelector(".faq-answer").classList.remove("show");
        item.querySelector(".faq-icon").textContent = "+";
      });

      if (!isActive) {
        faqItem.classList.add("active");
        answer.classList.add("show");
        icon.textContent = "−";
      }
    });
  });
});



document.addEventListener("DOMContentLoaded", function () {
  const faqSection = document.querySelector(".faq-section");

  if (!faqSection) return;

  const faqItems = faqSection.querySelectorAll(".faq-item");

  faqItems.forEach((item, index) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const icon = item.querySelector(".faq-icon svg");

    if (!question || !answer || !icon) return;

    if (index === 0) {
      item.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + "px";
      icon.style.transform = "rotate(180deg)";
    } else {
      answer.style.maxHeight = null;
      icon.style.transform = "rotate(0deg)";
    }

    question.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");

      faqItems.forEach((el) => {
        el.classList.remove("active");
        el.querySelector(".faq-answer").style.maxHeight = null;
        el.querySelector(".faq-icon svg").style.transform = "rotate(0deg)";
      });

      if (!isOpen) {
        item.classList.add("active");
        answer.style.maxHeight = answer.scrollHeight + "px";
        icon.style.transform = "rotate(180deg)";
      }
    });
  });
});





document.addEventListener("DOMContentLoaded", function () {
  let lastScrollTop = 0;
  const header = document.querySelector(".custom-header");

  window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY;

    if (scrollTop > lastScrollTop) {
      // Cuộn xuống -> Ẩn header
      header.classList.add("hidden");
    } else {
      // Cuộn lên -> Hiện header
      header.classList.remove("hidden");
    }

    lastScrollTop = scrollTop;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const tickets = document.querySelectorAll(".ticket-card");
  const experiences = document.querySelectorAll(".experience-section");

  function updateExperienceSection() {
    const selectedTicket = document.querySelector(".ticket-card.selected");

    if (selectedTicket) {
      const selectedIndex = [...tickets].indexOf(selectedTicket) + 1;

      // Ẩn tất cả các experience-section
      experiences.forEach(exp => exp.style.display = "none");

      // Hiển thị experience-section tương ứng
      const selectedExperience = document.querySelector(`.experience-section-0${selectedIndex}`);
      if (selectedExperience) {
        selectedExperience.style.display = "block";

        // Cập nhật lại Flickity sau khi hiển thị
        setTimeout(() => {
          const carousel = selectedExperience.querySelector(".carousel");
          if (carousel) {
            // Hủy bỏ Flickity nếu đã khởi tạo trước đó
            if (carousel.flickityInstance) {
              carousel.flickityInstance.destroy();
            }

            // Khởi tạo lại Flickity
            carousel.flickityInstance = new Flickity(carousel, {
              prevNextButtons: true,
              pageDots: true,
              autoPlay: false,
              groupCells: true,
              initialIndex: Math.floor(carousel.children.length / 2), // Đặt slide ở giữa khi load
              cellAlign: "center", // Căn giữa carousel
              fade: true // Hiệu ứng fade giữa các slide
            });

            // Custom CSS class để fade giữa các slide
            carousel.on("change", function (index) {
              const cells = document.querySelectorAll(".carousel-cell");
              cells.forEach((cell, i) => {
                if (i === index) {
                  cell.classList.add("fade-in");
                  cell.classList.remove("fade-out");
                } else {
                  cell.classList.add("fade-out");
                  cell.classList.remove("fade-in");
                }
              });
            });

            // Kích hoạt hiệu ứng ban đầu
            const initialIndex = carousel.selectedIndex;
            document.querySelectorAll(".carousel-cell")[initialIndex].classList.add("fade-in");

            // Reset layout để đảm bảo hiển thị đúng
            carousel.flickityInstance.resize();
          }
        }, 200);
      }
    }
  }

  tickets.forEach(ticket => {
    ticket.addEventListener("click", function () {
      const radio = this.querySelector(".ticket-radio");
      radio.checked = true;

      // Xóa lớp "selected" khỏi tất cả vé
      tickets.forEach(t => t.classList.remove("selected"));

      // Thêm lớp "selected" cho vé được chọn
      this.classList.add("selected");

      // Cập nhật experience-section
      updateExperienceSection();
    });
  });

  // Khi tải trang, hiển thị experience-section tương ứng với vé đang "selected"
  updateExperienceSection();
});



Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

document.addEventListener("DOMContentLoaded", function () {
  flatpickr("#calendar", {
    dateFormat: "d-m-Y",
    minDate: "today",
    defaultDate: "15-01-2023",
    locale: {
      firstDayOfWeek: 1 // Bắt đầu từ thứ Hai
    },
    inline: "true"
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Chọn tất cả phần tử cost-header
  const headers = document.querySelectorAll(".cost-header, .schedule-header");

  headers.forEach(header => {
    header.addEventListener("click", function () {
      const content = this.nextElementSibling; // Lấy phần content tương ứng
      const icon = this.querySelector(".toggle-icon"); // Lấy icon trong header

      if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        icon.textContent = "−"; // Đổi icon thành dấu trừ
      } else {
        content.style.display = "none";
        icon.textContent = "+"; // Đổi icon thành dấu cộng
      }
    });
  });

  // Ẩn tất cả nội dung trừ phần đầu tiên
  document.querySelectorAll(".cost-content, .schedule-content").forEach((content, index) => {
    if (index !== 0) {
      content.style.display = "none";
      const icon = content.previousElementSibling.querySelector(".toggle-icon");
      icon.textContent = "+";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const decrementBtns = document.querySelectorAll(".decrement");
  const incrementBtns = document.querySelectorAll(".increment");

  decrementBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      let input = btn.nextElementSibling;
      let value = parseInt(input.value, 10);
      if (value > parseInt(input.min)) {
        input.value = value - 1;
      }
    });
  });

  incrementBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      let input = btn.previousElementSibling;
      let value = parseInt(input.value, 10);
      if (value < parseInt(input.max)) {
        input.value = value + 1;
      }
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".mega-menu-left ul li");
  const contentItems = document.querySelectorAll(".mega-content");

  menuItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      let targetId = this.getAttribute("data-target");

      contentItems.forEach((content) => {
        content.classList.remove("active"); // Ẩn tất cả
      });

      document.getElementById(targetId).classList.add("active"); // Hiển thị nội dung tương ứng
    });
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   function initializeFlickity() {
//     const carousel = document.querySelector('.section-trailbus .carousel');

//     if (carousel) {
//       // Hủy Flickity nếu đã tồn tại trước đó
//       if (carousel.flickityInstance) {
//         carousel.flickityInstance.destroy();
//       }

//       // Kiểm tra kích thước màn hình
//       const isMobile = window.innerWidth <= 768; // Điều kiện mobile

//       // Cấu hình Flickity dựa trên thiết bị
//       const options = {
//         prevNextButtons: !isMobile, // Chỉ hiển thị trên PC
//         pageDots: isMobile, // Chỉ hiển thị trên Mobile
//         cellAlign: 'left',
//         wrapAround: false,
//         groupCells: true,

//         // ✅ Tắt hiệu ứng “xào bài”
//         selectedAttraction: 0.2,
//         friction: 0.4

//       };

//       // Khởi tạo Flickity
//       carousel.flickityInstance = new Flickity(carousel, options);
//     }
//   }

//   // Gọi hàm khởi tạo khi trang tải
//   initializeFlickity();

//   // Cập nhật khi thay đổi kích thước màn hình
//   window.addEventListener('resize', initializeFlickity);
// });

document.addEventListener("DOMContentLoaded", function () {
  function initializeFlickity() {
    const carousel = document.querySelector('.section-trailbus .carousel');

    if (!carousel) return;

    // Nếu đã có Flickity instance thì destroy
    if (carousel.flickityInstance) {
      carousel.flickityInstance.destroy();
    }

    // THÊM CLASS CHẶN ANIMATION KHI KHỞI TẠO
    carousel.classList.add('is-initializing');

    const isMobile = window.innerWidth <= 768;

    const options = {
      prevNextButtons: !isMobile,
      pageDots: isMobile,
      cellAlign: 'left',
      wrapAround: false,
      groupCells: true,
      on: {
        ready: function () {
          // GỠ CLASS SAU KHI KHỞI TẠO
          requestAnimationFrame(() => {
            carousel.classList.remove('is-initializing');
          });
        }
      }
    };

    // Khởi tạo Flickity
    carousel.flickityInstance = new Flickity(carousel, options);
  }

  // Gọi khi load trang
  initializeFlickity();

  // Gọi lại khi resize
  window.addEventListener("resize", () => {
    initializeFlickity();
  });
});








document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  const closeMenuBtn = document.querySelector(".close-menu");
  const desktopMegaMenu = document.querySelector(".mega-menu-content");
  const mobileMegaContainer = document.querySelector(".mobile-mega-content");

  // Sao chép nội dung Mega Menu từ PC sang Mobile khi trang tải
  if (desktopMegaMenu && mobileMegaContainer) {
    mobileMegaContainer.innerHTML = desktopMegaMenu.innerHTML;

    // Lấy danh sách các mục bên trái & nội dung bên phải
    const mobileItems = mobileMegaContainer.querySelectorAll(".mega-menu-left ul li");
    const mobileContents = mobileMegaContainer.querySelectorAll(".mega-menu-right .mega-content");

    // Ẩn tất cả mega-content ban đầu
    mobileContents.forEach((content) => content.classList.add("hidden"));

    // Đặt mục đầu tiên làm mặc định hiển thị
    if (mobileContents.length > 0) {
      mobileContents[0].classList.remove("hidden");
    }

    // Xử lý click cho các mục menu bên trái trên mobile
    mobileItems.forEach((item) => {
      item.addEventListener("click", function (event) {
        event.preventDefault();

        // Xóa trạng thái active & ẩn tất cả nội dung
        mobileItems.forEach((el) => el.classList.remove("active"));
        mobileContents.forEach((content) => content.classList.add("hidden"));

        // Hiển thị nội dung tương ứng
        this.classList.add("active");
        const targetId = this.getAttribute("data-target");
        const targetContent = mobileMegaContainer.querySelector(`#${targetId}`);

        if (targetContent) {
          targetContent.classList.remove("hidden");
        }
      });
    });
  }

  // Toggle mở/đóng menu mobile
  menuToggle.addEventListener("click", function () {
    mobileMenu.classList.add("open");
  });

  closeMenuBtn.addEventListener("click", function () {
    mobileMenu.classList.remove("open");
  });

  // Đóng menu khi click bên ngoài
  document.addEventListener("click", function (event) {
    if (!mobileMenu.contains(event.target) && !menuToggle.contains(event.target)) {
      mobileMenu.classList.remove("open");
    }
  });
});



document.addEventListener("DOMContentLoaded", function () {
  const actionBar = document.querySelector(".mobile-action-bar");
  const sectionFaq = document.querySelector(".section-faq");

  // Khi trang vừa tải, ẩn thanh hành động
  actionBar.classList.add("hidden");

  // Hiển thị thanh hành động sau một chút khi trang tải xong
  setTimeout(() => {
    actionBar.classList.remove("hidden");
    actionBar.classList.add("visible");
  }, 300); // Delay 300ms cho hiệu ứng mượt hơn

  window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY;
    let faqOffsetTop = sectionFaq.offsetTop - window.innerHeight + actionBar.offsetHeight;

    // Khi đến section-faq, giữ thanh cố định
    if (scrollTop >= faqOffsetTop) {
      actionBar.classList.add("fixed");
    } else {
      actionBar.classList.remove("fixed");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  $('.trailbus-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false
        }
      }
    ]
  });
});




