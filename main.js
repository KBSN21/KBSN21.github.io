window.onload = function () {
	const scroll = new LocomotiveScroll({
		el: document.querySelector('[data-scroll-container]'),
		multiplier: 2,
		offset: ['2%', '0'],
		lerp: 0.015,
		smooth: true,
		direction: 'horizontal',
		smartphone: {
			direction: 'vertical',
			class: 'sss',
		},
	});
};

function changeSource(url) {
	const video = document.querySelector('video');
	console.dir(video);
	video.src = url;
	video.play();
}

const media = window.matchMedia('(min-width: 768px)');

if (media.matches) {
	changeSource('/assets/hero-desktop.mp4');
} else {
	changeSource('/assets/hero.mp4');
}
