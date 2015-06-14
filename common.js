(function() {
    var scriptNode = document.createElement("script");
    scriptNode.src = "http://s4.cnzz.com/z_stat.php?id=1253705547&web_id=1253705547";
    scriptNode.async = false;
    $('head').appendChild(scriptNode);

    var githubEl = $.createElement("div", "github");
    $(githubEl).html('<a href="https://github.com/waitwind">Fork me on GitHub</a>');
    $(document.body).appendChild(githubEl);

    $("#header").html('<div class="container" >' +
        '<nav>' +
            '<ul class="nav subdued">' +
                '<li><a class="subdued" href="tss.html">TSS</a></li>' +
                '<li><a class="subdued" href="tssJS.html">tssJS</a></li>' +
                '<li><a class="subdued" href="install.html">安装</a></li>' +
                '<li><a class="subdued" href="help.html">帮助</a></li>' +
                '<li><a class="subdued" href="milestones.html">开发记事</a></li>' +
            '</ul>' +
        '</nav>' +
        '<a href="index.html" class="brand">' +
            '<b class="forename">它山石</b><b class="surname">数据管理平台</b>' +
        '</a>' +
    '</div>');

    var upEl = $.createElement("a", "btnToTop", "btnToTop");
    $(upEl).addClass("btn").addClass("btn-plain").attr("href", "#");
    $(upEl).html('Top <i class="iconToTop"></i>')
    $("article").appendChild(upEl);

    var header = new Headroom(document.querySelector("#header"), {
        tolerance: 5,
        offset : 205,
        classes: {
          initial : "slide",
          pinned  : "slide-reset",
          unpinned: "hideTop"
        }
    });
    header.init();
    
    var btnToTopHeadroom = new Headroom(document.getElementById("btnToTop"), {
        tolerance : 0,
        offset : 500,
        classes : {
            initial : "slide",
            pinned  : "slide-reset",
            unpinned: "hideBottom"
        }
    });
    btnToTopHeadroom.init();
}());