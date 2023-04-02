
/*swiper api*/
new Swiper('.notice .swiper', {
    direction: 'vertical',//수직 슬라이드
    autoplay: true, //자동재생
    loop: true //반복 재생
});
new Swiper('.promotion .swiper', {
    autoplay: true,
    loop: true,
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    pagination: { // 페이지 번호 사용
        el: '.promotion .swiper-pagination', // 페이지 번호 요소
        clickable: true // 사용자의 페이지 번호 제어 여부
    },
    navigation: { // 슬라이드 이전/다음 버튼 사용
        prevEl: '.promotion .swiper-button-prev', // 이전 버튼 요소
        nextEl: '.promotion .swiper-button-next' // 다음 버튼 요소
    }
});
new Swiper('.awards .swiper', {
    autoplay: true, // 자동 재생 여부
    loop: true, // 반복 재생 여부
    spaceBetween: 30, // 슬라이드 사이 여백
    slidesPerView: 5, // 한 번에 보여줄 슬라이드 개수
    navigation: { // 슬라이드 이전/다음 버튼 사용
        prevEl: '.awards .swiper-button-prev', // 이전 버튼 요소
        nextEl: '.awards .swiper-button-next' // 다음 버튼 요소
    }
});

// 슬라이드 영역 요소 검색!
const promotionEl = document.querySelector('section.promotion');
// 슬라이드 영역를 토글하는 버튼 검색!
const promotionToggleBtn = document.querySelector('.toggle-promotion');

// 토글 버튼을 클릭하면,
promotionToggleBtn.addEventListener('click', function () {
    if (promotionEl.classList.contains('hide')) {
        promotionEl.classList.remove('hide');
    } else {
        promotionEl.classList.add('hide');
    }
});