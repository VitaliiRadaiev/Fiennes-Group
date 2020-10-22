{
	let slider = document.querySelector('.line-slider .swiper-container');
	if(slider) {

		var mySwiper = new Swiper(slider, {
		slidesPerView:3,

		speed: 600,
		spaceBetween: 30,
		pagination: {
		    el: slider.querySelector('.swiper-pagination'),
		    clickable: true,
		  },
		 breakpoints: {
		 	320: {
		 		spaceBetween: 10,
		 		slidesPerView:1,
		 	},
		 	576: {
		 		spaceBetween: 10,
		 		slidesPerView:2,
		 	},
		   768: {
		    spaceBetween: 30,
		    slidesPerView:3,
		   }
		 } 
		})
	}
}