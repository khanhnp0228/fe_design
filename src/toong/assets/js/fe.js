
// Ensure jQuery and slick are loaded before initializing the slider
// document.addEventListener('DOMContentLoaded', function() {
//   if (window.jQuery && typeof jQuery.fn.slick === "function") {
//       jQuery('.image-slider').slick({
//           arrows: true,
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           autoplay: true,
//           autoplaySpeed: 3500
//       });
//   }
// });


// Initialize Swiper for the image slider
// Ensure the DOM is fully loaded before initializing Swiper
document.addEventListener('DOMContentLoaded', function () {
  new Swiper('.image-slider', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  });
});



// Card click event to toggle active state and expand content
// Ensure the DOM is fully loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.card-item');

  cards.forEach(card => {
    card.addEventListener('click', function () {
      cards.forEach(c => {
        c.classList.remove('active-card', 'md:max-w-[70%]', 'md:basis-[70%]', 'z-10');
        c.classList.add('md:max-w-[15%]', 'md:basis-[15%]', 'z-0');

        // Ẩn expanded content
        const ec = c.querySelector('.about-content');
        if (ec) {
          ec.classList.add('opacity-0', 'scale-95', 'translate-y-4', 'pointer-events-none');
          ec.classList.remove('opacity-100', 'scale-100', 'translate-y-0', 'pointer-events-auto');
        }
      });

      // Active cho card vừa bấm
      this.classList.add('active-card', 'md:max-w-[70%]', 'md:basis-[70%]', 'z-10');
      this.classList.remove('md:max-w-[15%]', 'md:basis-[15%]', 'z-0');

      // Hiện expanded content + hiệu ứng
      const thisEc = this.querySelector('.about-content');
      if (thisEc) {
        thisEc.classList.remove('opacity-0', 'scale-95', 'translate-y-4', 'pointer-events-none');
        thisEc.classList.add('opacity-100', 'scale-100', 'translate-y-0', 'pointer-events-auto');
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  if (window.innerWidth < 768) { // Kích hoạt Swiper cho mobile
    new Swiper('.mySwiper', {
      slidesPerView: 1,
      spaceBetween: 24,
      pagination: false,
      navigation: false,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },

    });
  }
});

// FAQ toggle functionality
document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((faqItem, idx) => {
    const question = faqItem.querySelector(".faq-question");
    const answer = faqItem.querySelector(".faq-answer");
    const icon = question.querySelector(".faq-icon");

    question.addEventListener("click", () => {
      const isOpen = answer.classList.contains("!block");

      // Đóng tất cả
      document.querySelectorAll(".faq-answer").forEach((a, i) => {
        a.classList.add("hidden");
        a.classList.remove("!block", "animate-fadeInDown");
      });
      document.querySelectorAll(".faq-icon").forEach(i => i.textContent = "+");

      // Nếu chưa mở thì mở và animate
      if (!isOpen) {
        answer.classList.remove("hidden");
        answer.classList.add("!block", "animate-fadeInDown");
        icon.textContent = "−";
      }
    });
  });
});



// Marquee auto-scroll functionality
document.addEventListener('DOMContentLoaded', function () {
  const marquee = document.getElementById('marquee-auto');
  const content = marquee.querySelector('.marquee-content');
  // Nhân bản nội dung cho tới khi tổng chiều rộng > 2 lần viewport
  while (marquee.scrollWidth < window.innerWidth * 2) {
    marquee.appendChild(content.cloneNode(true));
  }
});
