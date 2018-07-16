    $(".progress .progress-bar").each(function () {
      var bottom_object = $(this).offset().top + $(this).outerHeight();
      var bottom_window = $(window).scrollTop() + $(window).height();
      var progressWidth = $(this).attr('aria-valuenow') + '%';
      if(bottom_window > bottom_object) {
        $(this).css({
          width : progressWidth
        });
      }
    });
  });