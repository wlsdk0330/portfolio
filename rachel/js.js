$(document).ready(function(){

    $('header li').eq(0).click(function(){
        $('header').stop().animate({'top':'94.6%', 'left':'0'},1000)
        $('.main').removeClass('on')
        $('article').eq(0).stop().animate({'top':0, 'right':'-100%'},1000)
        $('article').eq(1).stop().animate({'top':0, 'right':'-100%'},1000)
        $('article').eq(2).stop().animate({'top':0, 'right':'-200%'},1000)
        $('article').eq(3).stop().animate({'top':0, 'right':'-300%'},1000)
    })
    $('.right a').eq(0).click(function(){
         // header가 상단으로 이동한다.
        $('header').stop().animate({'top':'3%','left':'1%'},1000)
        $('.main').addClass('on')
        $('article').eq(0).stop().animate({'top':0, 'right':0},1000)
        $('article').eq(1).stop().animate({'top':0, 'right':'-100%'},1000)
        $('article').eq(2).stop().animate({'top':0, 'right':'-200%'},1000)
        $('article').eq(3).stop().animate({'top':0, 'right':'-300%'},1000)
    })

    $('header li').eq(1).click(function(){

        // header가 상단으로 이동한다.
        $('header').stop().animate({'top':'3%','left':'1%'},1000)
        $('.main').addClass('on')
        $('article').eq(0).stop().animate({'top':0, 'right':0},1000)
        $('article').eq(1).stop().animate({'top':0, 'right':'-100%'},1000)
        $('article').eq(2).stop().animate({'top':0, 'right':'-200%'},1000)
        $('article').eq(3).stop().animate({'top':0, 'right':'-300%'},1000)
    })
    $('.right a').eq(1).click(function(){
        // header가 상단으로 이동한다.
        $('header').stop().animate({'top':'2%' , 'left':'25%'},1000)
        $('.main').addClass('on')
        $('article').eq(1).stop().animate({'top':0, 'right':0},1000)
        $('article').eq(0).stop().animate({'top':0, 'right':'100%'},1000)
        $('article').eq(2).stop().animate({'top':0, 'right':'-200%'},1000)
        $('article').eq(3).stop().animate({'top':0, 'right':'-300%'},1000)
    })
    $('header li').eq(2).click(function(){

        // header가 상단으로 이동한다.
        $('header').stop().animate({'top':'2%' , 'left':'25%'},1000)
        $('.main').addClass('on')
        $('article').eq(1).stop().animate({'top':0, 'right':0},1000)
        $('article').eq(0).stop().animate({'top':0, 'right':'100%'},1000)
        $('article').eq(2).stop().animate({'top':0, 'right':'-200%'},1000)
        $('article').eq(3).stop().animate({'top':0, 'right':'-300%'},1000)
    })
    $('.right a').eq(2).click(function(){
        // header가 상단으로 이동한다.
        $('header').stop().animate({'top':'3%','left':'1%'},1000)
        $('.main').addClass('on')
        $('article').eq(2).stop().animate({'top':0, 'right':0},1000)
        $('article').eq(0).stop().animate({'top':0, 'right':'200%'},1000)
        $('article').eq(1).stop().animate({'top':0, 'right':'100%'},1000)
        $('article').eq(3).stop().animate({'top':0, 'right':'-300%'},1000)
    })
    $('header li').eq(3).click(function(){

        // header가 상단으로 이동한다.
        $('header').stop().animate({'top':'3%','left':'1%'},1000)
        $('.main').addClass('on')
        $('article').eq(2).stop().animate({'top':0, 'right':0},1000)
        $('article').eq(0).stop().animate({'top':0, 'right':'200%'},1000)
        $('article').eq(1).stop().animate({'top':0, 'right':'100%'},1000)
        $('article').eq(3).stop().animate({'top':0, 'right':'-300%'},1000)
    })
    $('.right a').eq(3).click(function(){
        // header가 상단으로 이동한다.
        $('header').stop().animate({'top':'3%','left':'1%'},1000)
        $('.main').addClass('on')
        $('article').eq(3).stop().animate({'top':0, 'right':0},1000)
        $('article').eq(0).stop().animate({'top':0, 'right':'300%'},1000)
        $('article').eq(1).stop().animate({'top':0, 'right':'200%'},1000)
        $('article').eq(2).stop().animate({'top':0, 'right':'100%'},1000)
    })
    $('header li').eq(4).click(function(){

        // header가 상단으로 이동한다.
        $('header').stop().animate({'top':'3%','left':'1%'},1000)
        $('.main').addClass('on')
        $('article').eq(3).stop().animate({'top':0, 'right':0},1000)
        $('article').eq(0).stop().animate({'top':0, 'right':'300%'},1000)
        $('article').eq(1).stop().animate({'top':0, 'right':'200%'},1000)
        $('article').eq(2).stop().animate({'top':0, 'right':'100%'},1000)
    });
    // 화면의 높이값을 찾아서 아티클의 높이값에 대입해라.
    let ht =$(window).height();
    $('.main').height(ht)
    $('article').height(ht)
    // 브라우저가 리사이즈 될때 마다 아티클의 높이를 윈도우의 높이로 변환해라.
    $(window).resize(function(){

        let ht =$(window).height();
    $('.main').height(ht)
    $('article').height(ht)

    })

    // vid의 버튼을 클릭하면 con의 비디오가 움직여라
    i=0;
    $('.vid .r').click(function(){

        if(i<5)i++;
        $('.con').css({'transform':'rotate('+ (0-(60*-i)) +'deg)'})
    })

    $('.vid .l').click(function(){

        if(i>-5)i--;
        $('.con').css({'transform':'rotate('+ (0-(-60*i)) +'deg)'})
    });

    // btn의 li를 클릭하면 img와text의 p의 해당순번을 찾고 on값을 붙여라.
    $('.btn li').click(function(){

        let a = $(this).index();
        $('.img p').removeClass('on')
        $('.img p').eq(a).addClass('on')
        $('.text p').removeClass('on')
        $('.text p').eq(a).addClass('on')
    });

    // .btn2의 li를 클릭하면 clip의 li의 맞는 순번을 찾고 on값을 주어라.
    $('.btn2 li').click(function(){

        let pc = $(this).index();
        $('.clip li').removeClass('on')
        $('.clip li').eq(pc).addClass('on')
    });

    // 아티클1번의 버튼을 클릭하면 div의 ul이1800px씩 움직여라.
    a=0;
    $('.gal button').eq(1).click(function(){
        if(a<3)a++;

        $('.gal ul').css({'left':-1440*a})
    })
    $('.gal button').eq(0).click(function(){
        if(a>0)a--;
        $('.gal ul').css({'left':-1440*a})
    });

    // vid안의 비디오를 클릭하면 재생되라.
    let nv1=$('.nv1 video').get(0);
    $('.nv1 button').click(function(){

        nv1.play()
    })

    let nv2=$('.nv2 video').get(0);
    $('.nv2 button').click(function(){

        nv2.play()
    })
    let nv3=$('.nv3 video').get(0);
    $('.nv3 button').click(function(){

        nv3.play()
    });

    for (var n = 1; n<30; n++){
        $('<img src="img/nb'+ n + '.jpg">').appendTo('.g')
    }
    let imgs
    $('.g').html(imgs);
    $('.g').mousemove(function(e){
        let posx= e.pageX;
        let gw=$('.g').width()

        let percent =Math.floor((posx/gw)*29)
        console.log(percent)

        $('.g>img').hide()
        $('.g>img').eq(percent).show()
    })

    // 아티클4번의 비디오를 클릭하면 재생하고 다시클릭하면 멈춰라.
    let vid1 =$('.vi1 video').get(0);
    $('.p1').click(function(){
        vid1.play()
    })

    let vid2 =$('.vi2 video').get(0);
    $('.p2').click(function(){
        vid2.play()
    })

    let vid3 =$('.vi3 video').get(0);
    $('.p3').click(function(){
        vid3.play()
    });



})