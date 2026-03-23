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

//이벤트 버블링 이용해서 위 for문을 이벤트 리스너 1개만 사용해서 기능 개발
$('.list').click(function (e) { //.on('click', ...) 축약
    tab_func(e.target.dataset.id); //data-id를 이용해서 코드 축약
});

function tab_func(i) {
    btn.removeClass('orange');
    content.removeClass('show');
    btn.eq(i).addClass('orange');
    content.eq(i).addClass('show');
}

let car = ['소나타', 50000, 'white'];
let car2 = { name: '소나타', price: [50000, 3000, 4000] };

$('#price').text(car[0] + ' / ' + car2.price[0]);

let shirt = [95, 100, 105];
let pants = [28, 30, 32, 34];

let selector = $('.form-group .form-select');
selector.eq(0).on('input', function () {
    if (this.value == '셔츠') {
        selector.eq(1).removeClass('form-hide');
        selector.eq(1).html('');
        shirt.forEach(function (a, i) { // array의 forEach 메서드 사용법 (a는 array의 순서대로의 값, i는 0부터 1씩 증가)
            selector.eq(1).append(`<option>${a}</option>`);
        });
    }
    else if (this.value == '바지') {
        selector.eq(1).removeClass('form-hide');
        selector.eq(1).html('');
        pants.forEach(function (a) {
            selector.eq(1).append(`<option>${a}</option>`);
        });
    }
    else selector.eq(1).addClass('form-hide');
});

let obj = { name: 'kim', age: 20 };
for(let key in obj){ //object에 대한 반복문 사용법 (for 변수 in 오브젝트)
    console.log(obj[key]); //변수는 오브젝트의 key 값 순서대로 반환, 이 예시에서는 'name', 'age'
    
}

