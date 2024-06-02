$(document).ready(function () {
    // footer_nav_list append elements
    $("footer .footer_nav_list").append(`<a href="../../cooperation/proposal/" class="footer_nav text_16 semi_bold">제휴제안</a>
    <a href="../../business/jiguhada/" class="footer_nav text_16 semi_bold">플랫폼</a>
    <a href="../../introduce/affiliates/" class="footer_nav text_16 semi_bold">인프라</a>
    <a href="../../business/solution/" class="footer_nav text_16 semi_bold">서비스</a>
    <a href="Brochure-CHUNILENERGY_official.pdf" download="Brochure-CHUNILENERGY_official.pdf" class="footer_nav text_16 semi_bold">소개서 다운로드</a>
    <button type="button" class="sitemap_open footer_nav text_16 semi_bold only_mo_block">사이트맵</button>`);
    //   <button type="button" class="footer_file_down footer_nav text_16 semi_bold">파일 다운</button>


    // footer footer_file_down button click
    // $("button.footer_file_down").on("click", function () {
    //   console.log('footer_file_down');
    // });

    // footer sns button click
    $(".footer_social_wrap button").on("click", function () {
        const clickButtonId = $(this).attr("id");
        console.log(clickButtonId);
        let site_url = "";

        switch (clickButtonId) {
            case "blog":
                site_url = "https://blog.naver.com/zguhada";
                break;
            case "instagram":
                site_url = "https://www.instagram.com/zguhada/";
                break;
            default:
                break;
        }

        if (site_url) {
            window.open(site_url, "_target");
        }
    });
});