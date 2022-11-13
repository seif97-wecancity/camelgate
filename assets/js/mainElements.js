

 



$(document).ready(function () {
    const date1 = new Date();
    $('.copyright-wrap').html(`
    <p class="mb-0 text-center" style="direction:ltr">&copy; ${date1.getFullYear()} camelgate.app - All rights reserved <br/> Developed By
     <a  href="https://wecancity.com/" target="_blank"> wecancity</a></p>
    
    `)
    $('header').html(`
    <nav class="navbar navbar-expand-lg fixed-top bg-transparent mx-0">
    <div class="container ">
                    <a class="navbar-brand" href="index.html">
                    <img src="assets/img/logo-white.png" alt="logo" class="img-fluid" />
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="ti-menu"></span>
                </button>

        <div class="collapse navbar-collapse h-auto" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto menu">
                   <li><a href="index.html" data-i18n="home" > Home</a>
                </li>
                <li><a href="about-us.html" class="page-scroll" data-i18n="About">About Us </a></li>
                 
                <li><a href="shipments.html" class="page-scroll" data-i18n="Shipping_companies">Shipments </a></li>
                <li><a href="Trucks.html" class="page-scroll" data-i18n="Trucking_companies">Trucks</a></li>
                <li><a href="Drivers.html" class="page-scroll" data-i18n="Drivers">Drivers</a></li>
                <li><a href="contact-us.html" class="page-scroll" data-i18n="Contact">Contact Us </a></li>
             
                     <li class=""><a href="#"  class="page-scroll" id="lang" data-i18n="lang" onClick=changetoenglish()>عربي</a></li>

            </ul>
        </div>
    </div>
</nav>

    `) ;
    
    
    $('footer').html(` 
    <!--subscribe newsletter start-->
    <div class="container">
        <div class="row newsletter-wrap primary-bg rounded shadow-lg p-5">
            <div class="col-md-6 col-lg-7 mb-4 mb-md-0 mb-sm-4 mb-lg-0">
                <div class="newsletter-content text-white">
                    <h3 class="mb-0 text-white" data-i18n="Subscribe_our_Newsletter">Subscribe our Newsletter</h3>
                    <p class="mb-0" data-i18n="Were_a_team_of_non_cynics_who_truly_care_for_our_work">We’re a team of non-cynics who truly care for our work</p>
                </div>
            </div>
            <div class="col-md-6 col-lg-5">
                <div class="newsletter-form position-relative" >
                    <input type="email" class="input-newsletter form-control" placeholder="Enter your email" id="subscription"  required >
                    <button class="disabled" id="btnSubscription"><i class="fas fa-paper-plane"></i></button>
                </div>
            </div>
        </div>
    </div>
    <!--subscribe newsletter end-->

    <div class="container">
        <div class="row">
            <div class="col-md-12 col-lg-4 mb-4 mb-md-4 mb-sm-4 mb-lg-0">
                <a href="#" class="navbar-brand mb-2">
                    <img src="assets/img/logo-white.png" alt="logo" class="img-fluid">
                </a>
                <br>
                <p class="lead-9" data-i18n="We_commit_harnessing_our_full_capabilities">We commit harnessing our full capabilities, experiences and knowledge to innovate and build a Saudi digital technology system in the logistics field that competes globally</p>
                <div class="list-inline social-list-default background-color social-hover-2 mt-2">
                    <li class="list-inline-item d-none"><a class="twitter" href="https://twitter.com/camelgateapp" target="_blank"><i class="fab fa-twitter"></i></a></li>
                    <li class="list-inline-item"><a class="facebook" href="https://www.facebook.com/camelgateapp" target="_blank"><i class="fab fa-facebook"></i></a></li>
                    <li class="list-inline-item "><a class="instagram" href="https://www.instagram.com/camelgate.app/" target="_blank"><i class="fab fa-instagram"></i></a></li>
                    <li class="list-inline-item"><a class="linkedin" href="https://www.linkedin.com/company/camelgateapp/" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
                </div>
            </div>
            <div class="col-md-12 col-lg-8">
                <div class="row mt-0">
                    <div class="col-sm-6 col-md-3 col-lg-3 mb-4 mb-sm-4 mb-md-0 mb-lg-0">
                        <h6 class="text-uppercase" data-i18n="Links">Links</h6>
                        <ul>
                                          <li><a href="index.html" data-i18n="home" > Home</a>
                </li>
                <li><a href="about-us.html" class="page-scroll" data-i18n="About">About US </a></li>
                 
                <li><a href="shipments.html" class="page-scroll" data-i18n="Shipping_companies">Shipping companies</a></li>
                <li><a href="Trucks.html" class="page-scroll" data-i18n="Trucking_companies">Trucking companies</a></li>
                <li><a href="Drivers.html" class="page-scroll" data-i18n="Drivers">Drivers</a></li>
                <li><a href="contact-us.html" class="page-scroll" data-i18n="Contact">Contact Us </a></li>

                        </ul>
                    </div>
             
     
                    <!-- Footer Column -->
                    <div class="  col-lg-9 col-md-12  mb-4 mb-md-4 mb-sm-4 mb-lg-0" >
                        <div class="footer-widget instagram-widget">
                            <div class="map-containera">

                            <iframe class="w-100"  style="    height: 200px ;"  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3789.8238586117022!2d42.547292185111814!3d18.218016387585973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDEzJzA0LjkiTiA0MsKwMzInNDIuNCJF!5e0!3m2!1sar!2ssa!4v1667162202026!5m2!1sar!2ssa" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--end of container-->
`)
})
 

 