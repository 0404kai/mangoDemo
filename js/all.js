// $(document).ready(function () {
//     $('.menu').click(function (e) { 
//         e.preventDefault();
//         $('.menu').toggleClass('burger');
//     });

//     //滑動到一定位置再顯示 top 鍵
//     var $pc = $(window);    
//     $pc.scroll(function (){
//         if ($pc.scrollTop() > 100){    
//             $(".top").css('opacity','100');
//         }   else{
//             $(".top").css('opacity','0')
//         };
//     });

//     //回到頂部
//     $('.top').click(function(e){
//         e.preventDefault();
//         $('html, body').animate({
//             scrollTop: 0
//         },1000);
//     });
// });


//heart 點選效果
$('.heart').click(function(e){
    e.preventDefault();
    $(this).text('favorite');
});

//發票頁面切換
$('.post').click(function(e){
    e.preventDefault();
    $('#electronic').addClass('d-none');
    $('#post').removeClass('d-none');
    $('.post').addClass('active')
    $('.electronic').addClass('active')
});
$('.electronic').click(function(e){
    e.preventDefault();
    $('#electronic').removeClass('d-none');
    $('#post').addClass('d-none');
    $('.post').removeClass('active')
    $('.electronic').removeClass('active')
});