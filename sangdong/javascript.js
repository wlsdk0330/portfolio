$(document).ready(function(){

    // con02_txt안에 li를 클릭했을때, 클릭한 아이의 순번을 찾아라.

    $('.con02_txt li').click(function(){

        let i =$(this).index();

        $('.con02_img li').removeClass('on')
        $('.con02_img li').eq(i).addClass('on')
    
    });

    // slide_btn의 li를 클릭했을때 landing_img의 li의 순번을 찾아라.
    $('.slide_btn li').click(function(){

        let i =$(this).index();
        $('.main_img li').removeClass('on')
        $('.main_img li').eq(i).addClass('on')
        $('.slide_btn li').removeClass('on')
        $('.slide_btn li').eq(i).addClass('on')

    })
    let ti=0;
    setInterval(function(){
        if(ti<2)ti++;
        if(ti==2)ti=-1;
        
    
    $('.slide_btn li').eq(ti).trigger('click')
    },4000);


    // menu li에 마우스를 올렸을때, depth2가 보여라.
    $('.menu li').mouseenter(function(){

        let tt =$(this).index()
        $('.depth2').removeClass('on')
        $(this).addClass('on')

    });

    // .con03이 무한으로 생겨라.
    let tp =0;
    let wd= $('.con03_img li').width();
    $('.con03 button').click(function(){

        tp++;
        console.log(-wd*tp-10+'px')

        $('.con03_img li').eq(tp-1).clone().appendTo('.con03_img ul');
        $('.con03_img ul').css({'left':(-wd-10)*tp+'px'})
    })
    
    // 자동으로 클릭한 효과를 내라
    let slide = setInterval(function(){
        $('.con03 button').trigger('click');
    },2000)
    
    // 마우스를 올리면 멈추고 마우스가 떠나면 움직여라.
    $('.con03_img').mouseenter(function(){
        clearInterval(slide)
    })
    $('.con03_img').mouseleave(function(){
        slide = setInterval(function(){
            $('.con03 button').trigger('click');
        },2000)
    })


})