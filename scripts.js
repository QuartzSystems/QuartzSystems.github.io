document.ready = function () {
    (function ($) {
        var router = {
            routes: {
                "#home": "home.html",
                "": "home.html",
                "#videos": "videos.html",
                "#members": "members.html"
            },
            el: $('#content'),
            route: function (hash) {
                if (this.routes[hash]) {
                    this.el.load("/pages/" + this.routes[hash] + "?chachingdisablingthingie=" + new Date().getTime());
                    var colors = [
                        "bg-blue",
                            "bg-teal",
                            "bg-orange",
                            "bg-yellow",
                            "bg-white"
                    ];
                    this.el.removeClass();
                    this.el.addClass(colors[getRandomInt(0,4)]);
                } else {
                    this.el.html("<h1 class='classy'>Your page don't exist, broa.</h1>");
                }
            }
        };

        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
        var cHash = "#jlkjldjfl";
        setInterval(function () {
            if (location.hash != cHash) {
                cHash = location.hash;
                console.log(cHash);
                router.route(cHash);
            }
        }, 100);
    })(jQuery);
};