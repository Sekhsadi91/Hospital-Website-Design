new WOW().init();

$('.to-top a').click(function(){
    $('html,body').animate({'scrollTop': 0,},1000);

    return false;
});

$(window).scroll(function(){
    if($(window).scrollTop()>200){
        $('.to-top a').show();
    }
    else (
        $('.to-top a').hide()
    );
})

$("a[href^='#']").click(function(e) {
	e.preventDefault();
	
	var position = $($(this).attr("href")).offset().top;

	$("body, html").animate({
		scrollTop: position
	} /* speed */ );
});



document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
     let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
       current += increment;
       obj.textContent = current;
       if (current == end) {
        clearInterval(timer);
       }
      }, step);
    }
    counter("count1", 0, 120, 1000);
    counter("count2", 0, 100, 1000);
    counter("count3", 0, 1200, 1000);
    counter("count4", 0, 130, 1000);
   });