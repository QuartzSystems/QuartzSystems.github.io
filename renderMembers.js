(function ($) {
    $('#content').children('.member').each(function () {
        var $this = $(this);
        $this.append("<img src=\"" + $this.attr("data-member") + ".png?cachingDis=" + new Date().getTime() +"\"/>");
    });
})(jQuery);