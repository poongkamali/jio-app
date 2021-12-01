<template>
    <div class="mt-5 pt-5">
        <div class="container">
            <!-- START: Carousel Banner ========= -->
           <div class="row align-items-center">
               <div class="col-lg-8 col-12">
                   <div id="carouselExampleDark" class="carousel carousel-white slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 6"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="6" aria-label="Slide 7"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="10000">
                            <img src="../../../assets/images/carosucel/carosule_1.jpg" class="d-block w-100" alt="...">                       
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src="../../../assets/images/carosucel/carosile_2.jpg" class="d-block w-100" alt="...">                        
                        </div>
                        <div class="carousel-item">
                            <img src="../../../assets/images/carosucel/carosule_3.jpg" class="d-block w-100" alt="logo">
                        </div>
                        <div class="carousel-item">
                            <img src="../../../assets/images/carosucel/carosule_4.jpg" class="d-block w-100" alt="logo">
                        </div>
                        <div class="carousel-item">
                            <img src="../../../assets/images/carosucel/carosule_5.jpg" class="d-block w-100" alt="logo">
                        </div>
                        <div class="carousel-item">
                            <img src="../../../assets/images/carosucel/carosule_6.jpg" class="d-block w-100" alt="logo">
                        </div>
                        <div class="carousel-item">
                            <img src="../../../assets/images/carosucel/carosule_7.jpg" class="d-block w-100" alt="logo">
                        </div>
                    </div>
                 
                    </div>
               </div>
               <div class="col-lg-4 col-12 py-5">
                   <div class="bg-light px-3">
                        <ul class="nav nav-tabs justify-content-between bg-light" id="myTab" role="tablist">
                            <li class="nav-item " role="presentation">
                                <button class="nav-link  border-0 active col-12 buton  p-1" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
                            </li>
                            <li class="nav-item " role="presentation">
                                <button class="nav-link col-12 butn  p-1" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
                            </li>                       
                        </ul>
                        <div class="tab-content bg-light" id="myTabContent">
                            <div class="tab-pane fade show active bg-white px-2" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div class="radiobutton-inline py-1 m-0">
                                    <div class="check-input mx-1 d-flex align-items-center">
                                        <input type="radio" autocomplete="off" checked="">                                   
                                        <label  class="button-md px-2" value="Prepaid">Prepaid</label>
                                    </div>
                                    <div class="check-input mx-1 d-flex align-items-center">
                                        <input type="radio"  name="postpaid">                                    
                                        <label for="postpaid" class="button-md px-2" value="Postpaid">Postpaid</label>
                                    </div>
                                </div>
                                <div class="form-group my-1">
                                    <input type="text" class="form-control" placeholder="Enter Your Mobile Number">
                                </div>      
                                <div class="mb-2">
                                    <strong class="fonts">Select from our popular plans</strong>
                                </div>                          
                                <div class="row row-cols-1 row-cols-md-3 g-4">
                                    <div class="col">
                                        <div class="card">
                                            <div class="card-body text-center p-2 m-0">
                                                <h5 class="card-title p-0 my-0">&#8377;249</h5>
                                                <p class="card-text p-0 my-0">28 DAYS 2GB/DAYS</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="card">
                                            <div class="card-body text-center p-2 m-0">
                                                    <h5 class="card-title p-0 my-0">&#8377;449</h5>
                                                <p class="card-text p-0 my-0">28 DAYS 3GB/DAY</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="card">
                                            <div class="card-body text-center p-2 m-0">
                                                    <h5 class="card-title p-0 my-0">&#8377;666</h5>
                                                <p class="card-text p-0 my-0">56 DAYS 2GB/DAY</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div class="row d-flex align-items-center fonts">
                                    <div class="col-6">
                                       <button class="btn btn-primary">Recharge</button>
                                    </div>
                                    <div class="col-6">
                                       <p class="text-primary pt-4">Check other plans <i class="fas fa-chevron-right"></i></p>
                                    </div>

                                </div>
                            </div>
                            <div class="tab-pane fade bg-white px-2" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                 <div class="radiobutton-inline py-1 m-0">
                                    <div class="check-input mx-1 d-flex align-items-center">
                                        <input type="radio" autocomplete="off" checked="">                                   
                                        <label  class="button-md px-2" value="Prepaid">Prepaid</label>
                                    </div>
                                    <div class="check-input mx-1 d-flex align-items-center">
                                        <input type="radio"  name="postpaid">                                    
                                        <label for="postpaid" class="button-md px-2" value="Postpaid">Postpaid</label>
                                    </div>
                                </div>
                                <div class="form-group my-1">
                                    <input type="text" class="form-control" placeholder="Enter Your Mobile Number">
                                </div>      
                                <div class="mb-2">
                                    <strong class="fonts">Select from our popular plans</strong>
                                </div>                          
                                <div class="row row-cols-1 row-cols-md-3 g-4">
                                    <div class="col">
                                        <div class="card">
                                            <div class="card-body text-center p-2 m-0">
                                                <h5 class="card-title p-0 my-0">&#8377;249</h5>
                                                <p class="card-text p-0 my-0">28 DAYS 2GB/DAYS</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="card">
                                            <div class="card-body text-center p-2 m-0">
                                                    <h5 class="card-title p-0 my-0">&#8377;449</h5>
                                                <p class="card-text p-0 my-0">28 DAYS 3GB/DAY</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="card">
                                            <div class="card-body text-center p-2 m-0">
                                                    <h5 class="card-title p-0 my-0">&#8377;666</h5>
                                                <p class="card-text p-0 my-0">56 DAYS 2GB/DAY</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div class="row d-flex align-items-center fonts">
                                    <div class="col-6">
                                       <button class="btn btn-primary">Recharge</button>
                                    </div>
                                    <div class="col-6">
                                       <p class="text-primary pt-4">Check other plans <i class="fas fa-chevron-right"></i></p>
                                    </div>

                                </div>
                            </div>
                            <div class="d-flex align-items-center justify-content-between fonts">
                                <div class="fw-bold">
                                    Become a Jio customer
                                </div>
                                 <div class="btn btn-transprent border border-primary text-primary">Get a Jio Sim
                                </div>
                            </div>
                        </div>
                   </div>                   
               </div>
           </div>
            <!-- END:   Carousel Banner ========= -->
            <!-- START: Our Services ========= -->
            <div class="d-flex justify-content-around align-items-center flex-wrap">
                <div class="card  align-self-baseline border-0 p-2">
                    <div class="card-body text-center">
                        <div class="our-services">
                            <img src="../../../assets/images/prepaid-icon.svg" alt="prepaidicon"> 
                        </div>
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">.</p>                        
                    </div>
                </div>
                <div class="card  align-self-baseline border-0 p-2">
                    <div class="card-body text-center">
                        <div class="our-services">
                             <img src="../../../assets/images/postpaid-icon.svg" alt="postpaidicon"> 
                        </div>
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">.</p>
                    </div>
                </div>
                <div class="card  align-self-baseline border-0 p-2">
                    <div class="card-body text-center">
                        <div class="our-services">
                            <img src="../../../assets/images/fiber-icon.svg" alt="joifiber"> 
                        </div>
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">.</p>
                    </div>
                </div>
                <div class="card  align-self-baseline border-0 p-2">
                    <div class="card-body text-center">
                        <div class="our-services">
                            <img src="../../../assets/images/port-icon.svg" alt="jio"> 
                        </div>
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">.</p>
                    </div>
                </div>
                <div class="card  align-self-baseline border-0 p-2">
                    <div class="card-body text-center">
                        <div class="our-services">
                            <img src="../../../assets/images/roaming-icon.svg" alt="roaming"> 
                        </div>                        
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">.</p>
                    </div>
                </div>
                <div class="card  align-self-baseline border-0 p-2">
                    <div class="card-body text-center">
                        <div class="our-services">
                            <img src="../../../assets/images/icon-homepage-esim_40x40.svg" alt="esim"> 
                        </div>
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">.</p>
                    </div>
                </div>
                <div class="card  align-self-baseline border-0 p-2">
                    <div class="card-body text-center">
                       <div class="our-services">
                            <img src="../../../assets/images/wifi-icon.svg" alt="wi-fi calling"> 
                        </div>
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">.</p>
                    </div>
                </div>
                <div class="card  align-self-baseline border-0 p-2">
                    <div class="card-body text-center">
                        <div class="our-services">
                            <img src="../../../assets/images/jiocare-icon.svg" alt="wi-fi calling"> 
                        </div>
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">.</p>
                    </div>
                </div>                
            </div>
            <!-- END:  Our Services ========= -->
            <!-- START: Popular plans ========= -->
            <div class="row">
                <div class="col-lg-4 col-md-6 col-12">
                    <card  :jiodiscound="jiodiscound" :jioexdensions="jioexdensions"  :rate="rate" :validity="validity" :benefits="benefits" :days="days" :dailydata="dailydata" :backvalitity="backvalitity" :smslimit="smslimit">
                    </card>
                </div>
                 <div class="col-lg-4">
                    <card  :jiodiscound="jiodiscound" :jioexdensions="jioexdensions"  :rate="rate" :validity="validity" :benefits="benefits" :days="days" :dailydata="dailydata" :backvalitity="backvalitity" :smslimit="smslimit">
                    </card>
                </div>
                 <div class="col-lg-4">
                    <card  :jiodiscound="jiodiscound" :jioexdensions="jioexdensions"  :rate="rate" :validity="validity" :benefits="benefits" :days="days" :dailydata="dailydata" :backvalitity="backvalitity" :smslimit="smslimit">
                    </card>
                </div>
            </div>
            <!-- END:  Popular plans ========= -->
            <!-- START: view more ========= -->
            <div class="viewmore m-5">
                <div class="d-flex justify-content-center align-items-center">
                    <button class="bg-white button border border-primary rounded text-center text-primary px-5 py-2">
                        view all, compare and buy
                    </button>
                </div>
            </div>
             <!-- END: view more ========= -->
             <!-- START: banner img ========= -->
             <div class="overall">
                 <div class="wrapper">
                     <div class="row">
                         <div class="col-12">
                             <div class="row logo-banner d-flex align-items-center py-4">
                                <div class="text-center col-lg-6 col-12">
                                    <div class="w-100">
                                        <img class="img-fluid" src="https://jep-asset.akamaized.net/jiostaticresources/v02/images/jiophone-next/jiophone-next-logo.png" alt="JioPhone Next Logo">
                                    </div>
                                       <div class="space-lg"></div>
                                            <div class="display-4 justify-content-center fw-bold d-flex align-items-center">
                                                <span class="h4 jioFont-rupee mb-3">&#8377;</span>
                                                <span>1,999</span>
                                            </div>
                                            <h5 class="h5">with easy EMI </h5>
                                            <div class="show_in_dp">
                                                <div class="space-lg"></div>
                                                <div class="d-flex align-items-center justify-content-center">
                                                    <button class="g-btn-green-outline fw-bold">Know More</button>
                                                </div>
                                            </div>
                                            <div class="space-xl"></div>
                                        </div>
                                <!-- <div class="text-center g-card-copy">
                                    <div class="space-xxl"></div>
                                    <div class="jio-g-logo">
                                    <img class="img-fluid" src="https://jep-asset.akamaized.net/jiostaticresources/v02/images/jiophone-next/jiophone-next-logo.png" alt="JioPhone Next Logo">
                                    </div>
                                </div> -->
                                <div class="col-lg-6 col-12  my-2">
                                    <div class="w-50 d-flex justify-content-center align-items-center text-center">
                                        <img src="../../../assets/images/jiophone-desktop.png" class="img-fluid" alt="jiophone-desktop.png">
                                    </div>
                                </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
             <!-- END: banner img ========= -->
             <!-- START: banner img ========= -->
            <section class="container text-center h_common_space">
                <div class="col-items-wrapper card-div-wrapper rounded-16">
                    <div class="row m-0">
                        <div class="col-12 text-center ">
                            <h2 class="fw-bold">Our partners</h2>
                            <h5 class="font-medium mb-4">A coming together of visionaries.</h5>
                        </div>
                    </div>
                <div class="row brand-partners-carousel">
                    <div class="col-lg-4 col-12" style="" aria-hidden="true" tabindex="-1" role="option" aria-describedby="slick-slide20">
                        <h5 class="font-medium pb-md-4 pb-3">Brand Partners </h5>
                        <div class="col-section-two col-section-wrapper d-flex flex-wrap align-item-center justify-content-center col-section-two">
                            <div class="section-icon-img">
                                <div> 
                                    <img src="../../../assets/images/brandpartners/Brand-Partners-samsung.png" class="w-100" alt="Samsung" loading="lazy">
                                </div>
                            </div>
                            <div class="section-icon-img">
                                <div>
                                    <img src="../../../assets/images/brandpartners/Brand-Partners-apple.png" class="w-100" alt="Apple " loading="lazy">
                                </div>
                            </div>
                            <div class="section-icon-img">
                                <div>
                                    <img src="../../../assets/images/brandpartners/Brand-Partners-google.png" class="w-100" alt="Google" loading="lazy">
                                </div>
                                
                            </div>
                        <div class="section-icon-img">
                            <div>
                                <img src="../../../assets/images/brandpartners/Brand-Partners-oppo.png" class="w-100" alt="Oppo" loading="lazy">
                            </div>
                        </div>
                        <div class="section-icon-img">
                            <div>
                                <img src="../../../assets/images/brandpartners/Brand-Partners-mi.png" class="w-100" alt="MI" loading="lazy">
                            </div>
                        </div>
                        <div class="section-icon-img">
                            <div>
                                <img src="../../../assets/images/brandpartners/Brand-Partners-vivo.png" class="w-100" alt="Vivo" loading="lazy">
                            </div>
                        </div>
                        <div class="section-icon-img">
                            <div>
                                <img src="../../../assets/images/brandpartners/Brand-Partners-one-plus.png" class="w-100" alt="One Plus " loading="lazy">
                            </div>
                        </div>
                        <div class="section-icon-img">
                            <div>
                                <img src="../../../assets/images/brandpartners/Brand-Partners-realme.png" class="w-100" alt="Realme" loading="lazy">
                            </div>
                        </div>
                        <div class="section-icon-img">
                            <div>
                                <img src="../../../assets/images/brandpartners/LG_b.png" class="w-100" alt="LG" loading="lazy">
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-12" style="" aria-hidden="true" tabindex="-1" role="option" aria-describedby="slick-slide21">
                        <h5 class="font-medium pb-md-4 pb-3">Recharge Partners</h5>
                        <div class="col-section-one col-section-wrapper d-flex flex-wrap align-item-center justify-content-center ">
                            <div class="section-icon-img">
                                <div>
                                    <img src="../../../assets/images/brand-recharge/Recharge-Partners-phone-pe.png" class="w-100" alt="PhonePe" loading="lazy">
                                </div>
                            </div>
                            <div class="section-icon-img">
                                <div>
                                    <img src="../../../assets/images/brand-recharge/Recharge-Partners-paytm.png" class="w-100" alt="Paytm" loading="lazy">
                                </div>
                            </div>
                            <div class="section-icon-img">
                                <div>
                                    <img src="../../../assets/images/brand-recharge/Recharge-Partners-gpay.png" class="w-100" alt="G Pay" loading="lazy">
                                </div>
                            </div>
                            <div class="section-icon-img">
                                <div>
                                    <img src="../../../assets/images/brand-recharge/Recharge-Partners-Amazon.png" class="w-100" alt="Amazon" loading="lazy">
                                </div>
                            </div>
                            <div class="section-icon-img">
                                <div>
                                    <img src="../../../assets/images/brand-recharge/freecharge_b.png" class="w-100" alt="Freecharge" loading="lazy">
                                </div>
                            </div>
                            <div class="section-icon-img">
                                <div>
                                    <img src="../../../assets/images/brand-recharge/mobikwik_b.png" class="w-100" alt="Mobikwik UPI" loading="lazy">
                                </div>
                            </div>
                            <div class="section-icon-img">
                                <div>
                                    <img src="../../../assets/images/retail_partner/mobikwik_UPI_b_v2.png" class="w-100" alt="Mobikwik" loading="lazy">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-12" style="" aria-hidden="true" tabindex="-1" role="option" aria-describedby="slick-slide22">
                        <h5 class="font-medium pb-md-4 pb-3">Retail Partners</h5>
                        <div class="col-section-three col-section-wrapper d-flex flex-wrap align-item-center justify-content-center border-0">
                            <div class="section-icon-img">
                                <div>
                                    <img src="../../../assets/images/retail_partner/Retail-Partners-sangeetha.png" class="w-100" alt="Sangeetha" loading="lazy">
                                </div>
                            </div>
                            <div class="section-icon-img">
                                <div>
                                    <img src="../../../assets/images/retail_partner/Retail-Partners-bhatia.png" class="w-100" alt="Bhatia's" loading="lazy">
                                </div>
                            </div>
                            <div class="section-icon-img">
                                <div>
                                    <img src="../../../assets/images/retail_partner/Retail-Partners-poorvika.png" class="w-100" alt="Poorvika" loading="lazy">
                                </div>
                            </div>
                            <div class="section-icon-img">
                                <div>
                                    <img src="../../../assets/images/retail_partner/Retail-Partners-quickr.png" class="w-100" alt="QuickrBazaar" loading="lazy">
                                </div>
                            </div>
                            <div class="section-icon-img">
                                <div>
                                    <img src="../../../assets/images/retail_partner/home_shop_18_b.png" class="w-100" alt="HomeShop18" loading="lazy">
                                </div>
                            </div>
                            <div class="section-icon-img">
                                <div>
                                    <img src="../../../assets/images/retail_partner/mobikwik_UPI_b_v2.png" class="w-100" alt="Mobikwik Upi" loading="lazy">
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
                 <div class="h_btn_space">
                    <button type="button" class="j-btn bg-white  btn-lg d-inline-flex text-center">Explore our partner ecosystem</button>
                </div> 
             </div> 
            </section> 
            <!-- END: banner img ========= --> 
            <!-- START:icons sec ========= -->
           <div class="row my-5">
               <div class="col-3">
                   <iconscard :Discover="Discover">                    
                   </iconscard>
               </div>
               <div class="col-3">
                   <iconscard :Discover="Discover">                    
                   </iconscard>
               </div>
               <div class="col-3">
                   <iconscard :Discover="Discover">                    
                   </iconscard>
               </div>
               <div class="col-3">
                   <iconscard :Discover="Discover">                    
                   </iconscard>
               </div>
           </div>
            <!-- END: icons sec ========= --> 
            <div class="m-auto section_btn text-center d-flex justify-content-center">
                <button type="button" class="jds-btn secondary large fixed-btn d-flex text-center align-items-center">
                    <div class="button-lg">See what’s more at your fingertips</div>
                </button>
            </div>
        </div>
        <!-- START:More from Jio ========= --> 
        <div class="bg-color py-3 my-5">
            <div class="container">
                <div class="row my-5">
                    <div class="col-12 text-center ">
                        <h2 class="fw-bold h2">More from Jio</h2>
                        <h5 class="fw-medium h5 mb-0">Discover more digital possibilities</h5>
                    </div>
                </div>
                <div class="position-relative cursor-pointer my-4">
                    <div class="bg_img_wrap_400">
                        <div class="bg_img_view">
                            <img src="../../../assets/images/background-img-ott-desktop-compressed.jpg" class="w-100 img-desktop img-fluid d-none d-lg-block " alt="">
                            <img src="../../../assets/images/background-img-ott-tab.jpg" class="w-100 img-fluid img-mobile d-block d-lg-none" alt="">
                        </div>
                    </div>
                    <div class="content_position">
                        <div class="px-3 text-white">
                            <div class="py-4  d-flex flex-lg-row flex-column-reverse justify-content-between align-items-center">
                                <div class="banner-col-left text-center">
                                    <img src="../../../assets/images/ott-apps-desktop-3108.png" class="d-none d-lg-block w-100" alt="">
                                    <div class="more-text caption font-medium text-right mt-1 d-block d-lg-none">
                                        <img src="../../../assets/images/ott-apps-desktop-3108.png" class="img-mobile d-inline-block w-100" alt="">
                                        <div>and more...</div>
                                    </div>
                                </div>
                            <div class="banner-col-right text-left text-lg-center">
                                <div class="fiber_logo position-relative pt-5">
                                    <img src="../../../assets/images/fiber-logo.png" alt="" class="img-fluid">
                                    </div>
                                    <h2 class="fw-bold">Free 30-day trial</h2>
                                    <ul class="p-0 m-0 list-unstyled d-flex list-border flex-column flex-lg-row font-medium justify-content-lg-center">
                                        <li class="button-lg primary-5">Unlimited High-speed Internet</li>
                                        <li class="button-lg primary-5">Free 4K Set Top Box</li>
                                        <li class="button-lg primary-5">Subscriptions to 13 OTT Apps</li>
                                    </ul>
                                    <div class="common_btn">
                                        <button type="button" class="banner-btn inverse mt-2 fixed-btn d-inline-flex border-0 text-center align-items-center p-3 text-primary">
                                            <div class="button-lg">Get JioFiber</div>
                                        </button>
                                    </div>
                                    <small class="overline fw-medium mt-2 text-uppercase mt-lg-3 mt-2">Need time to think? Sure, we'll take it back, no questions asked.</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container my-sm-5">
                <div class="row">
                    <div class="col-md-6 col-12 my-sm-2">
                        <a href="#">
                            <img width="" height="" loading="lazy" class="data-img w-100" src="../../../assets/images/hmpg-ajio-tile-desk-n.png" alt="AJIO">
                        </a>
                    </div>
                    <div class="col-md-6 col-12 my-sm-2">
                        <a href="#">
                            <img width="" height="" loading="lazy" class="data-img w-100" src="../../../assets/images/hmpg-jiomart-tile-desk-n.png" alt="JioMart">
                        </a>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row align-items-center my-5">
                    <div class="col-lg-6 order-lg-2 my-2">
                        <div class="mb-3">
                            <img src="../../../assets/images/jiohealth.png" alt="jiohealthhub">
                        </div>
                        <h3 class="h3 fw-medium mb-3">
                        Your complete health companion
                        </h3>
                        <h4 class="h4 mb-4">
                        Book tests, consult doctors, manage your weight &amp; much more. Access reports &amp; securely share them with your doctor.
                        </h4>
                    <div>
                    <h6 class="h6 mb-2">
                    Available for: Mobile
                    </h6>
                    <div class="d-flex">
                        <a href="#" class="px-sm-1">
                            <img src="../../../assets/images/google-play-revamp.svg" alt="Download JioHealthHub App for Android" width="" height="">
                        </a>  
                        <a href="#" class="px-sm-1">
                            <img src="../../../assets/images/app-store.svg" alt="Download JioHealthHub App for Android" width="" height="">
                        </a>  
                    </div>
                    </div>
                    </div>
                    <div class="col-lg-6 order-lg-1 my-2">
                        <div class="col-img-panel">
                            <img class="w-100" src="../../../assets/images/healthhub.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- END: More from Jio ========= --> 
        <!-- START:carosule from Jio ========= --> 
       
           
       
        <!-- END: carosule from Jio ========= -->
        <div class="container">
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                   
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner" role="listbox">
                    <div class="carousel-item active slick-slide">
                        <div class="carousel-caption d-none d-md-block">
                           <div class="card story-card-reset rounded-12 overflow-hidden border-0">
                                <div class="card-media-wrapper ">
                                    <div class="story-card-media">
                                        <img class="stroy-card-img" src="../../../assets/images/Jio.com-hmpg-JioLife-Explore1.png" alt="JioLife - Explore 1">
                                    </div>
                                    <div class="overlay-card-bg"></div>
                                </div>
                                <div class="card-img-overlay bottom-text text-white">
                                    <h5 class="font-bold h5-05">It’s time to<br>
                                    revolutionise the nation.</h5>
                                    <h6 class="font-light h6-06">It’s time to live the <span class="font-black secondary-spanishblue-80">JioLife</span></h6>
                                    <div class="common_btn mt-3">
                                        <button type="button" class="explore-inverse fixed-btn">
                                            <div class="button-lg">Explore</div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item slick-slide">
                        <div class="carousel-caption d-none d-md-block">
                            <div class="card story-card-reset rounded-12 overflow-hidden border-0">
                                <div class="card-media-wrapper ">
                                    <div class="story-card-media">
                                    <img class="stroy-card-img" src="../../../assets/images/Jio.com-hmpg-JioLife-Explore2.png" alt="JioLife - Explore 2">
                                    </div>
                                    <div class="overlay-card-bg"></div>
                                </div>
                                <div class="card-img-overlay bottom-text text-white">
                                    <h5 class="font-bold h5-05">It’s time to<br>
                                    ignite a new way of living.</h5>
                                    <h6 class="font-light h6-06">It’s time to live the <span class="font-black secondary-spanishblue-80">JioLife</span></h6>
                                    <div class="common_btn mt-3">
                                        <button type="button" class="explore-inverse fixed-btn">
                                        <div class="button-lg">Explore</div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item slick-slide">
                        <div class="card story-card-reset rounded-12 overflow-hidden border-0">
                            <div class="card-media-wrapper ">
                                <div class="story-card-media">
                                    <img class="stroy-card-img" src="../../../assets/images/Jio.com-hmpg-JioLife-Explore3.png" alt="JioLife - Explore 3">
                                </div>
                                <div class="overlay-card-bg"></div>
                            </div>
                            <div class="card-img-overlay bottom-text text-white">
                            <h5 class="font-bold h5-05">It’s time to<br>
                            inspire every Indian dream.</h5>
                            <h6 class="font-light h6-06">It’s time to live the <span class="font-black secondary-spanishblue-80">JioLife</span></h6>
                                <div class="common_btn mt-3">
                                    <button type="button" class="jds-btn inverse fixed-btn">
                                        <div class="button-lg">Explore</div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
       
    </div>
