/**
 * 페이지 로드 시
 */
function init() {
  if ($(window).scrollTop()) {
    $("#header").addClass("active");
  } else {
    $("#header").removeClass("active");
  }
}

window.onload = function () {
  init();
};

$(document).ready(function () {
    // 헤더 스크롤에 따른 css 변경 (메인 페이지, 회사소개 > VISION & MISSION 해당)
  $(window).on("scroll", function () {
    init();
  });
});
