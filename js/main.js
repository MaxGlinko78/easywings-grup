if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', ready());
} else {
	ready();
}


const faBars = document.querySelector('.fa-bars');
const sidebar = document.querySelector('.sidebar');
const main = document.querySelector('.main');

//const IsCardS = document.querySelectorAll('.card');



const openMenu = () => {
	sidebar.classList.toggle('hiden');
	main.classList.toggle('move');
};
faBars.addEventListener('click', openMenu);

function ready() {
	const cards = Array.from(document.getElementsByClassName('card'));

	cards.forEach(card => {
		card.addEventListener('click', () => {
			card.classList.toggle('visible');
		});

	});

}

const buttonСart=document.querySelector('.btn');
const modal = document.querySelector('.modal');
const  modalHeaderClose = document.querySelector('.modal-header-close');
const buttonCancel = document.querySelector('.button-cancel');

buttonСart.addEventListener('click', function(event){
modal.classList.add('is-open');
 
});

modalHeaderClose.addEventListener('click', function(event){
modal.classList.remove('is-open');
 
});

buttonCancel.addEventListener('click', function(event){
modal.classList.remove('is-open');
 
});

