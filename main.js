// add header component
(()=>{
    const header= document.querySelector("header");
    header.className="pt-5 text-green";
    header.innerHTML=`
    <nav class="navbar navbar-expand-lg py-0">
        <div class="d-flex justify-content-between flex-wrap flex-lg-column gap-lg-4 w-100 mb-5 mb-lg-0">

            <div class="container d-flex justify-content-lg-between justify-content-around align-items-center col-9 col-lg-12">
                <div class=""><button class="btn btn-green border border-2 border-green py-0 px-4 text-green">تسجيل</button></div>
                <div class=""><a href="./index.html"><img class="logo img-fluid" src="assets/logo.png" alt=""></a></div>
                <div class="btn d-none d-lg-flex align-items-center gap-2 border-0">
                    <img src="assets/message.svg" alt="">
                    <span class="text-green">تواصل معنا</span>
                </div>
            </div>

            <button class="navbar-toggler col-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <img class="img-fluid" src="assets/menu.svg" alt="">
            </button>
            
            <div class="collapse rounded-top-4 py-1 w-100 bg-green navbar-collapse px-0 mt-3" id="navbarNavDropdown">
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
})();


// add footer component
(()=>{
    const footer= document.querySelector("footer");
    footer.className="py-5"
    const footerContent= `
    <div class="container">
        <div class="row text-white">

            <div class="col-lg-5 mb-5">
                <img class="logo img-fluid" src="assets/logo-footer.png" alt="">
                <p class="text-small mt-4">المنتدى العربي للمناخ هو نتاج التعاون بين وزارة البيئة وبرنامج الخليج العربي للتنمية «اجفند»، وجامعة الدول العربية والشبكة العربية للمنظمات الأهلية، والمجلس العربي للطفولة والتنمية</p>
            </div>

            <div class="col-5 col-lg-2 mb-5">
                <h5 class="fw-bold mb-4">روابط سريعة</h5>
                <ul class="d-flex flex-column gap-2">
                    <li><a href="">من نحن</a></li>
                    <li><a href="">الدورات السابقة</a></li>
                    <li><a href="">جرين بالعربي</a></li>
                    <li><a href="">المكتب الإعلامي</a></li>
                    <li><a href="">المكتبة الرقمية</a></li>
                    <li><a href="">أسئلة متكررة</a></li>
                </ul>
            </div> 

            <div class="col-6 col-lg-3">
                <h5 class="fw-bold mb-4">تواصل معنا</h5>
                <ul class="d-flex flex-column gap-3">
                    <li class="fw-bold">الشبكة العربية للمنظمات الأهلية</li>
                    <li>
                        <a class="d-flex align-items-center gap-2" href="">
                            <img class="icon img-fluid" src="assets/location.svg" alt="">
                            <span>تقاطع شارعي مكرم عبيد مع منظمة
                                الصحة العالمية، مدينة نصر، القاهرة، مصر</span>
                        </a>
                    </li>
                    <li>
                        <a class="d-flex align-items-center gap-2" href="">
                            <img class="icon img-fluid" src="assets/mail.svg" alt="">
                            <span>info@anngo.org / media@anngo.org</span>
                        </a>
                    </li>
                    <li>
                        <a class="d-flex align-items-center gap-2" href="">
                            <img class="icon img-fluid" src="assets/call.svg" alt="">
                            <span>+20223493418/417</span>
                        </a>
                    </li>
                </ul>
            </div>

            <div class="col-lg-2 mt-auto">
                <div class="d-flex gap-2 justify-content-end">
                    <a class="border border-white rounded-circle d-flex justify-content-center align-items-center px-1" href=""><img src="assets/instagram.svg" alt=""></a>
                    <a class="border border-white rounded-circle d-flex justify-content-center align-items-center px-1" href=""><img src="assets/twitter.svg" alt=""></a>
                    <a class="border border-white rounded-circle d-flex justify-content-center align-items-center px-2 py-1" href=""><img src="assets/facebook.svg" alt=""></a>
                </div>
                <span class="text-small mt-3 d-flex justify-content-end">جميع الحقوق محفوظة 2023</span>
            </div>

        </div>
    </div>
    `;
    footer.innerHTML=footerContent;
})();