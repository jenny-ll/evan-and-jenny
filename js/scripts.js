$(document).ready(function () {
  var navigation = document.querySelector(".navigation");

  if (navigation && !document.querySelector(".wedding-countdown")) {
    var countdown = document.createElement("div");
    countdown.className = "wedding-countdown";
    countdown.innerHTML =
      '<span class="countdown-label"></span>' +
      '<span class="countdown-values">' +
      "<span><strong data-countdown-days>0</strong><em data-countdown-days-label>days</em></span>" +
      "<span><strong data-countdown-hours>0</strong><em data-countdown-hours-label>hours</em></span>" +
      "<span><strong data-countdown-minutes>0</strong><em data-countdown-minutes-label>mins</em></span>" +
      "</span>";
    navigation.insertBefore(countdown, navigation.firstChild);

    var weddingDate = new Date("2027-05-30T00:00:00-07:00").getTime();

    function updateCountdown() {
      var now = new Date().getTime();
      var distance = weddingDate - now;
      var isChinese = document.documentElement.lang === "zh-Hans";
      var label = countdown.querySelector(".countdown-label");
      var daysLabel = countdown.querySelector("[data-countdown-days-label]");
      var hoursLabel = countdown.querySelector("[data-countdown-hours-label]");
      var minutesLabel = countdown.querySelector(
        "[data-countdown-minutes-label]",
      );

      label.textContent = isChinese
        ? "距离婚礼"
        : "Counting down to May 30, 2027";
      daysLabel.textContent = isChinese ? "天" : "days";
      hoursLabel.textContent = isChinese ? "小时" : "hours";
      minutesLabel.textContent = isChinese ? "分钟" : "mins";

      if (distance <= 0) {
        label.textContent = isChinese ? "今天就是婚礼日" : "Today is the day";
        countdown.querySelector("[data-countdown-days]").textContent = "0";
        countdown.querySelector("[data-countdown-hours]").textContent = "0";
        countdown.querySelector("[data-countdown-minutes]").textContent = "0";
        return;
      }

      countdown.querySelector("[data-countdown-days]").textContent = Math.floor(
        distance / (1000 * 60 * 60 * 24),
      );
      countdown.querySelector("[data-countdown-hours]").textContent =
        Math.floor((distance / (1000 * 60 * 60)) % 24);
      countdown.querySelector("[data-countdown-minutes]").textContent =
        Math.floor((distance / (1000 * 60)) % 60);
    }

    updateCountdown();
    setInterval(updateCountdown, 30000);
  }

  $(".nav-toggle").click(function (event) {
    event.preventDefault();
    var isOpen = $(".header-nav").toggleClass("open").hasClass("open");
    $(".nav-toggle").toggleClass("active", isOpen);
    $("html, body").toggleClass("nav-open", isOpen);
  });

  $(".header-nav li a, .header-nav .language-toggle").click(function () {
    $(".nav-toggle").removeClass("active");
    $(".header-nav").removeClass("open");
    $("html, body").removeClass("nav-open");
  });

  $("a[href*=#]:not([href=#])").click(function () {
    if (
      location.pathname.replace(/^\//, "") ===
        this.pathname.replace(/^\//, "") &&
      location.hostname === this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html,body").animate(
          {
            scrollTop: target.offset().top - 90,
          },
          1000,
        );
        return false;
      }
    }
  });

  var lily = document.querySelector(".lily-fade-in");
  var invitationSection = document.getElementById("invitation");

  if (lily && invitationSection && "IntersectionObserver" in window) {
    var lilyObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            lily.classList.add("is-visible");
            lilyObserver.disconnect();
          }
        });
      },
      { threshold: 0.25 },
    );

    lilyObserver.observe(invitationSection);
  } else if (lily) {
    lily.classList.add("is-visible");
  }
});
