window.addEventListener('DOMContentLoaded', function (event) {});
let scroll = 0;

function changeSource(url) {
	const video = document.querySelector('video');
	video.src = url;
	video.play();
}

const media = window.matchMedia('(min-width: 768px)');

if (media.matches) {
	changeSource('/assets/hero-desktop.mp4');
} else {
	changeSource('/assets/hero.mp4');
}

const menu = document.querySelector('#menu');
const hamburger = document.querySelector('#hamburger');
const menuItems = document.querySelectorAll('li');

const toggleMenu = () => {
	menu.classList.toggle('-top-[100vh]');
	menu.classList.toggle('-top-0');
};
const scrollToSection = function (e) {
	setTimeout(() => {
		scroll.scrollTo(`#${this.dataset.scrollTo}`);
	}, 300);
};

hamburger.addEventListener('click', toggleMenu);

window.addEventListener('load', () => {
	document.querySelector('.loader').outerHTML = '';
	scroll = new LocomotiveScroll({
		el: document.body,
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

	menuItems.forEach(element => {
		element.addEventListener('click', toggleMenu);
		element.addEventListener('click', scrollToSection);
	});
});
