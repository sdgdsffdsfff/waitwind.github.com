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
                '<li><a class="subdued" href="index.html">TSS</a></li>' +
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

    if($('#movieBox').length) {
        initMovie();
    }
    
}());

function initMovie() {
    var movieBox = $('#movieBox')[0];
    var picUl  = $('.picUl', movieBox)[0];
    var picLis = $('li', picUl);
    var switchTag = $('.switchTag li');
    
    function tab() {
      switchTag.each(function(i, li) {
        $(li).removeClass("active");
      });
      $(switchTag[now]).addClass("active");

      startMove(picUl, -(now * picLis[0].offsetWidth));
    }

    function startMove(obj, picWidth) {
      clearInterval(obj.timer)
      obj.timer = setInterval(function(){
         var currentLeft = parseInt( $(obj).css("left").replace("px", "") );
         if(currentLeft == picWidth) {
           clearInterval(obj.timer)
         }
         else { 
            var speed = (picWidth - currentLeft) / 4;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            $(obj).css("left", (currentLeft + speed) + 'px');
         }
      }, 30)
    }

    var now = 0;
    switchTag.each(function(i, li) {
      li.index = i;
      $(li).click(function() {
        now = this.index;
        tab();
      });
    });

    $('.pre', movieBox).click( function() {
      if(--now == -1) now = picLis.length;
      tab();
    });

    var oNext = $('.next', movieBox)[0];
    $(oNext).click( function() {
      if(++now == picLis.length)  now = 0;
      tab();
    } );

    var timer = setInterval(oNext.onclick, 3000) 
    movieBox.onmouseover = function() {
      clearInterval(timer)
    }
    movieBox.onmouseout = function() {
      timer = setInterval(oNext.onclick, 3000) 
    }
  }