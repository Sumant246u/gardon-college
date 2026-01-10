(function ($) {
	"use strict";

	var windowOn = $(window);
	///////////////////////////////////////////////////
	// 01. PreLoader Js
	$(window).on('load',function () {
		$('#it-loading').fadeOut(500);
	});

	// 08. Nice Select Js
	$('select').not('.it-enquiry-select').niceSelect();

	///////////////////////////////////////////////////
	//  Sticky Header Js
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 400) {
			$("#header-sticky").removeClass("header-sticky");
		} else {
			$("#header-sticky").addClass("header-sticky");
		}
	});

	if ($('.it-header-height').length > 0) {
		var headerHeight = document.querySelector(".it-header-height");
		var setHeaderHeight = headerHeight.offsetHeight;
		$(".it-header-height").each(function () {
			$(this).css({
				'height': setHeaderHeight + 'px'
			});
		});

		$(".it-header-height .header-sticky").each(function () {
			$(this).css({
				'height': inherit,
			});
		});
	}

	// Nice Select Js
	$('select').not('.it-enquiry-select').niceSelect();

	//  Data CSS Js
	$("[data-background").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});

	$("[data-width]").each(function () {
		$(this).css("width", $(this).attr("data-width"));
	});

	$("[data-bg-color]").each(function () {
		$(this).css("background-color", $(this).attr("data-bg-color"));
	});

	// accordion
	$(".accordion-items").on("click", function () {
		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
		} else {
			$(this).addClass("active").siblings().removeClass("active");
		}
	});


	////////////////////////////////////////////////////
	// Counter Js
	if ($(".purecounter").length) {
		new PureCounter({
			filesizing: true,
			selector: ".filesizecount",
			pulse: 2,
		});
		new PureCounter();
	}
	////////////////////////////////////////////////////
	//  magnificPopup Js
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	////////////////////////////////////////////////////
	//  MagnificPopup video view Js
	$(".popup-video").magnificPopup({
		type: "iframe",
	});

	////////////////////////////////////////////////////
	//  isotope
	$('.grid').imagesLoaded(function () {
		// init Isotope
		var $grid = $('.grid').isotope({
			itemSelector: '.grid-item',
			percentPosition: true,
			masonry: {
				columnWidth: '.grid-item',
			},

		});
		// filter items on button click
		$('.masonary-menu').on('click', 'button', function () {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({
				filter: filterValue,
				animationOptions: {
					duration: 100,
					easing: "linear",
					queue: true
				}
			});

		});
		//for menu active class
		$('.masonary-menu button').on('click', function (event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
			event.preventDefault();
		});

	});


	if ($('.it-menu-content').length && $('.it-menu-mobile').length) {
		let navContent = document.querySelector(".it-menu-content").outerHTML;
		let mobileNavContainer = document.querySelector(".it-menu-mobile");
		mobileNavContainer.innerHTML = navContent;

		let arrow = $(".it-menu-mobile .has-dropdown > a");

		arrow.each(function () {
			let self = $(this);
			let arrowBtn = document.createElement("BUTTON");
			arrowBtn.classList.add("dropdown-toggle-btn");
			arrowBtn.innerHTML = "<i class='fal fa-angle-right'></i>";
			self.append(function () {
				return arrowBtn;
			});

			self.find("button").on("click", function (e) {
				e.preventDefault();
				let self = $(this);
				self.toggleClass("dropdown-opened");
				self.parent().toggleClass("expanded");
				self.parent().parent().addClass("dropdown-opened").siblings().removeClass("dropdown-opened");
				self.parent().parent().children(".it-submenu").slideToggle();
			});

		});
	}

	///////////////////////////////////////////////////
	// scroll-to-target 
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 500) {
			$('.scroll-to-target').removeClass('open');

		} else {
			$('.scroll-to-target').addClass('open');
		}
	});

	///////////////////////////////////////////////////
	// Scroll Up Js
	if ($('.scroll-to-target').length) {
		$(".scroll-to-target").on('click', function () {
			var target = $(this).attr('data-target');
			// animate
			$('html, body').animate({
				scrollTop: $(target).offset().top
			}, 1000);

		});
	}

	////////////////////////////////////////////////////
	// Sidebar Js
	$(".it-menu-bar").on("click", function () {
		$(".itoffcanvas").addClass("opened");
		$(".body-overlay").addClass("apply");
	});
	$(".close-btn").on("click", function () {
		$(".itoffcanvas").removeClass("opened");
		$(".body-overlay").removeClass("apply");
	});
	$(".body-overlay").on("click", function () {
		$(".itoffcanvas").removeClass("opened");
		$(".body-overlay").removeClass("apply");
		$(".search__popup").removeClass("search-opened");
	});

	////////////////////////////////////////////////////
	//  Search Js
    if($('.search-box-outer').length) {
		$('.search-box-outer').on('click', function() {
			$('.search-popup').addClass('search-active');
			$(".body-overlay").addClass("apply");
		});
		$('.close-search').on('click', function() {
			$('.search-popup').removeClass('search-active');
			$(".body-overlay").removeClass("apply");
		});
	}

	///////////////////////////////////////////////////
	// wow animation
	var wow = new WOW(
		{
		  mobile: true,
		}
	  );
	wow.init();
	var windowOn = $(window);


	////////////////////////////////////////////////////
	//  Cart Quantity Js
	$('.cart-minus').on('click', function () {
		var $input = $(this).parent().find('input');
		var count = Number($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});

	$('.cart-plus').on('click', function () {
		var $input = $(this).parent().find('input');
		$input.val(Number($input.val()) + 1);
		$input.change();
		return false;
	});


	// Show Login Toggle Js
	$('#showlogin').on('click', function () {
		$('#checkout-login').slideToggle(900);
	});

	$('#cbox').on('click', function () {

		$('#cbox_info').slideToggle(900);
	
	});

	$('#showcoupon').on('click', function () {

		$('#checkout_coupon').slideToggle(900);
	});

	// for range
	$(".slider-range").slider({
		range: true,
		min: 0,
		max: 1200,
		values: [80, 700],
		slide: function (event, ui) {
			$(".amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
		}
	});
	$(".amount").val("$" + $(".slider-range").slider("values", 0) +
		" - $" + $(".slider-range").slider("values", 1));


	//One Page navigation
	function scrollNav() {
		$('.it-onepage-menu li a').on('click', function () {
			$(".it-onepage-menu li a").removeClass("active");
			$(this).addClass("active");

			$('html, body').stop().animate({
				scrollTop: $($(this).attr('href')).offset().top - 80
			}, 300);
			return false;
		});
	}
	scrollNav();

	// price tab
	if ($('#lineMarker').length > 0) {

		function it_tab_bg() {
			let marker = document.querySelector('#lineMarker');
			let item = document.querySelectorAll('.it-marker-tab ul li button');
			let itemActive = document.querySelector('.it-marker-tab ul li .nav-links.active');
			function indicator(e) {
				marker.style.left = e.offsetLeft + "px";
				marker.style.width = e.offsetWidth + "px";
			}
			item.forEach(link => {
				link.addEventListener('click', (e) => {
					indicator(e.target);
				});
			});

			let activeNav = $('.it-marker-tab ul li .nav-links.active');
			let activewidth = $(activeNav).width();
			let activePadLeft = parseFloat($(activeNav).css('padding-left'));
			let activePadRight = parseFloat($(activeNav).css('padding-right'));
			let totalWidth = activewidth + activePadLeft + activePadRight;

			let precedingAnchorWidth = anchorWidthCounter();


			$(marker).css('display', 'block');

			$(marker).css('width', totalWidth);

			function anchorWidthCounter() {
				let anchorWidths = 0;
				let a;
				let aWidth;
				let aPadLeft;
				let aPadRight;
				let aTotalWidth;
				$('.it-marker-tab ul li button').each(function (index, elem) {
					let activeTest = $(elem).hasClass('active');
					marker.style.left = elem.offsetLeft + "px";
					if (activeTest) {
						return false;
					}
					a = $(elem).find('button');
					aWidth = a.width();
					aPadLeft = parseFloat(a.css('padding-left'));
					aPadRight = parseFloat(a.css('padding-right'));
					aTotalWidth = aWidth + aPadLeft + aPadRight;
					anchorWidths = anchorWidths + aTotalWidth;

				});

				return anchorWidths;
			}
		}
		it_tab_bg();
	}	

	// testimonial-2 slick
	$('.it-testimonial-3-active').slick({
		vertical: true,
		verticalSwiping: true,
		slidesPerRow: 2,
		slidesToShow: 3,
		autoplay: true,
		autoplaySpeed: 0,
		speed: 3000,
		arrows: false,
		dots: false,
		cssEase: 'ease',

		// responsive breakpoints
		responsive: [
			{
			breakpoint: 1200, 
			settings: {
				slidesToShow: 2, 
				slidesPerRow: 1,
			}
			},
			{
			breakpoint: 768, 
			settings: {
				slidesToShow: 2, 
				slidesPerRow: 1,
			}
			}
		]

	});

	//  filter 
	$(".it-course-filter-button").on("click", function () {
		$(".it-course-filter-dropdown-area").toggleClass('it-filter-dropdown-opened');
	});

	$(function () {
		$(".it-course-filter-open-button").on("click", function () {
			$(".it-course-filter-dropdown-style-2").slideToggle(500);
		});
	});


	
	// scroll nav class add
    if ($('#course_details2_nav').length > 0) {
        $('#course_details2_nav').onePageNav({
            currentClass: 'current',
            scrollSpeed: 750,
            scrollThreshold: 0.5,
        });
    }
    // class add
    $('.it-course-details-nav-box nav ul li').on('click', function () {
        $(this).addClass('current').siblings().removeClass('current');
    });

	// Parallax Js
	if ($('.scene').length > 0) {
		$('.scene').parallax({
			scalarX: 5.0,
			scalarY: 5.0,
		});
	};
	if ($('.scene-y').length > 0) {
		$('.scene-y').parallax({
			scalarY: 5.0,
			scalarX: 0,
		});
	};

	////////////////////////////////////////////////////
	// Partner Logo Auto Scroll with Mouse Drag
	////////////////////////////////////////////////////
	if ($('.it-partner-scroll-track').length > 0) {
		var $track = $('.it-partner-scroll-track');
		var $wrapper = $('.it-partner-scroll-wrapper');
		var isDragging = false;
		var startX = 0;
		var currentX = 0;
		var trackWidth = 0;

		// Get track width for infinite scroll calculation
		function updateTrackWidth() {
			// Wait for items to load
			setTimeout(function() {
				trackWidth = $track[0].scrollWidth / 2;
			}, 100);
		}
		updateTrackWidth();
		$(window).on('resize', updateTrackWidth);

		// Get current transform position
		function getCurrentTransform() {
			var transform = window.getComputedStyle($track[0]).transform;
			if (transform && transform !== 'none') {
				var matrix = transform.match(/matrix.*\((.+)\)/);
				if (matrix) {
					var values = matrix[1].split(', ');
					return parseFloat(values[4]) || 0;
				}
			}
			return 0;
		}

		// Mouse down - start dragging
		$wrapper.on('mousedown', function(e) {
			isDragging = true;
			$track.addClass('dragging');
			startX = e.pageX;
			currentX = getCurrentTransform();
			// Remove animation temporarily to allow manual transform
			$track.css('animation', 'none');
			$track.css('transform', 'translateX(' + currentX + 'px)');
			$wrapper.css('cursor', 'grabbing');
			e.preventDefault();
		});

		// Mouse move - drag
		$(document).on('mousemove', function(e) {
			if (!isDragging) return;
			
			e.preventDefault();
			var walk = (e.pageX - startX) * 1.5; // Drag speed multiplier
			var newPosition = currentX + walk;

			// Wrap around for infinite scroll
			if (trackWidth > 0) {
				if (newPosition <= -trackWidth) {
					newPosition = newPosition + trackWidth;
					currentX = newPosition;
					startX = e.pageX;
				} else if (newPosition > 0) {
					newPosition = newPosition - trackWidth;
					currentX = newPosition;
					startX = e.pageX;
				}
			}

			$track.css('transform', 'translateX(' + newPosition + 'px)');
		});

		// Mouse up - stop dragging
		$(document).on('mouseup', function() {
			if (isDragging) {
				isDragging = false;
				$track.removeClass('dragging');
				$wrapper.css('cursor', 'grab');
				// Restore animation - it will start from 0, but that's okay for infinite scroll
				$track.css('animation', '');
			}
		});

		// Touch events for mobile
		$wrapper.on('touchstart', function(e) {
			isDragging = true;
			$track.addClass('dragging');
			startX = e.originalEvent.touches[0].pageX;
			currentX = getCurrentTransform();
			$track.css('animation', 'none');
			$track.css('transform', 'translateX(' + currentX + 'px)');
			e.preventDefault();
		});

		$(document).on('touchmove', function(e) {
			if (!isDragging) return;
			
			e.preventDefault();
			var walk = (e.originalEvent.touches[0].pageX - startX) * 1.5;
			var newPosition = currentX + walk;

			if (trackWidth > 0) {
				if (newPosition <= -trackWidth) {
					newPosition = newPosition + trackWidth;
					currentX = newPosition;
					startX = e.originalEvent.touches[0].pageX;
				} else if (newPosition > 0) {
					newPosition = newPosition - trackWidth;
					currentX = newPosition;
					startX = e.originalEvent.touches[0].pageX;
				}
			}

			$track.css('transform', 'translateX(' + newPosition + 'px)');
		});

		$(document).on('touchend', function() {
			if (isDragging) {
				isDragging = false;
				$track.removeClass('dragging');
				$track.css('animation', '');
			}
		});

		// Ensure smooth scrolling
		$track.css({
			'will-change': 'transform',
			'backface-visibility': 'hidden'
		});
	};

	////////////////////////////////////////////////////
	// Enquiry Form Country Dropdown
	////////////////////////////////////////////////////
	if ($('#enquiry-country').length > 0) {
		const countries = [
			{ code: "af", name: "Afghanistan" },
			{ code: "al", name: "Albania" },
			{ code: "dz", name: "Algeria" },
			{ code: "ad", name: "Andorra" },
			{ code: "ao", name: "Angola" },
			{ code: "ag", name: "Antigua and Barbuda" },
			{ code: "ar", name: "Argentina" },
			{ code: "am", name: "Armenia" },
			{ code: "au", name: "Australia" },
			{ code: "at", name: "Austria" },
			{ code: "az", name: "Azerbaijan" },
			{ code: "bs", name: "Bahamas" },
			{ code: "bh", name: "Bahrain" },
			{ code: "bd", name: "Bangladesh" },
			{ code: "bb", name: "Barbados" },
			{ code: "by", name: "Belarus" },
			{ code: "be", name: "Belgium" },
			{ code: "bz", name: "Belize" },
			{ code: "bj", name: "Benin" },
			{ code: "bt", name: "Bhutan" },
			{ code: "bo", name: "Bolivia" },
			{ code: "ba", name: "Bosnia and Herzegovina" },
			{ code: "bw", name: "Botswana" },
			{ code: "br", name: "Brazil" },
			{ code: "bn", name: "Brunei" },
			{ code: "bg", name: "Bulgaria" },
			{ code: "bf", name: "Burkina Faso" },
			{ code: "bi", name: "Burundi" },
			{ code: "kh", name: "Cambodia" },
			{ code: "cm", name: "Cameroon" },
			{ code: "ca", name: "Canada" },
			{ code: "cv", name: "Cape Verde" },
			{ code: "cf", name: "Central African Republic" },
			{ code: "td", name: "Chad" },
			{ code: "cl", name: "Chile" },
			{ code: "cn", name: "China" },
			{ code: "co", name: "Colombia" },
			{ code: "km", name: "Comoros" },
			{ code: "cg", name: "Congo" },
			{ code: "cr", name: "Costa Rica" },
			{ code: "hr", name: "Croatia" },
			{ code: "cu", name: "Cuba" },
			{ code: "cy", name: "Cyprus" },
			{ code: "cz", name: "Czech Republic" },
			{ code: "dk", name: "Denmark" },
			{ code: "dj", name: "Djibouti" },
			{ code: "dm", name: "Dominica" },
			{ code: "do", name: "Dominican Republic" },
			{ code: "ec", name: "Ecuador" },
			{ code: "eg", name: "Egypt" },
			{ code: "sv", name: "El Salvador" },
			{ code: "ee", name: "Estonia" },
			{ code: "et", name: "Ethiopia" },
			{ code: "fi", name: "Finland" },
			{ code: "fr", name: "France" },
			{ code: "ga", name: "Gabon" },
			{ code: "gm", name: "Gambia" },
			{ code: "ge", name: "Georgia" },
			{ code: "de", name: "Germany" },
			{ code: "gh", name: "Ghana" },
			{ code: "gr", name: "Greece" },
			{ code: "gt", name: "Guatemala" },
			{ code: "gn", name: "Guinea" },
			{ code: "gy", name: "Guyana" },
			{ code: "ht", name: "Haiti" },
			{ code: "hn", name: "Honduras" },
			{ code: "hk", name: "Hong Kong" },
			{ code: "hu", name: "Hungary" },
			{ code: "is", name: "Iceland" },
			{ code: "in", name: "India" },
			{ code: "id", name: "Indonesia" },
			{ code: "ir", name: "Iran" },
			{ code: "iq", name: "Iraq" },
			{ code: "ie", name: "Ireland" },
			{ code: "il", name: "Israel" },
			{ code: "it", name: "Italy" },
			{ code: "jm", name: "Jamaica" },
			{ code: "jp", name: "Japan" },
			{ code: "jo", name: "Jordan" },
			{ code: "kz", name: "Kazakhstan" },
			{ code: "ke", name: "Kenya" },
			{ code: "kw", name: "Kuwait" },
			{ code: "kg", name: "Kyrgyzstan" },
			{ code: "la", name: "Laos" },
			{ code: "lv", name: "Latvia" },
			{ code: "lb", name: "Lebanon" },
			{ code: "ls", name: "Lesotho" },
			{ code: "lr", name: "Liberia" },
			{ code: "lt", name: "Lithuania" },
			{ code: "lu", name: "Luxembourg" },
			{ code: "my", name: "Malaysia" },
			{ code: "mv", name: "Maldives" },
			{ code: "ml", name: "Mali" },
			{ code: "mt", name: "Malta" },
			{ code: "mx", name: "Mexico" },
			{ code: "md", name: "Moldova" },
			{ code: "mn", name: "Mongolia" },
			{ code: "ma", name: "Morocco" },
			{ code: "mz", name: "Mozambique" },
			{ code: "mm", name: "Myanmar" },
			{ code: "na", name: "Namibia" },
			{ code: "np", name: "Nepal" },
			{ code: "nl", name: "Netherlands" },
			{ code: "nz", name: "New Zealand" },
			{ code: "ng", name: "Nigeria" },
			{ code: "no", name: "Norway" },
			{ code: "om", name: "Oman" },
			{ code: "pk", name: "Pakistan" },
			{ code: "ph", name: "Philippines" },
			{ code: "pl", name: "Poland" },
			{ code: "pt", name: "Portugal" },
			{ code: "qa", name: "Qatar" },
			{ code: "ro", name: "Romania" },
			{ code: "ru", name: "Russia" },
			{ code: "sa", name: "Saudi Arabia" },
			{ code: "sg", name: "Singapore" },
			{ code: "sk", name: "Slovakia" },
			{ code: "si", name: "Slovenia" },
			{ code: "za", name: "South Africa" },
			{ code: "kr", name: "South Korea" },
			{ code: "es", name: "Spain" },
			{ code: "lk", name: "Sri Lanka" },
			{ code: "se", name: "Sweden" },
			{ code: "ch", name: "Switzerland" },
			{ code: "tw", name: "Taiwan" },
			{ code: "th", name: "Thailand" },
			{ code: "tr", name: "Turkey" },
			{ code: "ae", name: "United Arab Emirates" },
			{ code: "uk", name: "United Kingdom" },
			{ code: "us", name: "United States" },
			{ code: "uy", name: "Uruguay" },
			{ code: "ve", name: "Venezuela" },
			{ code: "vn", name: "Vietnam" },
			{ code: "zw", name: "Zimbabwe" }
		];

		// Clear existing options (except the default "Select your country")
		var $select = $('#enquiry-country');
		var defaultOption = $select.find('option[value=""]').first();
		$select.empty();
		if (defaultOption.length > 0) {
			$select.append(defaultOption);
		} else {
			$select.append($('<option></option>').attr('value', '').text('Select your country'));
		}

		// Populate with all countries
		$.each(countries, function (i, country) {
			$select.append(
				$('<option></option>').attr('value', country.code).text(country.name)
			);
		});
	}

	////////////////////////////////////////////////////
	// Enquiry Form Course Dropdown
	////////////////////////////////////////////////////
	if ($('#enquiry-course').length > 0) {
		const courses = [
			"Business Management, University Foundation programme (Level 3 - 60 credits)",
			"Foundation Diploma in Accountancy",
			"Integration Diploma in Business and Management (Level 3 – 120 credits)",
			"Introduction to Management Diploma (Level 3 - 60 credits)",
			"Level 3 Employability and Workplace Skills (60 Credits)",
			"Level 3 Foundation Diploma in Engineering",
			"Level 3 Foundation Diploma in Health and Social Care",
			"Level 3 Foundation Diploma in IT",
			"Level 3 Foundation Diploma in People and Organisations",
			"Accounting and Finance (Level 4 and 5)",
			"Business Management (Level 4 and 5)",
			"Entrepreneurship and Management (Level 4 and 5)",
			"Health and Social Care, University 1st and 2nd Year (Level 4 and 5)",
			"Hotel and Hospitality (Level 4 and 5)",
			"Human Resource Management (Level 4 and 5)",
			"IT and E-commerce (Level 4 and 5)",
			"IT and Networking (Level 4 and 5)",
			"IT and Web Design (Level 4 and 5)",
			"IT and Computing (Level 4 and 5)",
			"Leadership and Teamwork (Level 4 and 5)",
			"Level 4 and 5 Diploma in Logistics and Supply Chain Management",
			"Sales and Marketing",
			"Sales and Marketing (Level 4 and 5)",
			"Teacher Training (Level 5)",
			"Business Administration (Level 6)",
			"Level 6 Sales Techniques",
			"Level 7 Diploma in Project Management",
			"Level 7 Diploma in Psychology",
			"Level 7 Human Resource Management",
			"Level 7 Strategic Sales Management",
			"Strategic Management and Leadership (Level 7)"
		];

		// Clear existing options (except the default "Select your course")
		var $selectCourse = $('#enquiry-course');
		var defaultOptionCourse = $selectCourse.find('option[value=""]').first();
		$selectCourse.empty();
		if (defaultOptionCourse.length > 0) {
			$selectCourse.append(defaultOptionCourse);
		} else {
			$selectCourse.append($('<option></option>').attr('value', '').text('Select your course'));
		}

		// Populate with all courses
		$.each(courses, function (i, courseName) {
			// Create a value from the course name (lowercase, replace spaces/special chars with hyphens)
			var courseValue = courseName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
			$selectCourse.append(
				$('<option></option>').attr('value', courseValue).text(courseName)
			);
		});
	}
	 
})(jQuery);
