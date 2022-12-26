// Author : Nguyen Minh Triet

const topMenu = document.querySelector("#tnm-top-menu");
const toggleIcon = document.querySelector("#tmn-toggle-menu-icon");

document.addEventListener('click', (e) => {

	if (toggleIcon.contains(e.target)) {
		topMenu.classList.toggle('hidden');
		topMenu.classList.toggle('tnm-top-menu-expanded');
	}else {
		//Click outside toggle icon
		if (topMenu.classList.contains('tnm-top-menu-expanded')) {
			topMenu.classList.remove('tnm-top-menu-expanded');
			topMenu.classList.add('hidden');
		}
	}
});