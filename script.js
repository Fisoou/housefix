$(document).ready(function () {
  const swiper = new Swiper(".swiper", {
    spaceBetween: 32,
    slidesPerView: "auto",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  $(".link").on("click", function (e) {
    e.preventDefault();
    const sectionId = $(this).data("section-id");
    $(".img-con").removeClass("hide");
    $(".content").css("grid-template-columns", "repeat(3, 1fr)");
    if (sectionId !== "all") {
      $(".img-con").not(`[data-section-id="${sectionId}"]`).addClass("hide");
      $(".content").css("grid-template-columns", "repeat(2, 1fr)");
    }
  });

  $(".services .js-show-more").on("click", function () {
    $(".services .card.hidden").removeClass("hidden");
    $(this).remove();
  });

  $(".schedule-call-btn").on("click", function () {
    $(".popups").addClass("active");
  });

  $(".close-popup").on("click", function () {
    $(".popups").removeClass("active");
  });

  $(document).on("keydown", function (e) {
    if (e.key === "Escape") {
      $(".popups").removeClass("active");
    }
  });

  $(".popups").on("click", function (e) {
    if (e.target === this) {
      $(".popups").removeClass("active");
    }
  });
});
