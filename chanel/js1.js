$(document).ready(function(){

    // 실행문
    // 화면의 높이값을 찾아서 섹션의 높이값에 대입해라.

  let ht = $(window).height();
  $('header').height(ht*0.2)
  $('con00').height(ht*0.8)
  $('.text').height(ht * 0.25)
  $('.con01').height(ht * 0.75)


    // 브라우저가 리사이즈 될때 마다, 섹션의 높이를 윈도우의 높이로 변환해라.
    $(window).resize(function () {

        let ht = $(window).height();
        $('header').height(ht*0.2)
        $('con00').height(ht*0.8)
        $('.text').height(ht * 0.25)
        $('.con01').height(ht * 0.75)
      });

    a= 0;
    // add를 클릭할때 마다 cart의 span의 숫자가 올라가라.
    $('.add').click(function(){

        a++;
        $('.cart span').addClass('on')
        $('.cart span').text(a)
    })
})