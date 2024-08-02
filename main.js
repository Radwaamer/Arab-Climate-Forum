// swiper
const swiper = new Swiper('.speakers', {
    spaceBetween: 30,
    centeredSlider: true,
    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
    },
    // Optional parameters
    breakpoints: {
        0: {
            slidesPerView: 1.2,
        },
        768: {
            slidesPerView: 2.2,
        },
        992: {
            slidesPerView: 2.2,
        },
        1200: {
            slidesPerView: 3.2,
        },
    }
});

const swiper2 = new Swiper('.previous-speakers', {
    spaceBetween: 30,
    centeredSlider: true,
    navigation: {
        nextEl: '.swiper2-next',
        prevEl: '.swiper2-prev',
    },
    // Optional parameters
    breakpoints: {
        0: {
            slidesPerView: 2.3,
        },
        768: {
            slidesPerView: 3.3,
        },
        992: {
            slidesPerView: 3.3,
        },
        1200: {
            slidesPerView: 4.3,
        },
    }
});

const swiper3 = new Swiper('.previous-album', {
    spaceBetween: 10,
    centeredSlider: true,
    navigation: {
        nextEl: '.swiper3-next',
        prevEl: '.swiper3-prev',
    },
    // Optional parameters
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
    }
});

// countdown
var countDownDate = new Date("jan 1, 2025 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="countdown"
    document.getElementById("countdown").innerHTML = seconds + " : " + minutes + " : " + hours + " : " + days;
        
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);


// handle nav bar at different window screens
(()=>{
    // get header and navbar elements
    const header= document.querySelector("header");
    const nav= document.querySelector(".nav");

    // set header and navbar className
    header.className="py-5";

    // create navbar content
    const navContent= `
    <nav class="navbar navbar-expand-lg bg-green rounded-top-4 w-100">
        <div class="container">

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <img class="img-fluid" src="assets/menu.svg" alt="">
            </button>

            <div class="collapse mt-4 mt-lg-0 navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav justify-content-around flex-grow-1 text-center text-lg-end">

                    <li class="nav-item">
                        <a class="text-white nav-link active" aria-current="page" href="#">من نحن</a>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="text-white nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            الدورات السابقة
                        </a>
                        <ul class="dropdown-menu text-center text-lg-end">
                            <li><a class="text-white dropdown-item" href="#">الدورة الأولى</a></li>
                            <li><a class="text-white dropdown-item" href="#">الدورة الثانية</a></li>
                        </ul>
                    </li>

                    <li class="nav-item">
                        <a class="text-white nav-link" href="#">جرين بالعربي</a>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="text-white nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            المكتب الإعلامي
                        </a>
                        <ul class="dropdown-menu text-center text-lg-end">
                            <li><a class="text-white dropdown-item" href="#">الدورة الأولى</a></li>
                            <li><a class="text-white dropdown-item" href="#">الدورة الثانية</a></li>
                        </ul>
                    </li>

                    <li class="nav-item">
                        <a class="text-white nav-link" href="#">المكتبة الرقمية</a>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
    `
    // create header content elements
    const logoDiv = document.createElement("div");
    const signDiv = document.createElement("div");
    const contactDiv = document.createElement("button");

    // create header content inner elemnts
    logoDiv.innerHTML=`<img class="logo img-fluid" src="assets/logo.png" alt="">`;
    signDiv.innerHTML=`<button class="btn btn-green border border-2 border-green py-0 px-4 text-green">تسجيل</button>`;
    contactDiv.innerHTML=`
                    <img src="assets/message.svg" alt="">
                    <span class="text-green">تواصل معنا</span>`;
    contactDiv.className=`btn d-flex align-items-center gap-2`;

    // get screen size
    let largeScreen=false;
    const getScreenSize= ()=>{
        if(window.innerWidth>992){
            largeScreen=true;
        }else{
            largeScreen=false;
        }
    };

    // set nav bar depending on screen size
    const handleNav=()=>{
        if(largeScreen){
            nav.innerHTML=navContent;
            header.innerHTML="";
            header.className='container py-5 text-green d-flex justify-content-between align-items-center';
            header.prepend(contactDiv);
            header.prepend(logoDiv);
            header.prepend(signDiv);
        }else{
            header.innerHTML=navContent;
            logoDiv.className="d-flex justify-content-between align-items-center";
            const navContainer= document.querySelector("header .navbar .container");
            navContainer.prepend(logoDiv);
            navContainer.prepend(signDiv);
            nav.innerHTML="";
        }
    }

    // fire actions
    getScreenSize();
    handleNav();
    window.addEventListener('resize',()=>{
        getScreenSize();
        handleNav()
    });
})();