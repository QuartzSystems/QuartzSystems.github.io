(function() {
    var parseDataAndPath = function(data, path) {
        var jsonData = data;
        var _path = path.split("/");
        var app = "qz";
        if(_path[1] == "redirects") {
            var app = (_path[2] ? _path[2] : "qz");
        }
        
        var appData = data[app];
        var uri = appData.uri;
        return uri;
    };
    var dataURL = "/data/projects.json";
    $.get(dataURL, function(data) {
        location.assign(parseDataAndPath(data, location.pathname));
    });
})();