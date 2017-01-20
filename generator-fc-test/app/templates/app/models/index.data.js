module.exports = function IndexData (opts) {
	if(!opts) {
		options = {};
	}

	this.title = 'Index Page';

	this.nav = {
		Home: '',
		About: 'about',
		Reviews: 'reviews',
		Portfolio:'our-work',
		Contact: 'contact'
	};

	this.buttons = [
		'Sales', 'Dev', 'Builds', 'More'
	];

	this.home = {
		init: 'main0.jpg',
		sales: {
			header: 'SalesOps.',
			bannerA: 'Download the Checklist',
			bannerB: '10 Tips for a Perfect Sale',
			btntext: 'Download'
		},
		dev: {
			header: 'DevOps.',
			bannerA: 'Download the Checklist',
			bannerB: '11 Tricks for a Smooth Deploy(ment)',
			btntext: 'Download'
		},
		builds: {
			header: 'Good Builds.',
			bannerA: 'Download the Checklist',
			bannerB: 'The 12 Secrets of Architecture',
			btntext: 'Download'
		},
		sexy: {
			header: 'Sexy Product.',
			bannerA: 'Download the Checklist',
			bannerB: '13 Hacks for a Summer Bod',
			btntext: 'Download'
		}
	};

	this.features = {
		
		rowone: {
			0:[
				'Social', 'slide01.jpg', 'ambulance'
			],
			1:[
				'Email', 'slide02.jpg', 'bus'
			],
			2:[
				'Websites', 'slide03.jpg', 'fighter-jet'
			],
			3:[
				'SEO', 'slide04.jpg', 'rocket'
			],
			4:[
				'Design', 'slide05.jpg', 'truck'
			],
			5:[
				'SalesOps', 'slide06.jpg', 'motorcycle'
			]
		},

		rowtwo: {
			0:[
				'Brand Identity', 'slide07.jpg', 'taxi'
			],
			1:[
				'Lead Generation', 'slide08.jpg', 'subway'
			],
			2:[
				'Content Development', 'slide09.jpg', 'bicycle'
			]
		}

	};

};
