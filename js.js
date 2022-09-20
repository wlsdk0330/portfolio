$(document).ready(function () {

    // 실행문
    // 화면의 높이값을 찾아서 섹션의 높이값에 대입해라.
    let ht = $(window).height();
    $('section').height(ht)
    $('.portfolio').height(ht*1.3)
    // 브라우저가 리사이즈 될때마다, 섹션의 높이값에 대입해라.
    $(window).resize(function () {
        let ht = $(window).height();
        $('section').height(ht)
        $('.portfolio').height(ht*1.3)
    })

//     //  헤더의 li를 클릭했을때, 해당순번과 일치하는 section의 offset.top값을 찾고
//   // 그값을 body에게 animate로 나타내라.
  $('header li').click(function (e) {

    e.preventDefault()

    let a = $(this).index()
    let b = $('section').eq(a).offset().top
    console.log(a)

    $('html,body').stop().animate({
      scrollTop: b+2
    }, 1300)
    $('header a').removeClass('on')
    $('header a').eq(a).addClass('on')
  })

    // 타이핑글씨 나오기 설정
    let txt = $('.txt').text().split("")
    console.log(txt)
    let ti = txt.length
    console.log(ti)

    let tt=0;

    setInterval(function(){
        if(tt<ti)
        $('.cursor').append(txt[tt])
        tt++;
    },300)

    // detail 클릭시 팝업창이 나타나라.
    $('.ch li').eq(0).click(function(e){
        e.preventDefault()
        $('.pop1').css({'left':"15%"})
        $('.pop1 button').css({'display':"block"})
        $('body').addClass('on')
    })
    $('.pop1 button').click(function(){
        $('.pop1').css({'left':"-300vw"})
        $('.pop1 button').css({'display':"none"})
        $('body').removeClass('on')
    })
    $('.sd li').eq(0).click(function(e){
        e.preventDefault()
        $('.pop2').css({'left':"15%"})
        $('.pop2 button').css({'display':"block"})
        $('body').addClass('on')
    })
    $('.pop2 button').click(function(){
        $('.pop2').css({'left':"100%"})
        $('.pop2 button').css({'display':"none"})
        $('body').removeClass('on')
    })
    $('.ra li').eq(0).click(function(e){
        e.preventDefault()
        $('.pop3').css({'left':"15%"})
        $('.pop3 button').css({'display':"block"})
        $('body').addClass('on')
    })
    $('.pop3 button').click(function(){
        $('.pop3').css({'left':"100%"})
        $('.pop3 button').css({'display':"none"})
        $('body').removeClass('on')
    })

      // 스크롤의 값이 일정크기의 값에 도달했을때 .tx가 나타나라.
  $(window).scroll(function(){

    let sc =$(this).scrollTop();
    let sec03 =$('section').eq(2).offset().top;

    if(sc>=sec03-200){
      $('.tx>p').addClass('on')
      $('.tx1').addClass('on')
      $('.tx2').addClass('on')
      $('.tx3').addClass('on')
      $('.tx4').addClass('on')
    }else {
      $('.tx>p').removeClass('on')
      $('.tx1').removeClass('on')
      $('.tx2').removeClass('on')
      $('.tx3').removeClass('on')
      $('.tx4').removeClass('on')
    }
  });


    // 스크롤의 값이 skill에 도달했을때, 퍼센트의 숫자가 카운팅되라.
    $(window).scroll(function(){

        let sc =$(this).scrollTop();
        let sec04 =$('section').eq(3).offset().top;
        var cnt = 0;
        var cnt0 = 0;
        if(sc>=sec04){

            $('.per p').addClass('on')    
        
        
	countUp();
    up = setInterval(countUp, 10);

    function countUp() {
        num= document.querySelector('.ds2 em');
        cnt++;
        if (cnt > 90) {
            clearInterval(up);
        } else {
            num.innerHTML=cnt;
        }
    }
    

    counterFn();

    function counterFn() {

      id0 = setInterval(count0Fn, 10);

      function count0Fn() {
        cnt0++;
        if (cnt0 > 80) {
          clearInterval(id0);
        } else {
          $(".sk_inner strong").text(cnt0);
        }
      }
    }
        }
        // else{
        //     $('.per p').removeClass('on')
        // }
      });

      

    // //   메뉴의 skill을 클릭했을때 퍼센트의 숫자와 막대가 올라가라.
    //   $('header li').eq(3).click(function () {


    //     if(sc>=sec04){

    //         $('.per p').addClass('on')    
    //     	var cnt = 0;
	// countUp();
    // up = setInterval(countUp, 10);

    // function countUp() {
    //     num= document.querySelector('.ds2 em');
    //     cnt++;
    //     if (cnt > 90) {
    //         clearInterval(up);
    //     } else {
    //         num.innerHTML=cnt;
    //     }
    // }
    // var cnt0 = 0;

    // counterFn();

    // function counterFn() {

    //   id0 = setInterval(count0Fn, 10);

    //   function count0Fn() {
    //     cnt0++;
    //     if (cnt0 > 80) {
    //       clearInterval(id0);
    //     } else {
    //       $(".sk_inner strong").text(cnt0);
    //     }
    //   }
    // }
    //     }
    //     else{
    //         $('.per p').removeClass('on')
    //     }

    
    
    //   })

	// var cnt = 0;
          

	// countUp();
    // up = setInterval(countUp, 10);

    // function countUp() {
    //     num= document.querySelector('.ds2 em');
    //     cnt++;
    //     if (cnt > 90) {
    //         clearInterval(up);
    //     } else {
    //         num.innerHTML=cnt;
    //     }
    // }
	

    // var cnt0 = 0;

    // counterFn();

    // function counterFn() {

    //   id0 = setInterval(count0Fn, 10);

    //   function count0Fn() {
    //     cnt0++;
    //     if (cnt0 > 80) {
    //       clearInterval(id0);
    //     } else {
    //       $(".sk_inner strong").text(cnt0);
    //     }
    //   }
    // }
})