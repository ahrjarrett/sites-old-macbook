$(function() {

	var imgDir = './images/';
	var hero0 = new Image();
	var hero1 = new Image();
	var hero2 = new Image();
	var hero3 = new Image();
	var quote0 = new Image();
	var quote1 = new Image();
	var quote2 = new Image();
	var quote3 = new Image();
	var quote4 = new Image();
	var bgStart = 'background: url(';
	var bgEnd = ');';
	var bgStyles = 'background-size: cover; background-position: center center; transition: all 0.4s ease;';

	hero0.src = imgDir + 'main0.jpg';
	hero1.src = imgDir + 'main1.jpg';
	hero2.src = imgDir + 'main2.jpg';
	hero3.src = imgDir + 'main3.jpg';

	quote0.src = imgDir + 'hs-lg-0.jpg';
	quote1.src = imgDir + 'hs-lg-1.jpg';
	quote2.src = imgDir + 'hs-lg-2.jpg';
	quote3.src = imgDir + 'hs-lg-3.jpg';
	quote4.src = imgDir + 'hs-lg-4.jpg';

	var Data = {
		'sales': {
			'hero': hero0,
			'header': 'SalesOps.',
			'bannerA': 'Download the Checklist &nbsp;&rarr;',
			'bannerB': '10 Tips for a Perfect Sale'
		},
		'dev': {
			// 'hero': hero1,
			'header': 'DevOps.',
			'bannerA': 'Download the Checklist &nbsp;&rarr;',
			'bannerB': '11 Tricks for a Smooth Deploy(ment)'
		},
		'builds': {
			// 'hero': hero2,
			'header': 'Good Builds.',
			'bannerA': 'Download the Checklist &nbsp;&rarr;',
			'bannerB': 'The 12 Secrets of Architecture'
		},
		'sexy': {
			// 'hero': hero3,
			'header': 'Sexy Product.',
			'bannerA': 'Download the Checklist &nbsp;&rarr;',
			'bannerB': '13 Hacks for a Summer Bod'
		}
	};

	$('#hero0').on('click', function(e){
		e.preventDefault();
		$('#hero').attr('style',
			bgStart + hero0.src + bgEnd + bgStyles
		);
		$('#hero-header').replaceWith('<h1 id="hero-header">' + 
			Data.sales.header
		+ '</h1>');
		$('#banner-a').replaceWith('<span id="banner-a" class="bold hidden-on-mobile">' + 
			Data.sales.bannerA + '</span>');
		$('#banner-b').replaceWith('<span id="banner-b" class="bold">' + 
			Data.sales.bannerB + '</span>');
	});

	$('#hero1').on('click', function(e){
		e.preventDefault();
		$('#hero').attr('style',
			bgStart + hero1.src + bgEnd + bgStyles
		);
		$('#hero-header').replaceWith('<h1 id="hero-header">' +
			Data.dev.header
		+ '</h1>');
		$('#banner-a').replaceWith('<span id="banner-a" class="bold hidden-on-mobile">' +
			Data.dev.bannerA + '</span>');
		$('#banner-b').replaceWith('<span id="banner-b" class="bold">' + 
			Data.dev.bannerB + '</span>');
	});

	$('#hero2').on('click', function(e){
		e.preventDefault();

		$('#hero').attr('style',
			bgStart + hero2.src + bgEnd + bgStyles
		);
		$('#hero-header').replaceWith('<h1 id="hero-header">' +
			Data.builds.header
		+ '</h1>');

		$('#banner-a').replaceWith('<span id="banner-a" class="bold hidden-on-mobile">' +
			Data.builds.bannerA + '</span>');

		$('#banner-b').replaceWith('<span id="banner-b" class="bold">' +
			Data.builds.bannerB + '</span>');

	});

	$('#hero3').on('click', function(e){
		e.preventDefault();
		$('#hero').attr('style',
			bgStart + hero3.src + bgEnd + bgStyles
		);	
		$('#hero-header').replaceWith(
			'<h1 id="hero-header">' +
			Data.sexy.header
			+ '</h1>'
		);
		$('#banner-a').replaceWith(
			'<span id="banner-a" class="bold hidden-on-mobile">' +
			Data.sexy.bannerA
			+ '</span>');
		$('#banner-b').replaceWith('<span id="banner-b" class="bold">' +
			Data.sexy.bannerB + '</span>');
	});

	$('#hero-ul a').on('click', function(){
		$(this).removeClass('no-after');
		$('#hero-ul a.active').addClass('no-after');
		$('a.active').removeClass('active');
		$(this).addClass('active');
	});

	$('#quote0').on('click', function(){
		$('.review').attr('style',
			bgStart + quote0.src + bgEnd + bgStyles
		);
		$('.quote p').replaceWith('<p>"Sun Ray Pools took great care of us."</p>');
		$('.quote h6').replaceWith('<h6>Robert Smith, Rowlett</h6>');
	});

	$('#quote1').on('click', function(){
		$('.review').attr('style',
			bgStart + quote1.src + bgEnd + bgStyles
		);
		$('.quote p').replaceWith('<p>"Another Good Review"</p>');
		$('.quote h6').replaceWith('<h6>The Beach Boys</h6>');
	});

	$('#quote2').on('click', function(){
		$('.review').attr('style',
			bgStart + quote2.src + bgEnd + bgStyles
		);
		$('.quote p').replaceWith('<p>"A+"</p>');
		$('.quote h6').replaceWith('<h6>The Carpenters</h6>');
	});

	$('#quote3').on('click', function(){
		$('.review').attr('style',
			bgStart + quote3.src + bgEnd + bgStyles
		);
		$('.quote p').replaceWith('<p>"And more reviews!"</p>');
		$('.quote h6').replaceWith('<h6>Jen Sale</h6>');
	});

	$('#quote4').on('click', function(){
		$('.review').attr('style',
			bgStart + quote4.src + bgEnd + bgStyles
		);
		$('.quote p').replaceWith('<p>"Last featured testimonial."</p>');
		$('.quote h6').replaceWith('<h6>Declan Taintor</h6>');
	});

	$('.quo-li').on('click', function(){
		$('li.active').removeClass('active');
		$(this).addClass('active');
	});

	$('.smoothScroll').click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top 
				}, 60); // The number here represents the speed of the scroll in milliseconds
				return false;
			}
		}
	});

	$(window).scroll(function() {
		var sticky = $('.sticky'),
			scroll = $(window).scrollTop();

		if (scroll >= 440) sticky.addClass('fixed');
		else sticky.removeClass('fixed');
	});

	$('.mobile-menu').click(function(){
		if ($('#nav-mobile').hasClass('collapsed')) {
			$('#nav-mobile').removeClass('collapsed');
		} else {
			$('#nav-mobile').addClass('collapsed');
		}
	});

	$('.lightbox').fancybox();

} )

