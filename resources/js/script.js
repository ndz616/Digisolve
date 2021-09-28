// $(document).ready(function(){
//     $("h2").click(function(){
//         $(this).css("color","#ff0000");
//     });
// });
// changing color

// $(document).ready(function(){
//     $(".services-section").click(function(){
//         $(this).css("background-color","#000");
//     });
// });

// for sticky navigation 
$(document).ready(function(){
    $(".about-section").waypoint(function(direction){
        if(direction=="down"){
        $("nav").addClass('sticky-nav animate__animated animate__fadeIn');
    }
    else{
        $("nav").removeClass('sticky-nav animate__animated animate__fadeOut');
    } // try to do infinite fadeIn fadeout
    });


// animation on scroll for about-section
$(".js--about-section").waypoint(function(direction){
    $(".js--about-box").addClass('animate__animated animate__fadeIn'); 
    },{
        offset:'50%'
    });
// services section
$(".js--services-section").waypoint(function(direction){
    $(".js--service-box").addClass('animate__animated animate__fadeInDown'); 
    },{
        offset:'75%'
    });  


// smooth click scroll 
$(".js--packages-section").waypoint(function(direction){
    $(".js--enterprise").addClass('animate__animated animate__pulse'); 
    },{
        offset:'30%'
    });        

$(".js--scroll-to-contact").click(function(){
    $('html, body').animate({scrollTop:$('.js--contact').offset().top},1500)
})
$(".js--scroll-to-home").click(function(){
    $('html, body').animate({scrollTop:$('#home').offset().top},1000)
})
$(".js--scroll-to-about").click(function(){
    $('html, body').animate({scrollTop:$('.js--about-section').offset().top},1000)
})

});




