
$(document).ready(function(){
  $('.navbar').find('ul li a').bind('click', function(){
    if($(this).attr('href') === '#imgdemo'){
      $('#form').css('display', 'none');
    }
        alert("testing jjquery load..." + $(this).attr('href'));
});});
