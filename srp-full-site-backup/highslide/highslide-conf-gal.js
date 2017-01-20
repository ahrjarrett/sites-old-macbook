hs.graphicsDir = 'highslide/graphics/';
hs.align = 'center';
hs.transitions = ['expand', 'crossfade'];
hs.wrapperClassName = 'borderless';
hs.fadeInOut = true;
hs.dimmingOpacity = 0.80;
hs.captionEval = 'this.thumb.alt';
hs.captionOverlay.position = "rightpanel";
hs.captionOverlay.width = "300px";
hs.useBox = true;
hs.width = 2000;
hs.height = 2000;
hs.zIndexCounter = 99999;

hs.skin.contentWrapper =
	'<div class="highslide-body"></div>'+
	'<div class="highslide-footer"><div>'+
		'<b>This is a custom footer</b>';

if (hs.addSlideshow) hs.addSlideshow({
	interval: 5000,
	repeat: false,
	useControls: true,
	fixedControls: true,
	overlayOptions: {
		opacity: .6,
		position: 'middle right',
		hideOnMouseOut: false
	}
});

jQuery(document).ready(function() {
	jQuery("#container").gridalicious({
	  gutter: 20,
	  width: 200
	});
	jQuery("#container2").gridalicious({
	  gutter: 20,
	  width: 200
	});
	jQuery("#container3").gridalicious({
	  gutter: 20,
	  width: 200
	});
jQuery("#container4").gridalicious({
	  gutter: 20,
	  width: 200
	});
	jQuery(window).resize(function(){
		jQuery("#container").gridalicious('resize');
		jQuery("#container2").gridalicious('resize');
		jQuery("#container3").gridalicious('resize');
		jQuery("#container4").gridalicious('resize');
	});
});
