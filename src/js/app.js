(function($) {
  "use strict";

  // 外部リンクを別タブで開く
  $(document).ready( function () {
    $("a[href^='http']:not([href*='" + location.hostname + "'])").attr('target', '_blank');
  });

  // スクロールでヘッダーの色透過
  $(window).scroll(function() {
    if (640 < window.innerWidth) {
      var scVal = $(document).scrollTop();
      var rate = (Math.min(scVal, 120) / 160);
      // RGBA 値を設定
      $(".header").css('background-color', 'rgba(0, 0, 0, ' + rate + ')');
    }

    if(150 < scVal) {
      $(".header .row.collapse").removeClass("topbar");
      $(".header .row.collapse").addClass("multi-col");
      $(".header").addClass("full-width");
      $(".logo").addClass("left-side");
    } else {
      $(".header .row.collapse").removeClass("multi-col");
      $(".header .row.collapse").addClass("topbar");
      $(".header").removeClass("full-width");
      $(".logo").removeClass("left-side");
    }

  });

  // ______________ SHARE BAR
  // if(640 <= window.innerWidth && 0 < $('.scroll-spy').size()) {
  //   $('body').scrollspy({target: '.scroll-spy', offset: 1});
  // }

  if(0 < $('.scroll-chaser').length) {
    $('.scroll-chaser').scrollChaser({
      wrapper: '.content-container',
      offsetTop: window.innerWidth <= 640 ? -5 : 66
    });
  }

  // Youtube画像をクリック時に動画に変える
  $(".youtube").click(function(e) {
    // 画像のsrcを取得
    var y_img = $(this).attr("src");
    // 動画IDを抽出
    var id = y_img.slice(23, y_img.lastIndexOf("/") + 0);
    // 画像をiframeに置き換え
    $(this).hide().parent().html('<iframe width="560" height="315" src="https://www.youtube.com/embed/' + id + '" frameborder="0" allowfullscreen=""></iframe>');
  });

  // ______________ BACK TO TOP BUTTON

  $(window).scroll(function() {
    if(200 < $(this).scrollTop()) {
      $("#back-to-top").fadeIn("slow");
    } else {
      $("#back-to-top").fadeOut("slow");
    }
  });
  $("#back-to-top").click(function() {
    $("html, body").animate({scrollTop: 0}, 600);
    return false;
  });

  $("code").each(function() {
    var codeName = $(this).attr("class") ? $(this).attr("class").split(":")[1] : null;
    if(codeName) {
      $(this).parent().addClass("source-code");
      $("<div class='code-name'>" + codeName + "</div>").insertBefore($(this));
    }
  });

  $(".social-area-syncer").jsSocials({
    showLabel: false,
    shareIn: "popup",
    shares: ["twitter", "facebook", "hatena", "googleplus", "linkedin", "pinterest"]
  });
})(jQuery);