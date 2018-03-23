
$(document).ready(function(){
  var ac = null;
  var h = function(o){
    if($(o).hasClass('show')){
        $(o).removeClass('show');
    }
  }
  $('.navbar').find('ul li a').bind('click', function(){
    if($(this).attr('href') === '#imgdemo'){
        h(ac);
        $('.demoImg').addClass('show');
        ac = $('.demoImg');
    }
    if($(this).attr('href') === '#formdemo'){
        h(ac);
        $('#form').addClass('show');
        ac = $('#form');
    }
     if($(this).attr('href') === '#vfordemo'){
        h(ac);
        $('#form').addClass('show');
        ac = $('#form');
    }
});});
