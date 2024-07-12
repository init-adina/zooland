console.log("loaded")

 const initBurger = () => {
    const burgerBtn = document.querySelector('#burger-btn');
    const menu = document.querySelector('#burger-menu');

    if (!burgerBtn || !menu) return;

	const toggleBurger = () => {
			
		console.log("here")
        menu.classList.toggle("hidden");
        burgerBtn.classList.toggle("opened");
        document.documentElement.classList.toggle("overflow-hidden");
    };

    menu.addEventListener('click', (e) => {
        if (!(e.target instanceof Element)) return;

        if (!e.target.closest('.close-burger-link')) return;

        toggleBurger();
    });

    burgerBtn.addEventListener("click", toggleBurger);
};


document.addEventListener('DOMContentLoaded', () => {
	initBurger();
})