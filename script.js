$(document).ready(function () {
  const swiper = new Swiper(".clients .swiper", {
    spaceBetween: 32,
    slidesPerView: 1,
    navigation: {
      nextEl: ".clients .swiper-button-next",
      prevEl: ".clients .swiper-button-prev",
    },
    breakpoints: {
      767: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  });

  $(".recent-works .link").on("click", function (e) {
    e.preventDefault();
    const sectionId = $(this).data("section-id");
    $(".recent-works .img-con").removeClass("hide");
    // $(".content").css("grid-template-columns", "repeat(3, 1fr)");
    if (sectionId !== "all") {
      $(".recent-works .img-con")
        .not(`[data-section-id="${sectionId}"]`)
        .addClass("hide");
      // $(".content").css("grid-template-columns", "repeat(2, 1fr)");
    }
  });

  /*   $(".services .js-show-more").on("click", function () {
    const $button = $(this);
    $.ajax({
      url: "ajax-services.html",
      method: "get",
      success: function (data) {
        $(".services .content").append(data);
      },
    });
    $button.remove();
  }); */

  $(".services .js-show-more").on("click", function () {
    $.get("ajax-services.html", function (data) {
      $(".services .content").append(data);
    });
    $(this).remove();
  });

  const loadPopups = (callback) => {
    if ($(".popups").length === 0) {
      $.get("ajax-popups.html", function (data) {
        $("body").append(data);
        controlPopups();
        if (callback) callback();
      });
    } else {
      if (callback) callback();
    }
  };

  const controlPopups = () => {
    $(".close-popup").on("click", function () {
      $(".popups").removeClass("active");
      $(".popup, .mobile-header-window").removeClass("active");
    });

    $(document).on("keydown", function (e) {
      if (e.key === "Escape") {
        $(".popups").removeClass("active");
        $(".popup, .mobile-header-window").removeClass("active");
      }
    });

    $(".popups").on("click", function (e) {
      if (e.target === this) {
        $(".popups").removeClass("active");
        $(".popup, .mobile-header-window").removeClass("active");
      }
    });
  };

  // $(".schedule-call-btn").on("click", function () {

  $("body").on("click", ".schedule-call-btn", function () {
    loadPopups(function () {
      $("#schedule-call-popup").addClass("active");
      $("#mobile-header-window").removeClass("active");
      $(".popups").addClass("active");
    });
  });

  $("body").on("click", ".contact-us-btn", function () {
    loadPopups(function () {
      $("#contact-us-popup").addClass("active");
      $(".popups").addClass("active");
    });
  });

  $("body").on("click", ".mobile-header-btn", function () {
    loadPopups(function () {
      $("#mobile-header-window").addClass("active");
      $(".popups").addClass("active");
    });
  });
});
