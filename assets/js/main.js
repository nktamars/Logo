//////////////////FILTER////////////////
$(function() {

  let portfolioList = $('.portfolio__list');

  portfolioList.imagesLoaded(function() {
    portfolioList.isotope({
      itemSelector: '.portfolio__item',
      columnWidth: '.grid-sizer',

    });
  });

  $("[data-filter]").on("click", function(e) {
    e.preventDefault();
    let selector;
    $("[data-filter]").removeClass("filters__link--active");
    $(this).addClass("filters__link--active");
    if ($(this).data("filter") == "all") {
      selector = "*";
    } else {
      selector = '[data-type="' + $(this).data("filter") + '"]';
    }
    portfolioList.isotope({
      filter: selector
    });
  });
});





////////////////////SMOOTH SCROLL/////////////////

$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex', '-1');
            $target.focus();
          };
        });
      }
    }
  });

//////////ACCORDION//////////
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }
}
