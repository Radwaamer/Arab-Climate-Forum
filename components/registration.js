// add registration component
(()=>{
    const registration= document.getElementById("registration");
    registration.className="py-5";
    const registrationContent = `
    <div class="container">
        <div class="registration d-flex align-items-center rounded-2">
            <p class="px-5 text-green">كـُـن جــزءاً من المنتدى</p>
            <button class="btn green-btn d-flex align-items-center gap-4 rounded-2 px-3">
                <p>سجّل الآن</p>
                <img class="img-fluid" src="assets/register.svg" alt="">
            </button>
        </div>
    </div>
    `
    registration.innerHTML=registrationContent;
})();