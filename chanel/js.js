$(document).ready(function () {


  // .con00_txt em 타이핑 글씨 나오기 설정
  let txt = $('.con00_txt .box').text().split("")
  console.log(txt)
  let ti = txt.length
  console.log(ti)
  console.log(txt[5])

  let tt = 0;

  setInterval(function () {
    if (tt < ti)

      $('.cursor').append(txt[tt])
    tt++;


  }, 300);


  // 화면의 높이값을 찾아서 섹션의 높이값에 대입해라.

  let ht = $(window).height();
  $('header').height(ht)
  $('section').height(ht)
  $('.con02').height(ht * 1.5)
  $('.con03').height(ht * 3.225)

  // 브라우저가 리사이즈 될때 마다, 섹션의 높이를 윈도우의 높이로 변환해라.
  $(window).resize(function () {

    let ht = $(window).height();
    $('header').height(ht)
    $('section').height(ht)
    $('.con02').height(ht * 1.5)
    $('.con03').height(ht * 3.226)
  });

  // gnb의 li를 클릭할때, 섹션의 순번을 찾아 각자의 높이만큼씩 스크롤을 움직여라.
  $('.gnb li').click(function () {

    let ht = $(window).height();
    let i = $(this).index();
    let nowTop = ht * i;

    $('html,body').stop().animate({
      screenTop: nowTop
    }, 1400)


  //   // 메뉴에 on값을 주어라.
    $('.gnb li').removeClass('on')
    $(this).addClass('on')
  });


  // 스크롤의 값이 일정크기의 값에 도달했을때 해당section이 나타나라.
  $(window).scroll(function(){

    let sc =$(this).scrollTop();
    let sec01 =$('section').eq(1).offset().top;

    if(sc>=sec01-300){
      $('section').eq(1).addClass('on')
    }else {
      $('section').eq(1).removeClass('on')
    }
  });

  let a=0;
  // con02의 i를 클릭할때 article의 on값을 붙여라.
  $('.con02 i').click(function(){

    a++;
    if(a==3)a=0;
    console.log(a)
    $('.con02 article').removeClass('on')
    $('.con02 article').eq(a-1).addClass('on')

  });




  //  gnb의 li를 클릭했을때, 해당 gnb의 순번과 일치하는 section의 offset.top값을 찾고
  // 그값을 body에게 animate로 나타내라.
  $('.gnb li').click(function (e) {

    e.preventDefault()

    let a = $(this).index()
    let b = $('section').eq(a + 1).offset().top

    $('html,body').stop().animate({
      scrollTop: b
    }, 1300)
    $('h1').text(b)

  })

    // header에서 마우스를 내렸을때, con00의 위치로 scroll의 위치가 바뀌어라.

    $('header').mousewheel(function(event,delta){
      let ht =$(window).height();
  
      if(delta<0){
      let con00Top=$('section').eq(1).offset().top;
        $('html,body').stop().animate({scrollTop:con00Top},800)
      }

    });
  
      // con00에서 마우스를 올릴때 스크롤탑이 0으로 가라.
      $('section').eq(1).mousewheel(function(event,delta){
    
          if(delta>0){
            $('html,body').stop().animate({scrollTop:0},800)
          }
        // con00에서 마우스를 내릴때 con01로 가라.
        if(delta<0){
          let con01Top=$('section').eq(2).offset().top;
      
          $('html,body').stop().animate({scrollTop:con01Top},800)
        }
      
        });

      //con01에서 마우스를 올렸을때, con00으로 가라.
      $('.con01').mousewheel(function(event,delta){

        if(delta>0){
          let con00Top=$('section').eq(1).offset().top;
      
          $('html,body').stop().animate({scrollTop:con00Top},800)
        }
      })
      




})