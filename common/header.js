const SUB_MENU_SLIDE_TIME = 400;

$(document).ready(function () {
  let isOpenNav = false;

  // 헤더 스크롤에 따른 css 변경 (메인 페이지만 해당)
  $(window).on("scroll", function () {
    if ($(window).scrollTop()) {
      $("#header").addClass("active");
    } else {
      $("#header").removeClass("active");
    }
  });

  // 헤더(서브 nav) 바깥 클릭 시 서브메뉴 닫힘
  $(document).on("click", function (e) {
    var clickedEl = $(e.target);
    var outsideClicker = $("#header");

    if (
      !(
        clickedEl.is(outsideClicker) || outsideClicker.has(clickedEl).length > 0
      ) &&
      isOpenNav
    ) {
      $(".sub_nav_wrap").slideUp(SUB_MENU_SLIDE_TIME, function () {
        $("#header .sub_nav_wrap .sub_nav_body").hide().css("opacity", "0");
        $("#header").removeClass("isShow_sub");
        $("#header nav ul li").removeClass("active");
      });
      isOpenNav = false;
    }
  });

  // 로고 클릭 시 메인페이지로
  $(".logo").on("click", function () {
    //HTTP Redirect를 클라이언트에서 처리할때
    // window.location.replace("http://example.com");
    //사용자의 클릭 이벤트용
    // window.location.href = window.location.href;
    window.location.href = "index.html";
  });

  // 헤더 메뉴 클릭 시 (하위 메뉴 show)
  $("#header nav ul li").on("click", function () {
    isOpenNav = true;
    const selector =
      "#header .sub_nav_wrap .sub_nav_body:nth-child(" +
      ($(this).index() + 1) +
      ")";

    // "인재채용" 메뉴 클릭 시
    if ($(this).index() === 4) {
      console.log("end");
      return;
    }

    $("#header").addClass("isShow_sub");
    $("#header nav ul li").removeClass("active");

    $(this).addClass("active");

    const alreadyShow = $(".sub_nav_wrap").css("display");

    if (alreadyShow === "block") {
      $("#header .sub_nav_wrap .sub_nav_body").hide().css("opacity", "0");
      $(selector).css("display", "flex");
      $(selector).animate({ opacity: 1 });
    } else {
      $(selector).css("display", "flex");
      $(".sub_nav_wrap").slideDown(SUB_MENU_SLIDE_TIME);
      $(selector).animate({ opacity: 1 });
    }
  });

  // 헤더 우측 사이트맵 열기 아이콘 클릭
  $("#sitemap_open").on("click", function () {
    $("#sitemap").fadeIn();

    // $("#sitemap").animate({
    //     // left: 0
    //     left: 0
    // }, 400, "linear");
  });

  // 사이트맵 닫기 아이콘 클릭
  $("#sitemap_close").on("click", function () {
    $("#sitemap").fadeOut();

    // $("#sitemap").animate({
    //     // left: '100%'
    //     left: '-100%'
    // }, 400, "linear");
  });
});
