$(function() {

	// Custom JS
	$('.fix-fluid').each(function() {
		$(this).addClass("aos-animate");
	})

	$(window).on('hashchange', function() {
		let hash = window.location.hash

		if (hash === "#page-home") {
			$('.ab-title').removeClass('page-actv')
			$('.wk-title').removeClass('page-actv')
			$('.cn-title').removeClass('page-actv')
			$('.hm-title').addClass('page-actv')

			$('.about-header').removeClass('aos-animate')

			$('.believer').removeClass('aos-animate')
			$('.passion').removeClass('aos-animate')
			$('.technologies').removeClass('aos-animate')
			$('.design').removeClass('aos-animate')

			$('.ab-bg-1').removeClass('aos-animate')
			$('.ab-bg-2').removeClass('aos-animate')
			$('.ab-bg-3').removeClass('aos-animate')

			$('.ct-bg-1').removeClass('aos-animate')
			$('.ct-bg-2').removeClass('aos-animate')
			$('.ct-bg-3').removeClass('aos-animate')

			$('.cont').removeClass('aos-animate')

		} else if (hash === "#page-about") {
			$('.hm-title').removeClass('page-actv')
			$('.wk-title').removeClass('page-actv')
			$('.cn-title').removeClass('page-actv')
			$('.ab-title').addClass('page-actv')

			$('.believer').addClass('aos-animate')
			$('.passion').addClass('aos-animate')
			$('.technologies').addClass('aos-animate')
			$('.design').addClass('aos-animate')

			$('.ab-bg-1').addClass('aos-animate')
			$('.ab-bg-2').addClass('aos-animate')
			$('.ab-bg-3').addClass('aos-animate')

			$('.about-header').addClass('aos-animate')

			$('.ct-bg-1').removeClass('aos-animate')
			$('.ct-bg-2').removeClass('aos-animate')
			$('.ct-bg-3').removeClass('aos-animate')

			$('.cont').removeClass('aos-animate')
		} else if (hash === "#page-works") {
			$('.ab-title').removeClass('page-actv')
			$('.hm-title').removeClass('page-actv')
			$('.cn-title').removeClass('page-actv')
			$('.wk-title').addClass('page-actv')

			$('.about-header').removeClass('aos-animate')

			$('.believer').removeClass('aos-animate')
			$('.passion').removeClass('aos-animate')
			$('.technologies').removeClass('aos-animate')
			$('.design').removeClass('aos-animate')

			$('.ab-bg-1').removeClass('aos-animate')
			$('.ab-bg-2').removeClass('aos-animate')
			$('.ab-bg-3').removeClass('aos-animate')

			$('.ct-bg-1').removeClass('aos-animate')
			$('.ct-bg-2').removeClass('aos-animate')
			$('.ct-bg-3').removeClass('aos-animate')

			$('.cont').removeClass('aos-animate')

			$('.btn-link').addClass('aos-animate')

		} else if (hash === "#page-contacts") {
			$('.ab-title').removeClass('page-actv')
			$('.hm-title').removeClass('page-actv')
			$('.wk-title').removeClass('page-actv')
			$('.cn-title').addClass('page-actv')

			$('.about-header').removeClass('aos-animate')

			$('.believer').removeClass('aos-animate')
			$('.passion').removeClass('aos-animate')
			$('.technologies').removeClass('aos-animate')
			$('.design').removeClass('aos-animate')

			$('.ab-bg-1').removeClass('aos-animate')
			$('.ab-bg-2').removeClass('aos-animate')
			$('.ab-bg-3').removeClass('aos-animate')

			$('.ct-bg-1').addClass('aos-animate')
			$('.ct-bg-2').addClass('aos-animate')
			$('.ct-bg-3').addClass('aos-animate')

			$('.cont').addClass('aos-animate')

		}
	});

	$('.fp-slidesNav').addClass('z-3')

	// $(window).on('resize', function(){
	// 	var win = $(this); //this = window
	// 	if (win.height() <= 768) { 
	// 		$('.about-wrapper').removeClass('fp-noscroll')
	// 	}
	// 	if (win.width() >= 769) {
	// 		$('.about-wrapper').addClass('fp-noscroll')
	// 	}
	// });
	
});
