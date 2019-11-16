(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 20) {
      $("#mainNav").addClass("navbar-scrolled");
      $(".my_logo_white").attr('src', 'img/full-logo-blk.png');
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
      $(".my_logo_white").attr('src', 'img/full-logo-white.png')
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);


  // Contact Form??

  function validateForm() {
    var name = document.getElementById('name').value;
    if (name == "") {
      document.getElementById('status').innerHTML = "Name cannot be empty";
      return false;
    }
    var email = document.getElementById('email').value;
    if (email == "") {
      document.getElementById('status').innerHTML = "Email cannot be empty";
      return false;
    } else {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!re.test(email)) {
        document.getElementById('status').innerHTML = "Email format invalid";
        return false;
      }
    }
    var subject = document.getElementById('subject').value;
    if (subject == "") {
      document.getElementById('status').innerHTML = "Subject cannot be empty";
      return false;
    }
    var message = document.getElementById('message').value;
    if (message == "") {
      document.getElementById('status').innerHTML = "Message cannot be empty";
      return false;
    }
    document.getElementById('status').innerHTML = "Sending...";
    document.getElementById('contact-form').submit();

    document.getElementById('status').innerHTML = "Sending...";
    var formData = {
      'name': $('input[name=name]').val(),
      'email': $('input[name=email]').val(),
      'subject': $('input[name=subject]').val(),
      'message': $('textarea[name=message]').val()
    };
  }

  //sending email w/o relauding page using ajax




  $.ajax({
    url: "mail.php",
    type: "POST",
    data: formData,
    success: function (data, textStatus, jqXHR) {

      $('#status').text(data.message);
      if (data.code) //If mail was sent successfully, reset the form.
        $('#contact-form').closest('form').find("input[type=text], textarea").val("");
    },
    error: function (jqXHR, textStatus, errorThrown) {
      $('#status').text(jqXHR);
    }
  });


  // Magnific popup calls  - changed to none so that logo doesn't mess up. I can't comment it out. 
  $('#none').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

})


(jQuery); // End of use strict


//for new portfolio
// portfolio