(function ($) {
    "use strict";
    // for sticky navbar
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            $(".navbar-area").addClass("sticky");
        } else {
            $(".navbar-area").removeClass("sticky");
        }
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            $(".navbar-area .main-nav").addClass("sticky");
        } else {
            $(".navbar-area .main-nav").removeClass("sticky");
        }
    });

    // Buy Now Btn
    $('body').append("<a href='https://1.envato.market/LP4MW3' class='buy-now-btn' target='_blank'><img src='assets/images/envato.png' alt='envato'/>Buy Now</a>");

    // Mean Menu
    $(".mean-menu").meanmenu({
        meanScreenWidth: "1199",
    });

    // popup button
    $('.popup-button').click(function () {
        $('.popup').css('visibility', 'visible');
        $('.popup-content').addClass('hi');
    })
    $('#popup-close').click(function () {
        $('.popup').css('visibility', 'hidden');
        $('.popup-content').removeClass('hi');
    })
    
    $(".home-banner-slider-area").owlCarousel({
        autoplayHoverPause: true,
        autoplaySpeed: 1000,
        loop: true,
        autoplay: true,
        dots: true,
        items: 1,
        animateOut: 'zoomOut',
        nav: true,
        rtl: true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    });
    
    $(".portfolio-slider-area").owlCarousel({
        autoplayHoverPause: true,
        autoplaySpeed: 1500,
        autoplay: true,
        loop: true,
        dots: false,
        margin: 30,
        nav: true,
        rtl: true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            992: {
                items: 3,
            },
        },
    });

    $(".partner-slider-area").owlCarousel({
    autoplayHoverPause: true,
    autoplaySpeed: 1500,
    autoplay: true,
    loop: true,
    dots: false,
    margin: 30,
    rtl: true,
    responsive: {
        0: {
        items: 3,
        margin: 20,
        },
        576: {
        items: 3,
        margin: 50,
        },
        768: {
            items: 4,
            margin: 80,
        },
        992: {
        items: 5,
        margin: 80,
        },
        1200: {
        items: 6,
        margin: 100,
        },
    },
    });

    $(".video-popup").magnificPopup({
        type: "iframe",
    });

    // language select
    $("select").niceSelect();

    // Go to Top
    $(function () {
        // Scroll Event
        $(window).on("scroll", function () {
            var scrolled = $(window).scrollTop();
            if (scrolled > 600) $(".go-top").addClass("active");
            if (scrolled < 600) $(".go-top").removeClass("active");
        });
        // Click Event
        $(".go-top").on("click", function () {
            $("html, body").animate({ scrollTop: "0" }, 500);
        });
    });

    $(".odometer").appear(function (e) {
        var odo = $(".odometer");
        odo.each(function () {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
        });
    });

    // WOW Animation JS
    if ($(".wow").length) {
        var wow = new WOW({
            mobile: false,
        });
        wow.init();
    }

    // Subscribe form JS
	$(".newsletter-form").validator().on("submit", function (event) {
		if (event.isDefaultPrevented()) {
		// handle the invalid form...
			formErrorSub();
			submitMSGSub(false, "Please enter your email correctly.");
		} else {
			// everything looks good!
			event.preventDefault();
		}
	});
	function callbackFunction (resp) {
		if (resp.result === "success") {
			formSuccessSub();
		}
		else {
			formErrorSub();
		}
	}
	function formSuccessSub(){
		$(".newsletter-form")[0].reset();
		submitMSGSub(true, "Thank you for subscribing!");
		setTimeout(function() {
			$("#validator-newsletter, #validator-newsletter-2").addClass('hide');
		}, 4000)
	}
	function formErrorSub(){
		$(".newsletter-form").addClass("animated shake");
		setTimeout(function() {
			$(".newsletter-form").removeClass("animated shake");
		}, 1000)
	}
	function submitMSGSub(valid, msg){
		if(valid){
			var msgClasses = "validation-success";
		} else {
			var msgClasses = "validation-danger";
		}
		$("#validator-newsletter, #validator-newsletter-2").removeClass().addClass(msgClasses).text(msg);
	}
	
	// AJAX MailChimp JS
	$(".newsletter-form").ajaxChimp({
		url: "https://Envy Theme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9", // Your url MailChimp
		callback: callbackFunction
	});

})(jQuery);


// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}

// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
        document.getElementById('slider').checked = false;
    } else {
        setTheme('theme-light');
        document.getElementById('slider').checked = true;
    }
})();