// previous button checked
(()=>{
    // get current page
    let page;
    document.querySelector(".previous").classList.contains("previous-home") ? page = "home" : "page";

    // create previous shared elements
    let btnGroup ,previousHead, previousContent;
    // create previous content variables
    let title, subTitle, visitors, speakers, views, news, description, secondDescription, secondTitle;

    // set previous content default values
    const setPreviousContentDefaultValues = ()=>{
        title = 'أرقام عن الدورة الأولى للمنتدى'
        subTitle = '3-2 أكتوبر / تشرين أول 2022'
        visitors = 5000;
        speakers = 250;
        views = 950;
        news = 500;
        description = `المنتدى العربي للمناخ هو نتاج التعاون بين وزارة البيئة وبرنامج الخليج العربي للتنمية «اجفند»، وجامعة الدول العربية والشبكة العربية للمنظمات الأهلية، والمجلس العربي للطفولة والتنمية، وذلك في إطار تحضيرات مصر لإستضافة مؤتمر الأطراف السابع والعشرون للتغيرات المناخية بمدينة شرم الشيخ.`
        secondDescription = `جاء المنتدى في نسخته الأولى تحت شعار "معا لتعزيز اسهام المجتمع المدني في العمل المناخي والاستدامة"`;
        secondTitle = `الدورة الأولى في أرقام`;
    }
    setPreviousContentDefaultValues();

    // shared components content
    btnGroup = `
    <div class="previous-forum btn-group" role="group" aria-label="Basic radio toggle button group">
        <input type="radio" class="btn-check previous-radio-${page}" name="previous-radio" id="first-forum" autocomplete="off" checked>
        <label class="btn" for="first-forum">الدورة الأولى</label>
    
        <input type="radio" class="btn-check previous-radio-${page}" name="previous-radio" id="second-forum" autocomplete="off">
        <label class="btn" for="second-forum">الدورة الثانية</label>
    </div>
    `;

    previousHead=`
    <h3 class="main-head">${title}</h3>
    <p>${subTitle}</p>
    `;

    previousContent=`
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
    `;

    // get previous section
    const previous = document.querySelector(".previous-content");
    document.querySelector(".previous-btn-group").innerHTML = btnGroup;

    // set previous home page inner html function
    const setPreviousHome = (previousHead,previousContent)=>{
        previous.innerHTML = `
            <div class="py-5">
                ${previousHead}
                ${previousContent}
            </div>
        `
    }
    setPreviousHome(previousHead,previousContent);

    // set previous page inner html function
    const setPreviousPage = (previousHead,description, secondDescription, secondTitle, previousContent)=>{
        previous.innerHTML = `
            <!-- start previous description -->
            <div class="previous-description">
                <div class="py-5 bg-light-gray">
                    <div class="container">
                        ${previousHead}
                        <p class="py-4">${description}</p>
                        <p>${secondDescription}</p>
                    </div>
                </div>
            </div>
            <!-- end previous description -->

            <!-- start previous statistics -->
            <div class="previous-statistics">
                <div class="container py-5">
                    <h3 class="main-head text-black text-center">${secondTitle}</h3>
                    ${previousContent}
                </div>
            </div>
            <!-- end previous statistics -->
        `
    }
    setPreviousPage(previousHead,description, secondDescription, secondTitle, previousContent);

    // fire action depending on the current page
    page=="home" ? setPreviousHome(previousHead,previousContent) 
    : setPreviousPage(previousHead,description, secondDescription, secondTitle, previousContent);

    document.querySelectorAll('input[name="previous-radio"]').forEach(radio => {
        radio.addEventListener('change', (event) => {

            // change previous content
            if(event.target.id=="first-forum"){
                setPreviousContentDefaultValues();
            }else if(event.target.id=="second-forum"){
                title = 'استعدوا للدورة الثانية';
                subTitle = 'قريبا';
                visitors = 0;
                speakers = 0;
                views = 0;
                news=0;
                description = ``;
                secondDescription = ``;
                secondTitle = `الدورة الثانية ستأتي قريبا`;
            }

            // shared components content
            previousHead=`
            <h3 class="main-head">${title}</h3>
            <p>${subTitle}</p>
            `;

            previousContent=`
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
            `;

            // set previous inner html
            page=="home" ? setPreviousHome(previousHead,previousContent) 
            : setPreviousPage(previousHead,description, secondDescription, secondTitle, previousContent);
        });
    });

})()