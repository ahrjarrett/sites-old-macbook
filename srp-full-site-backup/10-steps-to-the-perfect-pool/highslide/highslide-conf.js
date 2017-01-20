hs.graphicsDir = 'highslide/graphics/';
hs.align = 'center';
hs.transitions = ['expand', 'crossfade'];
hs.fadeInOut = true;
hs.easing = 'easeInCirc';
hs.wrapperClassName = 'borderless';
hs.captionEval = 'this.thumb.alt';
hs.marginTop = 105; // make room for the thumbstrip and the controls
//hs.numberPosition = 'caption';

// Add the slideshow providing the controlbar and the thumbstrip
hs.addSlideshow({
	//slideshowGroup: 'group1',
	interval: 5000,
	repeat: false,
	useControls: true,
	overlayOptions: {
		className: 'text-controls',
		position: 'top center',
		relativeTo: 'viewport',
		offsetY: 60
	},
	thumbstrip: {
		position: 'top center',
		mode: 'horizontal',
		relativeTo: 'viewport'
	}
});
