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
  $("body").css("overflow", "auto");

  console.log("init");

  // 모바일메뉴가 열려있다면, 닫기
  if ($("#header").hasClass("show_mo_menu")) {
    $("#header").removeClass("show_mo_menu");
    $("#header .sub_nav_wrap").hide();
    $("body").css("overflow", "auto");
  }
  // todo 페이지 최초 진입 후 화면의 크기가 바뀐다면, 대응 코드 작성.

  // 모바일일 경우 네비 엘리먼트 클론
  if (isBreakPoint(870)) {
    var navElement = $("#header nav ul").clone();
    navElement.addClass("nav_list");
    navElement.find("li").each(function (index, item) {
      $(item).data("idx", index + 1);
    });
    navElement.appendTo("#header .sub_nav_wrap");
    $('#header .sub_nav_wrap').append(`<!-- 모바일 제휴/제안, 지구하다 플랫폼 -->
      <div class="mo_nav_item flex_col justify_center align_start" style="display: flex;gap: 20px; padding-top:48px;">
        <button class="partner_offer semi_bold flex justify_start align_center" style="color:#262626;font-size:16px;letter-spacing: -0.04rem;">
          제휴/제안
          <span class="arrow_right"></span>
        </button>
        <a href="https://zguhada.com/" class="semi_bold flex justify_start align_center" style="color:#1A83FF;font-size:16px;letter-spacing: -0.04rem;">
          플랫폼 지구하다
          <span class="arrow_right blue"></span>
        </a>
      </div>`
    );
  }

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
      // console.log("end");
      window.open('https://www.saramin.co.kr/zf_user/company-info/view?csn=T0RHaXAxd2t3UCtoZGk3eSt6Yk8wQT09')
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
  // 모바일 헤더 메뉴 클릭 시 (하위 메뉴 show)
  $(".nav_list li").on("click", function () {
    isOpenNav = true;
    const selector =
      "#header .sub_nav_wrap .sub_nav_body:nth-child(" +
      $(this).data("idx") +
      ")";

    // "인재채용" 메뉴 클릭 시
    if ($(this).is(":last-child")) {
      // console.log("This is the last LI");
      window.open('https://www.saramin.co.kr/zf_user/company-info/view?csn=T0RHaXAxd2t3UCtoZGk3eSt6Yk8wQT09')
      return;
    }

    var findChildren = $(this).next(".sub_nav_body");

    // 하위 메뉴 엘리먼트가 없다면
    if (findChildren?.length === 0) {
      var cloneSub = $(selector).clone(true);
      $(this).after(cloneSub);
    }

    // 하위메뉴 엘리먼트
    const childrenMenu = $(this).next(".sub_nav_body");
    // 하위메뉴의 display 속성검사
    const alreadyShow = childrenMenu.css("display");

    if (alreadyShow === "block") {
      $(".nav_list li").removeClass("active");

      childrenMenu.slideUp(200);
      childrenMenu.css("opacity", 0);
      // childrenMenu.animate({ opacity: 0 });
    } else {
      $(".nav_list li").removeClass("active");
      $(this).addClass("active");

      // $('.nav_list .sub_nav_body').slideUp();
      // $('.nav_list .sub_nav_body').animate({ opacity: 0, display: 'none' });
      $(".nav_list .sub_nav_body").each(function (index, item) {
        if ($(item).css("display") === "block") {
          $(item).slideUp(200);
        }
      });

      childrenMenu.css("opacity", 1);
      childrenMenu.slideDown(300);
    }
  });

  // 헤더 우측 사이트맵 열기 아이콘 클릭
  $("#menu_open").on("click", function () {
    if (isBreakPoint(870)) {
      // $("#header .sub_nav_wrap").fadeIn();

      if ($("#header").hasClass("show_mo_menu")) {
        // 모바일메뉴가 열려있다면,
        $("#header").removeClass("show_mo_menu");

        $("#header .sub_nav_wrap").fadeOut();
        $("body").css("overflow", "auto");
      } else {
        // 모바일메뉴가 닫혀있다면,
        $("#header").addClass("show_mo_menu");

        $("#header .sub_nav_wrap").fadeIn();
        $("body").css("overflow", "hidden");
      }
    } else {
      $("#sitemap").fadeIn();
      $("body").css("overflow", "hidden");
    }
  });

  // 사이트맵 열기 클릭
  $(".sitemap_open").on("click", function () {
    $("#sitemap").fadeIn();
    $('.body').css('filter', 'blur(10px)');
    $("body").css("overflow", "hidden");
  });

  // 사이트맵 닫기 아이콘 클릭
  $("#sitemap_close").on("click", function () {
    $("#sitemap").fadeOut();
    $('.body').css('filter', 'none');
    $("body").css("overflow", "auto");
  });

  // 패밀리사이트 onchange
  let selectFlag;
  $(".custom-select").on("click", function () {
    $(this).toggleClass("selected");
    if ($(this).hasClass("selected")) {
      $(".custom-select-list").show();
    } else {
      $(".custom-select-list").hide();
    }
  });
  $(".custom-select").on("focusin", function () {
    $(".custom-select-list").show();
  });
  $(".custom-select").on("focusout", function () {
    if (!selectFlag) {
      $(".custom-select-list").hide();
    }
    $(this).removeClass("selected");
  });
  $(".custom-select-option").on("mouseenter", function () {
    selectFlag = true;
  });
  $(".custom-select-option").on("mouseout", function () {
    selectFlag = false;
  });
  $(".custom-select-option").on("click", function () {
    let value = $(this).attr("value");
    let site_url = "";

    switch (value) {
      case "service":
        site_url = "https://www.chunilservice.com/";
        break;
      case "light":
        site_url = "http://www.ichunil.com/";
        break;
      default:
        break;
    }

    if (site_url) {
      window.open(site_url, "_target");
    }
  });
});
