const contentData = {
  "all-projects": {
    images: [
      "/img/job-1-1.jpg",
      "/img/job-1-2.jpg",
      "/img/job-2-1.jpg",
      "/img/job-2-2.jpg",
      "/img/job-3-1.jpg",
      "/img/job-3-2.jpg",
    ],
    titles: [
      "Water Line Repair",
      "Проект 2 Все",
      "Проект 3 Все",
      "Проект 4 Все",
      "Проект 5 Все",
      "Проект 6 Все",
    ],
    descriptions: [
      "Plumbing",
      "Описание 2 Все",
      "Описание 3 Все",
      "Описание 4 Все",
      "Описание 5 Все",
      "Описание 6 Все",
    ],
  },
  "commercial-services": {
    images: [
      "/img/job-1-2.jpg",
      "/img/job-1-1.jpg",
      "/img/job-2-2.jpg",
      "/img/job-2-1.jpg",
      "/img/job-3-2.jpg",
      "/img/job-3-1.jpg",
    ],
    titles: [
      "Проект 1 Коммерческий",
      "Проект 2 Коммерческий",
      "Проект 3 Коммерческий",
      "Проект 4 Коммерческий",
      "Проект 5 Коммерческий",
      "Проект 6 Коммерческий",
    ],
    descriptions: [
      "Описание 1 Коммерческий",
      "Описание 2 Коммерческий",
      "Описание 3 Коммерческий",
      "Описание 4 Коммерческий",
      "Описание 5 Коммерческий",
      "Описание 6 Коммерческий",
    ],
  },
  "residential-services": {
    images: [
      "/img/job-3-1.jpg",
      "/img/job-3-2.jpg",
      "/img/job-1-1.jpg",
      "/img/job-1-2.jpg",
      "/img/job-2-1.jpg",
      "/img/job-2-2.jpg",
    ],
    titles: [
      "Проект 1 Жилой",
      "Проект 2 Жилой",
      "Проект 3 Жилой",
      "Проект 4 Жилой",
      "Проект 5 Жилой",
      "Проект 6 Жилой",
    ],
    descriptions: [
      "Описание 1 Жилой",
      "Описание 2 Жилой",
      "Описание 3 Жилой",
      "Описание 4 Жилой",
      "Описание 5 Жилой",
      "Описание 6 Жилой",
    ],
  },
  "emergency-services": {
    images: [
      "/img/job-2-1.jpg",
      "/img/job-2-2.jpg",
      "/img/job-3-1.jpg",
      "/img/job-3-2.jpg",
      "/img/job-1-1.jpg",
      "/img/job-1-2.jpg",
    ],
    titles: [
      "Проект 1 Экстренно",
      "Проект 2 Экстренно",
      "Проект 3 Экстренно",
      "Проект 4 Экстренно",
      "Проект 5 Экстренно",
      "Проект 6 Экстренно",
    ],
    descriptions: [
      "Описание 1 Экстренно",
      "Описание 2 Экстренно",
      "Описание 3 Экстренно",
      "Описание 4 Экстренно",
      "Описание 5 Экстренно",
      "Описание 6 Экстренно",
    ],
  },
};

const links = document.querySelectorAll(".link");

links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const category = this.textContent.toLowerCase().replace(" ", "-");
    updateContent(category);
  });
});

function updateContent(category) {
  const data = contentData[category];
  if (!data) return;

  const images = document.querySelectorAll(".img-con img");
  const titles = document.querySelectorAll(".work-con__title");
  const descriptions = document.querySelectorAll(".work-con__desc");

  images.forEach((img, index) => {
    img.src = data.images[index - 1] || "";
  });

  titles.forEach((title, index) => {
    title.textContent = data.titles[index] || "";
  });

  descriptions.forEach((desc, index) => {
    desc.textContent = data.descriptions[index] || "";
  });
}

const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1,
      centeredSlides: true,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const showMoreBtn = document.querySelector(".services .primary-btn");
const content = document.querySelector(".services .content");

showMoreBtn.addEventListener("click", function () {
  content.classList.add("show");
  showMoreBtn.remove();
});
