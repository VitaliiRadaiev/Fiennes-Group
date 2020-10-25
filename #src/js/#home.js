// == hero slider ==========================================================================
{
	let heroSlider = document.querySelector('.hero-slider .swiper-container');
	if(heroSlider) {

		var mySwiper = new Swiper(heroSlider, {
		slidesPerView:1,
		loop: true,
		effect: 'fade',
		autoplay: {
		  delay: 4000,
		},
		speed: 800,

		pagination: {
		    el: heroSlider.querySelector('.swiper-pagination'),
		     clickable: true,
		  },
		})
	}
}
// == and hero slider ==========================================================================



// ==  slider ==========================================================================
{
	let slider = document.querySelectorAll('.slider');
	if(slider.length>0) {
		slider.forEach(item => {
			var mySwiper = new Swiper(item.querySelector('.swiper-container'), {
			slidesPerView:1,
			loop: true,
			effect: 'fade',
			speed: 600,
			spaceBetween: 15,
			pagination: {
			    el: item.querySelector('.swiper-pagination'),
			    clickable: true,
			  },
			})
		})
	}
}
// == and  slider ==========================================================================


// == video block ==========================================================================
{
	let video = document.getElementById('player');
	if(video) {
		const player = new Plyr(video);

		player.on('ready', event => {
		  const instance = event.detail.plyr;
		});
	}
}
// == and  video block ==========================================================================

// ==  slider-2 ==========================================================================
{
	let slider = document.querySelector('.slider-2 .swiper-container');
	if(slider) {

		var mySwiper = new Swiper(slider, {
		slidesPerView:'auto',
		speed: 600,
		spaceBetween: 65,
		centeredSlides: true,
		scrollbar: {
		  el: slider.querySelector('.swiper-scrollbar'),
		},
		 breakpoints: {
		 	320: {
		 		spaceBetween: 15
		 	},
		   768: {
		     spaceBetween: 30
		   },
		   1024: {
		   	spaceBetween: 65
		   },
		 }   
		})
	}
}
// == and  slider-2 ==========================================================================