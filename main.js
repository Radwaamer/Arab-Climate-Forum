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


// previous button checked
document.querySelectorAll('input[name="btnradio"]').forEach(radio => {
    radio.addEventListener('change', (event) => {
        const previousContent = document.querySelector(".previous-content");
        let title, subTitle, visitors, speakers, views, news;
        if(event.target.id=="first-forum"){
            title = 'أرقام عن الدورة الأولى للمنتدى'
            subTitle = '3-2 أكتوبر / تشرين أول 2022'
            visitors = 5000;
            speakers = 250;
            views = 950;
            news=500;
        }else if(event.target.id=="second-forum"){
            title = 'استعدوا للدورة الثانية';
            subTitle = 'قريبا';
            visitors = 0;
            speakers = 0;
            views = 0;
            news=0;
        }
        previousContent.innerHTML = `
        <h3 class="main-head">${title}</h3>
                <p>${subTitle}</p>
                <div class="row pt-4">

                    <div class="col-6 col-lg-3 mb-3">
                        <div class="rounded-3 bg-light-gray d-flex gap-4 justify-content-center align-items-center py-3 px-4">
                            <div class="previous-icon"><img class="img-fluid" src="assets/visitors-icon.svg" alt=""></div>
                            <div class="text-center">
                                <span class="fw-bolder fs-3">${visitors}</span>
                                <p>عدد الزائرين</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-6 col-lg-3">
                        <div class="rounded-3 bg-light-gray d-flex gap-4 justify-content-center align-items-center py-3 px-4">
                            <div class="previous-icon"><img class="img-fluid" src="assets/talkers-icon.svg" alt=""></div>
                            <div class="text-center">
                                <span class="fw-bolder fs-3">${speakers}</span>
                                <p>عدد المتحدثين</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-6 col-lg-3">
                        <div class="rounded-3 bg-light-gray d-flex gap-4 justify-content-center align-items-center py-3 px-4">
                            <div class="previous-icon"><img class="img-fluid" src="assets/watching-icon.svg" alt=""></div>
                            <div class="text-center">
                                <span class="fw-bolder fs-3">${views}</span>
                                <p>ألف مشاهدة</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-6 col-lg-3">
                        <div class="rounded-3 bg-light-gray d-flex gap-4 justify-content-center align-items-center py-3 px-4">
                            <div class="previous-icon"><img class="img-fluid" src="assets/news-icon.svg" alt=""></div>
                            <div class="text-center">
                                <span class="fw-bolder fs-3">${news}</span>
                                <p>خبر ومقال</p>
                            </div>
                        </div>
                    </div>

                </div>
        `
    });
});


// nav bar mobile responsive
(()=>{
    let largeScreen=false;
    const getScreenSize= ()=>{
        if(window.innerWidth>992){
            largeScreen=true;
        }else{
            largeScreen=false;
        }
    };
const navContent= `
<nav class="navbar navbar-expand-lg bg-green rounded-top-4 w-100">
            <div class="container">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
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
const header= document.querySelector("header");
const nav= document.querySelector(".nav");

const logoDiv = document.createElement("div");
const signDiv = document.createElement("div");
const contactDiv = document.createElement("button");
logoDiv.innerHTML=`<img class="logo img-fluid" src="assets/logo.png" alt="">`;
signDiv.innerHTML=`<button class="btn btn-green border border-2 border-green py-0 px-4 text-green">تسجيل</button>`;
contactDiv.innerHTML=`
                <img src="assets/message.svg" alt="">
                <span class="text-green">تواصل معنا</span>`;
contactDiv.className=`btn d-flex align-items-center gap-2`;
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

getScreenSize();
handleNav();
window.addEventListener('resize',()=>{
    getScreenSize();
    handleNav()
});
})()