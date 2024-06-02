$(document).ready(function () {
  //
  $("#header").append(`
  <!-- 서브메뉴 -->
  <div class="sub_nav_wrap">
      <!-- 회사소개 서브메뉴 -->
      <div class="sub_nav_body flex justify_center align_start">
          <div class="sub_nav_col empty_col"></div>
          <div class="sub_nav_col">
              <a href="../../introduce/greeting/">
                  <p class="text_16 black2 semi_bold hover">인사말</p>
              </a>
          </div>
          <div class="sub_nav_col text_16 black2 semi_bold">
              <a href="../../introduce/vision_mission/">
                  <p class="text_16 black2 semi_bold hover">VISION <br />& MISSION</p>
              </a>
          </div>
          <div class="sub_nav_col">
              <p class="text_16 black2 semi_bold mb_16">
                  <a class="hover" href="../../introduce/affiliates/">주요 계열사</a>
              </p>
              <div class="sub_nav_list flex flex_col align_start justify_center">
                  <a href="../../introduce/affiliates/#factory">
                      <div class="sub_nav gray semi_bold left hover">천일에너지 팩토리</div>
                  </a>
                  <a href="../../introduce/affiliates/#hub">
                      <div class="sub_nav gray semi_bold left hover">천일에너지 허브</div>
                  </a>
                  <!-- <a href="../introduce/affiliates.html#service">
                      <div class="sub_nav gray semi_bold left hover">천일 서비스</div>
                  </a> -->
                  <a href="../../introduce/affiliates/#sugerbot">
                      <div class="sub_nav gray semi_bold left hover">지구하다</div>
                  </a>
                  <a href="../../introduce/affiliates/#pathfinder">
                      <div class="sub_nav gray semi_bold left hover">천일 패스파인더</div>
                  </a>
                  <a href="../../introduce/affiliates/#chunilCD">
                      <div class="sub_nav gray semi_bold left hover">천일C&D</div>
                  </a>
                  <a href="../../introduce/affiliates/#chunil">
                      <div class="sub_nav gray semi_bold left hover">천일</div>
                  </a>
                  <a href="../../introduce/affiliates/#solapark">
                      <div class="sub_nav gray semi_bold left hover">천일 솔라파크</div>
                  </a>
              </div>
          </div>
          <div class="sub_nav_col">
              <a href="../../introduce/history/">
                  <p class="text_16 black2 semi_bold hover">주요 연혁</p>
              </a>
          </div>
          <div class="sub_nav_col">
              <a href="../../introduce/ci/">
                  <p class="text_16 black2 semi_bold hover">CI소개</p>
              </a>
          </div>
      </div>
      <!-- 사업영역 서브메뉴 -->
      <div class="sub_nav_body flex justify_center align_start">
          <div class="sub_nav_col empty_col"></div>
          <div class="sub_nav_col">
              <p class="text_16 black2 semi_bold mb_16">
                  <a class="hover" href="../../business/solution/">폐기물 처리<br />원스탑 솔루션</a>
              </p>
              <div class="sub_nav_list flex flex_col align_start justify_center">
                  <a href="../../business/solution/">
                      <div class="sub_nav gray semi_bold left hover">PROCESS</div>
                  </a>
                  <a href="../../business/solution/?tab=effect">
                      <div class="sub_nav gray semi_bold left hover">EFFECT</div>
                  </a>
                  <a href="../../business/solution/?tab=inAuth">
                      <div class="sub_nav gray semi_bold left hover">인허가</div>
                  </a>
              </div>
          </div>
          <div class="sub_nav_col">
              <p class="text_16 black2 semi_bold mb_16">
                  <a class="hover" href="../../business/jiguhada/">폐기물 처리<br />플랫폼 지구하다</a>
              </p>
              <div class="sub_nav_list flex flex_col align_start justify_center" id="jiguhada_nav">
                  <a href="../../business/jiguhada/#saas">
                      <div class="sub_nav gray semi_bold left hover">대형 생활폐기물 SaaS</div>
                  </a>
                  <a href="../../business/jiguhada/#reception">
                      <div class="sub_nav gray semi_bold left hover">공사장 생활폐기물 접수</div>
                  </a>
                  <a href="../../business/jiguhada/#handover">
                      <div class="sub_nav gray semi_bold left hover">폐기물 전자 인계서</div>
                  </a>
                  <a href="../../business/jiguhada/#recycling">
                      <div class="sub_nav gray semi_bold left hover">폐플라스틱 리사이클링봇</div>
                  </a>
                  <a href="../../business/jiguhada/#gps">
                      <div class="sub_nav gray semi_bold left hover">환경공단 GPS 단말기</div>
                  </a>
                  <a href="../../business/jiguhada/#system">
                      <div class="sub_nav gray semi_bold left hover">폐기물 처리 카드 결제 시스템</div>
                  </a>
              </div>
          </div>

      </div>
      <!-- 상생&협력 서브메뉴 -->
      <div class="sub_nav_body flex justify_center align_start">
          <div class="sub_nav_col empty_col"></div>
          <div class="sub_nav_col">
              <p class="text_16 black2 semi_bold mb_16">
                  <a class="hover" href="../../cooperation/governance/">공공기관</a>
              </p>
              <div class="sub_nav_list flex flex_col align_start justify_center">
                  <a href="../../cooperation/governance/#effect">
                      <div class="sub_nav gray semi_bold left hover">상생&협력 효과</div>
                  </a>
                  <a href="../../cooperation/governance/#work">
                      <div class="sub_nav gray semi_bold left hover">상생&협력 업무</div>
                  </a>
                  <a href="../../cooperation/governance/#logo">
                      <div class="sub_nav gray semi_bold left hover">상생&협력 공공기관</div>
                  </a>
              </div>
          </div>
          <div class="sub_nav_col">
              <a href="../../cooperation/partners/">
                  <p class="text_16 black2 semi_bold hover">민간기업</p>
              </a>
          </div>
          <div class="sub_nav_col">
              <a href="../../cooperation/proposal/">
                  <p class="text_16 black2 semi_bold hover">제휴 / 제안</p>
              </a>
          </div>
      </div>
      <!-- 홍보센터 서브메뉴 -->
      <div class="sub_nav_body flex justify_center align_start" style="padding: 19px 0px;">
          <div class="sub_nav_col empty_col"></div>
          <div class="sub_nav_col">
              <a href="../../press/">
                  <p class="text_16 black2 semi_bold hover">보도자료</p>
              </a>
          </div>
          <div class="sub_nav_col">
              <a href="../../video/">
                  <p class="text_16 black2 semi_bold hover">광고영상</p>
              </a>
          </div>
          <div class="sub_nav_col">
              <a href="../../notice/">
                  <p class="text_16 black2 semi_bold hover">공지사항</p>
              </a>
          </div>
      </div>
  </div>
  <!-- 상단 헤더 -->
  <nav>
      <a href="../../index.html" class="logo">
          <img id="active_logo" src="../../assets/ci_logo.svg" alt="천일에너지 로고" />
          <img src="../../assets/ci_logo_wh.svg" alt="천일에너지 로고" />
      </a>

      <ul class="flex justify_center align_center">
          <li><a>회사소개</a></li>
          <li><a>사업영역</a></li>
          <li><a>상생&협력</a></li>
          <li><a>홍보센터</a></li>
          <li><a>인재채용</a></li>
      </ul>

      <div class="menu_wrap flex justify_end align_center">
          <button type="button" id="partner_offer" class="center white text_14 justify_center align_center">
              제휴제안
          </button>
          <button type="button" id="menu_open" class="hover center justify_center align_center">
              <img src="../../assets/menu.png" alt="메뉴 아이콘" />
          </button>
      </div>
  </nav>
  `);

  //
  $('#sitemap').append(`
    <div class="sitemap_header">
        <a href="../../index.html" class="logo">
            <img src="../../assets/ci_logo_wh.svg" alt="천일에너지 로고" />
        </a>
        <div class="menu_wrap flex justify_end align_center">
            <button type="button" id="partner_offer"
                class="partner_offer center white text_14 justify_center align_center">
                제휴제안
            </button>
            <button type="button" id="sitemap_close" class="hover center justify_center align_center">
                <img src="../../assets/ico_close_sitemap.svg" alt="닫기 아이콘" />
            </button>
        </div>
        </div>

        <div class="sitemap_body flex justify_space_between align_stretch">
        <!-- 회사소개 -->
        <div class="sitmap_col">
            <p class="title left white">회사소개</p>
            <div class="nav_list flex flex_col justify_start align_start">
                <a href="../../introduce/greeting/">
                    <p class="sub_title left white nav_hover">인사말</p>
                </a>
                <a href="../../introduce/vision_mission/">
                    <p class="sub_title left white nav_hover">VISION<br />& MISSION</p>
                </a>
                <div class="sub_nav_list nav_hover">
                    <p class="sub_title left white">주요 계열사</p>
                    <a href="../../introduce/affiliates/#factory">
                        <div class="sub_nav left white">천일에너지 팩토리</div>
                    </a>
                    <a href="../../introduce/affiliates/#hub">
                        <div class="sub_nav left white">천일에너지 허브</div>
                    </a>
                    <!-- <a href="../../introduce/affiliates/#service">
                        <div class="sub_nav left white">천일 서비스</div>
                    </a> -->
                    <a href="../../introduce/affiliates/#sugerbot">
                        <div class="sub_nav left white">지구하다</div>
                    </a>
                    <a href="../../introduce/affiliates/#pathfinder">
                        <div class="sub_nav left white">천일 패스파인더</div>
                    </a>
                    <a href="../../introduce/affiliates/#chunilCD">
                        <div class="sub_nav left white">천일C&D</div>
                    </a>
                    <a href="../../introduce/affiliates/#chunil">
                        <div class="sub_nav left white">천일</div>
                    </a>
                    <a href="../../introduce/affiliates/#solapark">
                        <div class="sub_nav left white">천일 솔라파크</div>
                    </a>
                </div>
                <a href="../../introduce/history/">
                    <p class="sub_title left white nav_hover">주요 연혁</p>
                </a>
                <a href="../../introduce/ci/">
                    <p class="sub_title left white nav_hover">CI소개</p>
                </a>
            </div>
        </div>
        <!-- 사업영역 -->
        <div class="sitmap_col">
            <p class="title left white">사업영역</p>
            <div class="nav_list flex flex_col justify_start align_start">
                <div class="sub_nav_list nav_hover" id="same_page_url">
                    <p class="sub_title left white">폐기물 처리<br />원스탑 솔루션</p>
                    <a href="../../business/solution/">
                        <div class="sub_nav left white">PROCESS</div>
                    </a>
                    <a href="../../business/solution/?tab=effect">
                        <div class="sub_nav left white">EFFECT</div>
                    </a>
                    <a href="../../business/solution/?tab=inAuth">
                        <div class="sub_nav left white">인허가</div>
                    </a>
                </div>
                <div class="sub_nav_list nav_hover">
                    <p class="sub_title left white">폐기물 처리<br />플랫폼 지구하다</p>
                    <a href="../../business/jiguhada/#saas">
                        <div class="sub_nav left white">대형 생활폐기물 SaaS</div>
                    </a>
                    <a href="../../business/jiguhada/#reception">
                        <div class="sub_nav left white">공사장 생활폐기물 접수</div>
                    </a>
                    <a href="../../business/jiguhada/#handover">
                        <div class="sub_nav left white">폐기물 전자 인계서</div>
                    </a>
                    <a href="../../business/jiguhada/#recycling">
                        <div class="sub_nav left white">폐플라스틱 리사이클링봇</div>
                    </a>
                    <a href="../../business/jiguhada/#gps">
                        <div class="sub_nav left white">환경공단 GPS 단말기</div>
                    </a>
                    <a href="../../business/jiguhada/#system">
                        <div class="sub_nav left white">폐기물 처리 카드 결제 시스템</div>
                    </a>

                </div>

            </div>
        </div>
        <!-- 상생&협력 -->
        <div class="sitmap_col">
            <p class="title left white">상생&협력</p>
            <div class="nav_list flex flex_col justify_start align_start">
                <div class="sub_nav_list nav_hover">
                    <p class="sub_title left white">공공기관</p>
                    <a href="../../cooperation/governance/#effect">
                        <div class="sub_nav left white">상생&협력 효과</div>
                    </a>
                    <a href="../../cooperation/governance/#work">
                        <div class="sub_nav left white">상생&협력 업무</div>
                    </a>
                    <a href="../../cooperation/governance/#logo">
                        <div class="sub_nav left white">상생&협력 공공기관</div>
                    </a>
                </div>
                <a href="../../cooperation/partners/">
                    <p class="sub_title left white nav_hover">민간기업</p>
                </a>
                <a href="../../cooperation/proposal/">
                    <p class="sub_title left white nav_hover">제휴 / 제안</p>
                </a>
            </div>
        </div>
        <!-- 홍보센터 -->
        <div class="sitmap_col">
            <p class="title left white">홍보센터</p>
            <div class="nav_list flex flex_col justify_start align_start">
                <a href="../../press/">
                    <p class="sub_title left white nav_hover">보도자료</p>
                </a>
                <a href="../../video/">
                    <p class="sub_title left white nav_hover">광고영상</p>
                </a>
                <a href="../../notice/">
                    <p class="sub_title left white nav_hover">공지사항</p>
                </a>
            </div>
        </div>
        <!-- 인재채용 -->
        <div class="sitmap_col">
            <a href="https://www.saramin.co.kr/zf_user/company-info/view?csn=T0RHaXAxd2t3UCtoZGk3eSt6Yk8wQT09">
                <p class="title left white nav_hover" style="cursor: pointer;">인재채용</p>
            </a>
        </div>
    </div>
  `);

  //
  $("footer").append(`
    <div class="footer_wrap flex flex_col justify_start align_stretch">
        <div class="footer_row flex justify_space_between align_start">
            <div class="footer_contents flex flex_col justify_start align_start">
                <!-- logo & footer_nav -->
                <div class="flex justify_start align_center">
                    <a href="../../index.html">
                        <img class="logo" src="../../assets/ci_logo_wh.svg" alt="천일 에너지 로고" />
                    </a>
                    <div class="footer_nav_list flex justify_start align_center"></div>
                </div>
                <!-- footer_info & footer_cs -->
                <div class="flex justify_space_between align_start" style="gap: 80px;">
                    <div class="footer_info flex flex_col justify_start align_start">
                        <p class="text_14 left">
                            <b>천일에너지 대표</b>박상원
                            <span class="only_pc_block">
                                <b style="margin-left: 20px;">사업자등록번호</b> 127-86-25218
                            </span>
                        </p>
                        <p class="text_14 left only_mo_block"><b>사업자등록번호</b> 127-86-25218</p>
                        <p class="text_14 left"><b>서울사무실 소재지</b>서울 성동구 성수이로 51 서울숲한라시그마밸리 601호</p>
                        <p class="text_14 left"><b>사업소재지</b>경기도 포천시 영중면 양문공단로3길 20</p>
                    </div>
                    <div class="footer_cs flex flex_col justify_start align_start">
                        <p class="text_14 left"><b>TEL</b>02-6907-1017</p>
                        <p class="text_14 left"><b>FAX</b>02-3409-1014</p>
                        <p class="text_14 left"><b>CS</b>평일 09:00 - 18:00(점심시간 12:00 - 13:00)</p>
                    </div>
                </div>
            </div>
            <!-- Family Site -->
            <div class="footer_family">
                <div class="area-custom-select">
                    <div class="custom-select" tabindex="0">
                        <span class="custom-select-text">Family Site</span>
                        <img src="../../assets/ico_down_familysite.svg" class="custom-select-arrow">
                    </div>
                    <ul class="custom-select-list" style="display:none;">
                        <li value="light" class="custom-select-option">천일조명</li>
                        <!-- <li value="service" class="custom-select-option">천일서비스</li> -->
                    </ul>
                    <select class="select-origin">
                        <option value="light" selected="selected">천일조명</option>
                        <option value="service">천일서비스</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="footer_row flex justify_space_between align_end">
            <p class="copyright left">Copyright 2024 © Chunil Energy. All Right Reserved.</p>

            <div class="footer_social_wrap flex flex_row justify_end align_end">
                <button id="instagram">
                    <img src="../../assets/social/instagram.png" alt="instagram" class="hover" />
                </button>
                <button id="blog"><img src="../../assets/social/blog.png" alt="blog" class="hover" /></button>
            </div>
        </div>
    </div>
  `);
});
