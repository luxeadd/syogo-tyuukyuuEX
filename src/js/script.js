
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

//ハンバーガーメニュー---------------
const jsHamburger = document.getElementById('js-hamburger');
const body = document.body;
const spHeaderMenu = document.getElementById('js-drawer-menu')
const drawerBackground = document.getElementById('js-header__overlay')
const drawerMenuItem = document.getElementById('js-drawer-menu__item')

//ハンバーガーメニュークリックアクション
jsHamburger.addEventListener('click', function() {
  body.classList.toggle('is-drawerActive')
  if (this.getAttribute('aria-expanded') == 'false') {
    this.setAttribute('aria-expanded', 'true');
    spHeaderMenu.setAttribute('area-hidden','false')
  } else {
    this.setAttribute('aria-expanded', 'false')
    spHeaderMenu.setAttribute('area-hidden','true')
  };
});
//ドラワーメニュー展開時背景クリックアクション
drawerBackground.addEventListener('click', () => {
  body.classList.remove('is-drawerActive')
  jsHamburger.setAttribute('aria-expanded', 'false')
  spHeaderMenu.setAttribute('area-hidden','true')
});
//ドラワーメニュー展開時リストクリックアクション
drawerMenuItem.addEventListener('click', () => {
  body.classList.remove('is-drawerActive')
  jsHamburger.setAttribute('aria-expanded', 'false')
  spHeaderMenu.setAttribute('area-hidden','true')
});


//スティッキーヘッダー=======================
//スクロールしたらheaderの色を変える
//headerにchange-colorクラスをつけ色を指定
jQuery(window).on('scroll', function () {
  var MV =  jQuery(".js-mv").innerHeight(); //headerの高さ取得 
  if (  1 <  jQuery(this).scrollTop()) { 
  jQuery('.js-header').addClass('change-color'); }
  else {
  jQuery('.js-header').removeClass('change-color'); } 
  });




  var topBtn = $('.page-top');
  topBtn.hide();

  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  });

  // ヘッダー
  $(window).on('scroll', function () {
    if ($('.slider1').height() < $(this).scrollTop()) {
      $('.header').css('background', 'rgba(17,17,17,1)');
    } else {
      $('.header').css('background', 'rgba(17,17,17,0.5)');
    }
  });

  //ドロワーメニュー
  $('.navbar_toggle').on('click', function () {
    $(this).toggleClass('open');
    $('.menu').toggleClass('open');
  });

  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)
  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });


 
  flatpickr('#js-datepicker');


  //モーダル
  var posi;
  //展開ボタン
  $('#js-reserve-btn').on('click', function () {
    $('#js-modal').fadeIn();
    $('#js-modal-background').fadeIn();
    //背景固定
    posi = $(window).scrollTop();
    $('body').css({
      position: 'fixed',
      top: -1 * posi
    });
  });
  //閉じるボタン
  $('#js-modal-close').on('click', function () {
    $('#js-modal').fadeOut();
    $('#js-modal-background').fadeOut();
    //背景固定解除
    $('body').attr('style', '');
    $('html, body').prop({scrollTop: posi});
  });
  // 背景クリックで閉じる
  $('#js-modal-background').on('click', function () {
    $(this).fadeOut();
    $('#js-modal').fadeOut();
     //背景固定解除
    $('body').attr('style', '');
    $('html, body').prop({scrollTop: posi});
  });


});
