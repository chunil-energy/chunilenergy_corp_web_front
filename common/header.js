const SUB_MENU_SLIDE_TIME = 400;

/** 상단 헤더 닫기 */
function closeHeaderNav() {
  $(".sub_nav_wrap").slideUp(SUB_MENU_SLIDE_TIME, function () {
    $("#header .sub_nav_wrap .sub_nav_body").hide().css("opacity", "0");
    $("#header").removeClass("isShow_sub");
    $("#header nav ul li").removeClass("active");
  });
  isOpenNav = false;
}

/** 반응형 검사 함수 */
const isBreakPoint = function (bp) {
  let bps = [870, 1080, 1280, 1440],
    w = $(window).width(),
    min,
    max;
  for (let i = 0, l = bps.length; i < l; i++) {
    if (bps[i] === bp) {
      min = bps[i - 1] || 0;
      max = bps[i];
      break;
    }
  }
  return w > min && w <= max;
};

$(document).ready(function () {
  let isOpenNav = false;

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
      closeHeaderNav();
    }
  });

  // 로고 클릭 시 메인페이지로
  $(".logo").on("click", function () {
    //HTTP Redirect를 클라이언트에서 처리할때 // window.location.replace("http://example.com");
    //사용자의 클릭 이벤트용 // window.location.href = window.location.href;
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
  $("#menu_open").on("click", function () {
    if (isBreakPoint(870)) {
      // $("#header .sub_nav_wrap").fadeIn();
      
      if ($("#header").hasClass("show_mo_menu")) {
        // 모바일메뉴가 열려있다면,
        $("#header").removeClass("show_mo_menu");
        // $("#header.show_mo_menu::before").fadeOut();

        $("#header .sub_nav_wrap").fadeOut();
        $("body").css("overflow", "auto");
      } else {
        // 모바일메뉴가 닫혀있다면,
        $("#header").addClass("show_mo_menu");
        // $("#header.show_mo_menu::before").fadeIn();

        $("#header .sub_nav_wrap").fadeIn();
        $("body").css("overflow", "hidden");
      }
    } else {
      $("#sitemap").fadeIn();
      $("body").css("overflow", "hidden");
    }
  });

  // 사이트맵 닫기 아이콘 클릭
  $("#sitemap_close").on("click", function () {
    $("#sitemap").fadeOut();
    $("body").css("overflow", "auto");
  });
});
