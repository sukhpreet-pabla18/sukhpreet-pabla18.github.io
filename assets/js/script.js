$(document).ready(function() {

  $("#bioButton").click(function() {
    $('html, body').animate({
      scrollTop: $("#bioSlide").offset().top
    },2000);

  });

	$("#accoladesButton").click(function() {
		$('html, body').animate({
			scrollTop: $("#accoladesSlide").offset().top
		},2000);

	});

$("#galleryButton").click(function() {
		$('html, body').animate({
			scrollTop: $("#gallerySlide").offset().top 
		},2000);

	});

$("#gifButton").click(function() {
		$('html, body').animate({
			scrollTop: $("#gifSlide").offset().top 
		},2000);

	});

$('#carousel-next').click(function() {
    left = parseInt($('#carousel').css('margin-left').replace("px",""));
    if (left == -18145) {
      setTimeout(function() {
        $('#carousel').css('margin-left', '0px');
      }, 300);
    }
    else {
      setTimeout(function() {
        $('#carousel').css('margin-left', left - 955);
      }, 300);
    }
});



  $('#carousel-prev').click(function() {
    left = parseInt($('#carousel').css('margin-left').replace("px",""));
    if (left == 0) {
      return false
    }
    else {
      setTimeout(function() {
        $('#carousel').css('margin-left', left + 955);
      }, 300);
    }

  });
 
  $('#forlife').addClass('off');


  $('#toggle').click(function() {
    if ($('.gif').hasClass('off')) {
      $('.gif').removeClass('off');
      $('#forlife').addClass('off');

    }
    else {
      $('.gif').addClass('off');
      $('#forlife').removeClass('off');
    }
  });

})