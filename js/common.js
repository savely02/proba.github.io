
$(document).ready(function($) {
 $("body").css("display", "none");
 $("body").fadeIn(500);
 $("a.tr").click(function(event){
  event.preventDefault();
  linkLocation = this.href;
  $("body").fadeOut(500, redirectPage);
});

 function redirectPage() {
  window.location = linkLocation;
}
$('.box_nav').click(function(){
  $('.cir').toggleClass('cir_active');
  $('.box_nav').toggleClass('box_nav-a');
  if ($(".open_menu").hasClass("open_menu-active")){
    $('.open_menu').removeClass('open_menu-active');
    $('.open_menu_box').removeClass('open_menu_box-active');
  }
  else {
    $(".open_menu").addClass('open_menu-active');
    $('.open_menu_box').addClass('open_menu_box-active');
  } 

});
});


$(document).ready(function(){

  $(window).scroll(function(){
    var bo = $(this).scrollTop();
    var a = $(".activew").css('opacity')
    $(".activew").html(bo);
    if ( bo <= 200 && a == 0) {$(".activew").stop().animate({'opacity':'1'},500)};
    if ( bo > 200 && a == 1) {$(".activew").stop().animate({'opacity':'0'},500)};
  })
})

$(function() {
    var height = $( '.activew' ).height(); //получаем высоту одного элемента
    $( '.container-100-2' ).height(height); //записываем высоту другому элементу
  });

jQuery(document).ready(function ($) {

 var images = [];
 $( ".lightbox" ).each(function( index ) {
  images.push($(this).attr('src'));
  $(this).attr('id',index)
});
  //Function to open LightBox
  $(document).on('click','.lightbox',function(){open_lb($(this).attr('id'));});

  $(document).on('click','#AI_lightbox .next',function(){
    if(parseInt($('#AI_lightbox img').attr('id')) < (images.length-1)){
      open_lb(parseInt($('#AI_lightbox img').attr('id'))+1)
    };
  });
  $(document).on('click','#AI_lightbox .prev',function(){
    if(parseInt($('#AI_lightbox img').attr('id')) > 0){
      open_lb(parseInt($('#AI_lightbox img').attr('id'))-1);
    };
  });
  
  function open_lb(id){
    $('body').append('<div id="AI_lightbox"><span class="close"><i class="material-icons">&#xE5CD;</i></span><img src="" alt="" /><span class="prev"><i class="material-icons">&#xE5CB;</i></span><span class="next"><i class="material-icons">&#xE5CC;</i></span></div>');
    $('#AI_lightbox').css('display','block');
    $('#AI_lightbox img').attr('id',id);
    $('#AI_lightbox img').attr('src',$('#'+id).attr('src'));
    $('#AI_lightbox').animate({opacity: 1});

  };
  
  //Function to close LightBox
  $(document).on('click','#AI_lightbox .close',function(){
    $('#AI_lightbox').animate({opacity: 0}, 200, function() {
      $('#AI_lightbox').css('display','none');
      $('#AI_lightbox').remove();

    });
  });

});


