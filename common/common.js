// !!! index.html 제외 모든 html에서 사용하는 함수나 이벤트 처리.

$(document).ready(function () {

    // 제휴제안 버튼 클릭 시
    $("#partner_offer, .partner_offer").on("click", function () {
        window.location.href = "../cooperation/proposal.html";
    });

});
