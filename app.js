document.documentElement.id = 'hi';
document.body.classList.add('loading');

window.onload = () => {
	document.body.classList.remove('loading');
};