</template>

<script>
import card from './card.vue';
import iconscard from './iconscard.vue'
export default {
    name:'index', 
    data() {
        return {
            jiodiscound: '20% JioMart Maha Cashback',
            jioexdensions: 'Truly Unlimited Calls!',
            rate: '249',
            validity: 'Validity',
            days: '28 days',
            benefits: 'Benefits',
            dailydata: '2 GB/day',
            backvalitity: 'Unlimited Voice Call',
            smslimit: 'Unlimited SMS (100/day)',
            Discover: "Discover",
        }
    },
    components:{
        card,
        iconscard,
    }
}
</script>

<style lang="scss" scoped>
*{
     font-family:'Times New Roman', Times, serif;
}
.carousel-indicators .active  {    
    background-color: orange !important;   
}
.carousel-indicators {
    position: absolute;
    bottom: 0;
    height: 10px;  
}
.carousel-indicators [data-bs-target] {
    height:4px !important;
    width:25px !important;
    border-radius: 5px;
}
.carousel-item img{
    border-radius: 20px !important;
}
.buton{
    border-radius:25px !important;
    margin-top:5px !important;
    
}
.butn{
    border-radius:25px !important;
    margin-top:5px !important;
}
.nav-tabs .nav-link .active {
    color: #000;
    background: #fff;
    z-index: 1; 
}
.nav-tabs .nav-item {     
    background:#f5f6fb !important;
    width: 50%;
    margin-bottom: -1px;   
    border: 0% !important;   
}
.tab-pane:active {
    background: #fff !important;
}
.tab-pane {
     background:white !important;
}
.radiobutton-inline{
    display: flex !important;
}
.check-input {    
    position: relative;    
    max-height: 2.5rem;
}
.check-input input {
    width: 20px;
    height: 20px;
    border-radius: 24px;   
}
.card-title{
    font-size: 15px !important;
}
.card-text{
    font-size: 13px !important;
}
.our-services{
   width: 64px;
    height: 64px;
    border-radius: 50%;
    overflow: hidden;
    background-color: #0061c3;
    border: solid 1px #0061c3;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px;
    margin: 0 auto;
    transition: linear .3s;  
    @media (max-width:767px) {
        width: 48px;
        height: 48px;
    }
   
}
.our-services {
    img{
         transform: scale(.8);
        transition: all .3s linear;
       
    }   
}
.g-btn-green-outline {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    font-size: 1.125rem;
    background: #fff;
    border: 0;
    border-radius: 100px;
    width: 192px;
    height: 49px;
    color: #5fa853;
    white-space: nowrap;   
    vertical-align: middle;
    user-select: none;
    border: 1px solid #5fa853;
    text-decoration: none;
}
.banner-logo-img{
    width:100% !important;
    height:50% !important;
    
}
.logo-banner {
    border-radius: 36px;
    box-shadow: 0 0 10px #00000029;
    overflow: hidden;
}
.section-icon-img {
    width: 32%;
    box-shadow: 0 0 10px 0 #e7eaf3;
    margin-right: 10px;
    margin-bottom: 10px;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 56px;
    max-height: 56px;
    padding: 0 0.75rem;
}
.j-btn {   
    line-height: 1.5;
    white-space: nowrap;
    border-radius: 0.5rem;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
    min-width: 106px;   
    border: 1px solid #315cbb;
    color: #315cbb;
}
.section_btn .fixed-btn {
    min-width: 198px;
}
.jds-btn.large {
    height: 3rem;
}
.jds-btn.secondary {
    background-color: transparent;
    border: 1px solid #315cbb;
    color: #315cbb;
}
.banner-btn {
    border-radius: 8px;
    height: 2.5rem;
    cursor: pointer;
}
.col-left {
    width: 40% !important;
}
.list-border li:after {
    content: "";
    position: absolute;
    border-right: 1px solid #d8e9fd;
    margin: auto;
    height: 1rem;
}
.content_position {
    position: absolute;
    top: 50%;
    margin: 0 auto;
    left:10%;
    right: 10%;
    transform: translateY(-50%);
    padding:50px;
}
.banner-col-left{
    width:350px !important;
}
.banner-col-right{
    width: 400px !important;
    position:relative;
    top:20%;
    left:10%;
}
.fiber_logo{
    top: 50% !important;
    img{
        width:25% !important;
    }
}
.bg_img_view {
    .img-desktop {
        border-radius: 25px !important;
    }
}
.bg-color{
    background: #f2f9ff;
}


// .carousel-caption {
//     position: relative;
//     display: flex;
//     flex-direction: column;
//     word-wrap: break-word;
//     background-color: #fff;
//     background-clip: border-box;
//     border: 1px solid rgba(0,0,0,.125);
//     border-radius: 0.25rem;
// }
// .bottom-text {
//     top: auto;
//     white-space: normal;
// }

// .explore-inverse { 
//     background-color: #fff; 
//      color: #315cbb;
//     display: inline-flex;
//     align-items: center;
//     justify-content: center;
//     border-radius: 8px;
//     height: 2.5rem;
//     padding: 0 1rem;
//     white-space: nowrap;
// }
</style>