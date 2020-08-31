const navbarLinks = document.querySelectorAll('a.nav-link');
navbarLinks.forEach(link => link.addEventListener('click', ()=>{
	for(let samplelink of Array.from(navbarLinks)){
		if(samplelink.classList.contains('active')) samplelink.classList.remove('active')
	}
link.classList.add('active');
}))
window.addEventListener('scroll', ()=>{
	if(window.scrollY > 100){
		document.querySelector('.navbar').classList.remove('navbar-dark');
		document.querySelector('.navbar').classList.add('navbar-light');
		document.querySelector('.navbar').classList.add('bg-light');
	} else{
		document.querySelector('.navbar').classList.add('navbar-dark');
		document.querySelector('.navbar').classList.remove('navbar-light');
		document.querySelector('.navbar').classList.remove('bg-light');
	}
})
window.onload = function(){
	Particles.init({
		selector: ['.background', '.services'],
		sizeVariation: 1120,
		speed: 1,
		color: ['red', 'blue', 'white', 'green', 'pink', 'blue'],
		minParticles: 50000,
		// connectParticles: true
	})
}