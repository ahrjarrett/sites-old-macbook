jQuery(document).ready(function(){
	if(jQuery(".especifications").length > 0) {
		createTabs();
	}
	jQuery("header nav.mobileOnly > p").click(function(){
		jQuery(this).next("ul").slideToggle();
	});
	setContentHeight ();
});

jQuery(window).resize(function(){
	if (jQuery(".wrap:first").width() < 768) {
		jQuery("header nav.mobileOnly > ul").hide();
	} else {
		jQuery("header nav.mobileOnly > ul").slideDown();
		jQuery("header nav.mobileOnly > ul ul").hide().removeAttr("style");
	}
	setContentHeight ();
});

function createTabs() {
	jQuery(".especifications .espContent > li:first").siblings().hide();
	jQuery(".especifications .title > li").click(function(){
		var i = jQuery(this).index();
		if (jQuery(this).hasClass("selected")) {
			return false;
		} else {
			jQuery(".especifications .title > li").removeClass("selected");
			jQuery(this).addClass("selected");
			jQuery(".especifications .espContent > li:visible").slideUp(function(){
				jQuery(".especifications .espContent > li:eq("+ i +")").slideDown();
			});
		}
	});
}

function setContentHeight () {
	if (jQuery(window).width() > 767) {
		var h = jQuery(window).height() - 260;
		jQuery("#MainContainer .content").attr("style","min-height:"+ h +"px");
	} else {
		jQuery("#MainContainer .content").removeAttr();
	}
}
