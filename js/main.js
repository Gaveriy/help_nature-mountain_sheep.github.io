$('.close__link').click(function(e) {
    e.preventDefault();
    $('.popup-bg').fadeIn(400);
    $('html').addClass('no-scroll');
});
$('.close-popup').click(function() {
    $('.popup-bg').fadeOut(400);
    $('html').removeClass('no-scroll');
});
$('.submit_button').click(function(e) {
    e.preventDefault();
    $('.popup-bg').fadeOut(400);
    $('html').removeClass('no-scroll');
})
$('.popup-bg').click(function (e) {
    if (!$(e.target).closest(".popup").length) {
      $('.popup-bg').fadeOut(400);
      $('html').removeClass('no-scroll');
    }
  });
  $('.footer_text._popup').click(function(e) {
    e.preventDefault();
    $('.popup-bg').fadeIn(400);
    $('html').addClass('no-scroll');
});

  $(function() {
    let header = $('.header');
    let hederHeight = header.height(); // вычисляем высоту шапки
     
    $(window).scroll(function() {
      if($(this).scrollTop() > 1) {
       header.addClass('header_fixed');
       $('body').css({
          'paddingTop': hederHeight+'px' // делаем отступ у body, равный высоте шапки
       });
      } else {
       header.removeClass('header_fixed');
       $('body').css({
        'paddingTop': 0 // удаляю отступ у body, равный высоте шапки
       })
      }
    });
   });

   
   $(document).ready(function() {
    $(".btn-close").click(function() {
      $(".header_close").slideToggle();
      $(".btn").toggle();
    });
  });

  $(document).ready(function() {
    $(".btn").click(function() {
      $(".header_close").slideToggle();
      $(".btn").toggle();
    });  
  });

  $(document).ready(function() {
    $(".submit_button").click(function() {
      $(".header_close").slideToggle();
      $(".btn").toggle();
    });
  });


   let coll = document.getElementsByClassName('collapsible');
   for(let i = 0; i < coll.length; i++) {
       coll[i].addEventListener('click', function () {
           this.classList.toggle('active');
           let content = this.nextElementSibling;
           if (content.style.maxHeight) {
               content.style.maxHeight = null;
           } else {
               content.style.maxHeight = content.scrollHeight + 'px'
           }
       })
   }