// handle nav bar at different window screens
(()=>{
    // get header and navbar elements
    const header= document.querySelector("header");
    const nav= document.querySelector("nav");

    // set header and navbar className
    header.className="py-5";
    nav.className="navbar navbar-expand-lg bg-green rounded-top-4 w-100"

    // create navbar content
    const navContent= `
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


