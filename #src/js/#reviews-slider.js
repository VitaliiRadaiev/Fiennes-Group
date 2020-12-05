// ==  slider ==========================================================================
{
	let slider = document.querySelectorAll('.reviews-slider');
	if(slider.length>0) {
		slider.forEach(item => {
			let paginationMode = null;
			var mySwiper = new Swiper(item.querySelector('.swiper-container'), {
			slidesPerView:1,
			autoHeight: true,
			loop: true,
			speed: 600,
			spaceBetween: 15,
			pagination: {
			    el: item.querySelector('.swiper-container > .swiper-pagination'),
			    clickable: true,
			  },
			on: {
				slideChange: function() {
					if(paginationMode) {
						paginationMode();
					}
				}
			}  
		})

		    paginationMode = () => {
				item.querySelectorAll('.swiper-slide').forEach(slide => {
				let pagination = item.querySelector('.swiper-container > .swiper-pagination').cloneNode(true);
					let innerPagin = slide.querySelector('.swiper-pagination');

					if(innerPagin) {
						innerPagin.remove();
					}

					slide.append(pagination);
					item.querySelector('.swiper-container').style.height = 'auto';
				})
			}

			paginationMode();
			
			let slide = item.querySelector('.swiper-slide.swiper-slide-active');
			item.querySelector('.swiper-container').style.height = slide.clientHeight + 'px';
		});

	}
}
// == and  slider ==========================================================================
