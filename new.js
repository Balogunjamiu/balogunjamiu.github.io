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




// var current = null;
// document.querySelector('#name').addEventListener('focus', function(e) {
//   if (current) current.pause();
//   current = anime({
//     targets: 'path',
//     strokeDashoffset: {
//       value: 0,
//       duration: 700,
//       easing: 'easeOutQuart'
//     },
//     strokeDasharray: {
//       value: '240 1386',
//       duration: 700,
//       easing: 'easeOutQuart'
//     }
//   });
// });

// document.querySelector('#email').addEventListener('focus', function(e) {
//   if (current) current.pause();
//   current = anime({
//     targets: 'path',
//     strokeDashoffset: {
//       value: 0,
//       duration: 10,
//       easing: 'easeOutQuart'
//     },
//     strokeDasharray: {
//       value: '240 1386',
//       duration: -100,
//       easing: 'easeOutQuart'
//     }
//   });
// });

// document.querySelector('#field').addEventListener('focus', function(e) {
//   if (current) current.pause();
//   current = anime({
//     targets: 'path',
//     strokeDashoffset: {
//       value: -336,
//       duration: 700,
//       easing: 'easeOutQuart'
//     },
//     strokeDasharray: {
//       value: '240 1386',
//       duration: 700,
//       easing: 'easeOutQuart'
//     }
//   });
// });
// document.querySelector('#submit').addEventListener('focus', function(e) {
//   if (current) current.pause();
//   current = anime({
//     targets: 'path',
//     strokeDashoffset: {
//       value: -730,
//       duration: 700,
//       easing: 'easeOutQuart'
//     },
//     strokeDasharray: {
//       value: '530 1386',
//       duration: 700,
//       easing: 'easeOutQuart'
//     }
//   });
// });