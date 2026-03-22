/*
$()로 찾는 객체가 여러 개인 경우
$().eq(0) $().eq(1) $().eq(2) 같은 형식으로 1개의 객체 선택 가능
선택하지 않는 경우 모든 객체 선택
*/


let btn = $('.tab-button');
let content = $('.tab-content');
/*
for (let i = 0; i < btn.length; i++) {
    btn.eq(i).on('click', function () {
        tab_func(i);
    });
}
*/
function tab_func(i) {
    btn.removeClass('orange');
    content.removeClass('show');
    btn.eq(i).addClass('orange');
    content.eq(i).addClass('show');
}

//이벤트 버블링 이용해서 이벤트 리스너 1개만 사용해서 기능 개발
$('.list').click(function(e){ //.on('click', ...) 축약
    tab_func(e.target.dataset.id); //data-id를 이용해서 코드 축약
});