(function() {
  var resetPageView = function($el) {
    $($el).children(".selected").removeClass("selected");
    $('nav>a.selected').removeClass("selected");
    $('#logo.loaded').removeClass("loaded");
    $('tr.selected').removeClass("selected");
    $('')
  };
  var pageViewSelect = function($pV, $pg) {
    resetPageView($pV);
    $($pg).addClass("selected");
    $('nav>a[data-pg="' + $pg + '"]').addClass("selected");
    $('tr').addClass("selected");
  };
  var setTitle = function(t) {
    $('title').html(t + " - Quartz Systems");
  }
  $("body").delegate("span.btn", "click", function() {
    var hr = $(this).attr("data-href");
    if (hr) {
      location.assign(hr);
    }
  });
  var routes = {
    "/whatwedo": function() {
      pageViewSelect("#pageViewMain", "#pg2");
      setTitle("What we do");
    },
    "/whoweare": function() {
      pageViewSelect("#pageViewMain", "#pg3");
      setTitle("Who we are");
      $('#whoWeAreTitle').addClass("selected");
    },
    "/portfolio": function() {
      pageViewSelect("#pageViewMain", "#pg4");
      setTitle("Portfolio");
      $('#portfolioTitle').addClass("selected");
    },
    "/": function() {
      pageViewSelect("#pageViewMain", "#pg1");
      setTimeout(function() {
        $('#logo').addClass("loaded");
      }, 500)
      setTitle("Home");
    }
  };
  var router = Router(routes);
  router.init("/");
})();