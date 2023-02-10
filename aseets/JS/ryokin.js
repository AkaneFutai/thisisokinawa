// 写真スライダー
//上部画像の設定
$('.gallery').slick({
	infinite: true, //スライドをループさせるかどうか。初期値はtrue。
	fade: true, //フェードの有効化
	arrows: true,//左右の矢印あり
	prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
	nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
});

//選択画像の設定
$('.choice-btn').slick({
	infinite: true, //スライドをループさせるかどうか。初期値はtrue。
	slidesToShow: 8, //表示させるスライドの数
	focusOnSelect: true, //フォーカスの有効化
	asNavFor: '.gallery', //連動させるスライドショーのクラス名
});
  
//下の選択画像をスライドさせずに連動して変更させる設定。
$('.gallery').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
	var index = nextSlide; //次のスライド番号
	//サムネイルのslick-currentを削除し次のスライド要素にslick-currentを追加
	$(".choice-btn .slick-slide").removeClass("slick-current").eq(index).addClass("slick-current");
});
  
//背景透明化
//メニュー+タイトル用
// $(document).ready(function() {
// 	$(window).scroll(function() {
// 	  if ($(this).scrollTop() > 0) {
// 		$('menu').css('opacity', 0.9);
// 	  } else {
// 		$('menu').css('opacity', 1);
// 	  }
// 	});
//   });
  //背景色
  $(document).ready(function() {
	$(window).scroll(function() {
	  if ($(this).scrollTop() > 0) {
		$('#svg-bg').css('opacity', 0.8);
	  } else {
		$('#svg-bg').css('opacity', 1);
	  }
	});
  });
//   $(document).ready(function() {
// 	$(window).scroll(function() {
// 	  if ($(this).scrollTop() > 0) {
// 		$('right').css('opacity', 0.9);
// 	  } else {
// 		$('right').css('opacity', 1);
// 	  }
// 	});
//   });