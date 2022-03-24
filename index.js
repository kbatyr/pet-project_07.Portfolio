// Burger menu handler
(function burgerMenu() {

	// Получение доступа к элементам страницы с пом. querySelector
	const burgerItem = document.querySelector('.burger');
	const menu = document.querySelector('.header__nav');
	const menuCloseItem = document.querySelector('.header__burger__close');
	const navList = document.querySelectorAll('.nav__list');

	// Добавление класса 'header__nav_active' при нажатии на бургер меню
	burgerItem.addEventListener('click', () => {
		menu.classList.add('header__nav_active');
	});

	// Удаление класса 'header__nav_active' при нажатии на крестик
	menuCloseItem.addEventListener('click', () => {
		menu.classList.remove('header__nav_active');
	});

	// Удаление класса 'header__nav_active' при нажатии на эл.навигации
	if (window.innerWidth <= 768) {

		navList.forEach((el) => el.addEventListener('click', () => {
			menu.classList.remove('header__nav_active');
		}));
	};
}());


(function changePorfolioImgs() {

	const portfolioBtns = document.querySelector('.portfolio__btns');
	const portfolioImgs = document.querySelectorAll('.portfolio__img-pic');

	// add listener on parent tag of buttons
	portfolioBtns.addEventListener('click', changeImage);

	function changeImage(event) {

		// check buttons for existence
		if (event.target.classList.contains('portfolio__btn')) {

			// get value from data- atribute in html
			let season = event.target.dataset.season;

			// change img source depending on which button was clicked
			portfolioImgs.forEach((img, index) => img.src = `./assets/img/seasons/${season}/${index + 1}.jpg`);
		}
	}
}());


(function preloadImages() {

	const seasons = ['winter', 'spring', 'summer', 'autumn'];

	seasons.forEach(season => {
		for (let i = 1; i <= 6; i++) {
			const img = new Image();
			img.src = `./assets/img/seasons/${season}/${i}.jpg`;
		}
	})
}());


function changeClassActive(parentClassName, btns) {

	const parentClass = document.querySelector(`.${parentClassName}`);
	const buttons = document.querySelectorAll(`.${btns}`);


	parentClass.addEventListener('click', event => {

		if (event.target.classList.contains(btns)) {

			buttons.forEach(btn => {
				btn.classList.remove('active');
				btn.classList.remove('btn__autumn');
			});

			event.target.classList.add('active');
		}
	});
};

changeClassActive('portfolio__btns', 'portfolio__btn');

// Translating the page
import i18Obj from './translate.js';
const ruLang = document.querySelector('.ru');
const enLang = document.querySelector('.en');
let lang;

function getTranslate(lang) {

	const dataAtributes = document.querySelectorAll('[data-i18]');

	dataAtributes.forEach(item => {

		// console.log(item.dataset.i18)
		item.textContent = i18Obj[lang][item.dataset.i18];

		if (item.placeholder) { item.value = ''; item.placeholder = i18Obj[lang][item.dataset.i18]; }
	});
}

ruLang.addEventListener('click', () => {
	lang = 'ru';
	getTranslate(lang);
});

enLang.addEventListener('click', () => {
	lang = 'en';
	getTranslate(lang);
});

// Switching dark theme to light
const switchTheme = document.querySelector('.header__switch-theme-btn');

switchTheme.addEventListener('click', () => {
	const classList = [
		'body',
		'.header__switch-theme-btn',
		'.section__title',
		'.wrapper',
		'.portfolio__btn',
		'.btn__autumn',
		'.contacts__title',
		'footer',
		'.active',
	];

	classList.forEach(elem => {
		const elems = document.querySelectorAll(elem);
		elems.forEach(el => {
			el.classList.toggle('light-theme')
		});
	});
})