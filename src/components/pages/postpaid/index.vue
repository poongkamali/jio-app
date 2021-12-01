<template>
    <div class="mt-5 pt-5 bg">
        <div>
            <div class="row mx-auto container px-xl-5 mt-2 px-0">
                <div class="col-lg-3 mb-3">
                    <div class="shadow postpaid bg-white pb-5">
                        <p class="text-center pre-clr px-4 py-3 pre-plan">CHOOSE FROM THE BEST POSTPAID PLANS</p>
                        <!-- Nav tabs -->
                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <a class="nav-link pt-3 active" data-bs-toggle="tab" @click="activeTab = 'home'"  href="#home"><h6>Main Plan</h6></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link pt-3" data-bs-toggle="tab" @click="activeTab = 'menu1'" href="#menu1"><h6>ISD</h6></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link pt-3" data-bs-toggle="tab" @click="activeTab = 'menu2'" href="#menu2"><h6>International Roaming</h6></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link pt-3" data-bs-toggle="tab" @click="activeTab = 'menu3'" href="#menu3"><h6>In-Flight Packs</h6></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link pt-3" data-bs-toggle="tab" @click="activeTab = 'menu4'" href="#menu4"><h6>JioSaavn Pro</h6></a>
                            </li>
                        </ul>
                    </div>
                </div>
            
                <div class="col-lg-9">
                    <!-- Tab panes -->
                    <div class="tab-content">
                        <div class="tab-pane container active px-0" id="home">
                            <div class="mb-4">
                                <!-- Carousel -->
                                <div id="demo" class="carousel slide" data-bs-ride="carousel">

                                    <!-- Indicators/dots -->
                                    <div class="carousel-indicators carousel-post d-flex justify-content-end me-1">
                                        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                                        <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                                    </div>

                                    <!-- The slideshow/carousel -->
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                        <img src="../../../assets/images/postpaid/JPPP-desktop-1253x212-postpaid.jpg" alt="Los Angeles" class="d-block img-fluid postpaid">
                                        </div>
                                        <div class="carousel-item">
                                        <img src="../../../assets/images/postpaid/partner-desktop.jpg" alt="Chicago" class="d-block img-fluid postpaid">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item mb-3 shadow">
                                    <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <h5 class="pt-2">JioPostPaid Plus Plans</h5>
                                    </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body pt-1 px-0">
                                            <div class="border-bottom px-3 py-4">
                                                <div class="row mx-auto">
                                                    <div class="col-6 col-lg-2 ps-0">
                                                        <small class="fs">PLAN</small>
                                                        <h5 class="red"><i class="fas fa-rupee-sign"></i> 399</h5>
                                                    </div>
                                                    <div class="col-6 col-lg-2 ps-0">
                                                        <small class="fs">VALIDITY</small>
                                                        <h6 class="font-w">Bill cycle</h6>
                                                    </div>
                                                    <div class="col-6 col-lg-2 ps-0">
                                                        <small class="fs">DATA</small>
                                                        <h6 class="font-w">75 GB</h6>
                                                    </div> 
                                                    <div class="col-6 col-lg-2 ps-0">
                                                        <small class="fs">SUBSCRIPTIONS</small>
                                                        <p>
                                                            <img src="../../../assets/images/postpaid/ic_netflix.svg">
                                                            <img class="ms-2" src="../../../assets/images/postpaid/ic_amazon_prime.svg">
                                                            <small class="fs ps-2">+4 more</small>
                                                        </p>
                                                    </div>
                                                    <div class="col-lg-4 ps-0 text-end mt-3">
                                                        <a class="pre-View" href="#"><small>View Details</small></a>
                                                        <button class="btn btn-buy ms-3 text-white px-4">Get Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="border-bottom px-3 py-4">
                                                <div class="row mx-auto">
                                                    <div class="col-6 col-lg-2 ps-0">
                                                        <small class="fs">PLAN</small>
                                                        <h5 class="red"><i class="fas fa-rupee-sign"></i> 599</h5>
                                                    </div>
                                                    <div class="col-6 col-lg-2 ps-0">
                                                        <small class="fs">VALIDITY</small>
                                                        <h6 class="font-w">Bill cycle</h6>
                                                    </div>
                                                    <div class="col-6 col-lg-2 ps-0">
                                                        <small class="fs">DATA</small>
                                                        <h6 class="font-w">100 GB</h6>
                                                    </div> 
                                                    <div class="col-6 col-lg-2 ps-0">
                                                        <small class="fs">SUBSCRIPTIONS</small>
                                                        <p>
                                                            <img src="../../../assets/images/postpaid/ic_netflix.svg">
                                                            <img class="ms-2" src="../../../assets/images/postpaid/ic_amazon_prime.svg">
                                                            <small class="fs ps-2">+4 more</small>
                                                        </p>
                                                    </div>
                                                    <div class="col-lg-4 ps-0 text-end mt-3">
                                                        <a class="pre-View" href="#"><small>View Details</small></a>
                                                        <button class="btn btn-buy ms-3 text-white px-4">Get Now</button>
                                                    </div>
                                                </div>
                                                <h6 class="fam">Family Plan - 1 Additional SIM Card</h6>
                                            </div>
                                            <div class="border-bottom px-3 py-4">
                                                <div class="row mx-auto">
                                                    <div class="col-6 col-lg-2 ps-0">
                                                        <small class="fs">PLAN</small>
                                                        <h5 class="red"><i class="fas fa-rupee-sign"></i> 799</h5>
                                                    </div>
                                                    <div class="col-6 col-lg-2 ps-0">
                                                        <small class="fs">VALIDITY</small>
                                                        <h6 class="font-w">Bill cycle</h6>
                                                    </div>
                                                    <div class="col-6 col-lg-2 ps-0">
                                                        <small class="fs">DATA</small>
                                                        <h6 class="font-w">150 GB</h6>
                                                    </div> 
                                                    <div class="col-6 col-lg-2 ps-0">
                                                        <small class="fs">SUBSCRIPTIONS</small>
                                                        <p>
                                                            <img src="../../../assets/images/postpaid/ic_netflix.svg">
                                                            <img class="ms-2" src="../../../assets/images/postpaid/ic_amazon_prime.svg">
                                                            <small class="fs ps-2">+4 more</small>
                                                        </p>
                                                    </div>
                                                    <div class="col-lg-4 ps-0 text-end mt-3">
                                                        <a class="pre-View" href="#"><small>View Details</small></a>
                                                        <button class="btn btn-buy ms-3 text-white px-4">Get Now</button>
                                                    </div>
                                                </div>
                                                <h6 class="fam">Family Plan - 2 Additional SIM Cards</h6>
                                            </div>
                                            <div class="border-bottom px-3 py-4">
                                                <div class="row mx-auto">
                                                    <div class="col-6 col-lg-2 ps-0">
                                                        <small class="fs">PLAN</small>
                                                        <h5 class="red"><i class="fas fa-rupee-sign"></i> 999</h5>
                                                    </div>
                                                    <div class="col-6 col-lg-2 ps-0">
                                                        <small class="fs">VALIDITY</small>
                                                        <h6 class="font-w">Bill cycle</h6>
                                                    </div>
                                                    <div class="col-6 col-lg-2 ps-0">
                                                        <small class="fs">DATA</small>
                                                        <h6 class="font-w">200 GB</h6>
                                                    </div> 
                                                    <div class="col-6 col-lg-2 ps-0">
                                                        <small class="fs">SUBSCRIPTIONS</small>
                                                        <p>
                                                            <img src="../../../assets/images/postpaid/ic_netflix.svg">
                                                            <img class="ms-2" src="../../../assets/images/postpaid/ic_amazon_prime.svg">
                                                            <small class="fs ps-2">+4 more</small>
                                                        </p>
                                                    </div>
                                                    <div class="col-lg-4 ps-0 text-end mt-3">
                                                        <a class="pre-View" href="#"><small>View Details</small></a>
                                                        <button class="btn btn-buy ms-3 text-white px-4">Get Now</button>
                                                    </div>
                                                </div>
                                                 <h6 class="fam">Family Plan - 3 Additional SIM Cards</h6>
                                            </div>
                                            <div class="px-3 pt-4">
                                                <div class="row mx-auto">
                                                    <div class="col-6 col-lg-2 ps-0">
                                                        <small class="fs">PLAN</small>
                                                        <h5 class="red"><i class="fas fa-rupee-sign"></i> 1499</h5>
                                                    </div>
                                                    <div class="col-6 col-lg-2 ps-0">
                                                        <small class="fs">VALIDITY</small>
                                                        <h6 class="font-w">Bill cycle</h6>
                                                    </div>
                                                    <div class="col-6 col-lg-2 ps-0">
                                                        <small class="fs">DATA</small>
                                                        <h6 class="font-w">300 GB</h6>
                                                    </div> 
                                                    <div class="col-6 col-lg-2 ps-0">
                                                        <small class="fs">SUBSCRIPTIONS</small>
                                                        <p>
                                                            <img src="../../../assets/images/postpaid/ic_netflix.svg">
                                                            <img class="ms-2" src="../../../assets/images/postpaid/ic_amazon_prime.svg">
                                                            <small class="fs ps-2">+4 more</small>
                                                        </p>
                                                    </div>
                                                    <div class="col-lg-4 ps-0 text-end mt-3">
                                                        <a class="pre-View" href="#"><small>View Details</small></a>
                                                        <button class="btn btn-buy ms-3 text-white px-4">Get Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item mb-3 shadow">
                                    <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <h5 class="pt-2">Regular Plans</h5>
                                    </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div class="accordion-body px-0">
                                            <div class="px-3">
                                                <div class="row mx-auto">
                                                    <div class="col-6 col-lg-2 ps-0">
                                                        <small class="fs">PLAN</small>
                                                        <h5 class="red"><i class="fas fa-rupee-sign"></i> 199</h5>
                                                    </div>
                                                    <div class="col-6 col-lg-2 ps-0">
                                                        <small class="fs">VALIDITY</small>
                                                        <h6 class="font-w">28 days</h6>
                                                    </div>
                                                    <div class="col-6 col-lg-2 ps-0 mb-4">
                                                        <small class="fs">DATA</small>
                                                        <h6 class="font-w">25 GB</h6>
                                                    </div> 
                                                    <div class="col-6 col-lg-2 ps-0">
                                                        <small class="fs">SUBSCRIPTIONS</small>
                                                        <p>
                                                            <img src="../../../assets/images/postpaid/ic_jiotv.svg">
                                                            <img class="ms-2" src="../../../assets/images/postpaid/ic_jiocinema.svg">
                                                            <small class="fs ps-2">+2 more</small>
                                                        </p>
                                                    </div>
                                                    <div class="col-lg-4 ps-0 text-end mt-3">
                                                        <a class="pre-View" href="#"><small>View Details</small></a>
                                                        <button class="btn btn-buy ms-3 text-white px-4">Get Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="text-center my-5">
                                <a href="">
                                    <h6 class="terms">Terms & Conditions <span class="px-2">|</span> Plans voucher</h6>
                                </a>
                            </div>
                        </div>
                        <div class="tab-pane container fade px-0" id="menu1">  
                            <div class="mb-4">
                                <a href="">
                                    <img src="../../../assets/images/postpaid/Jio.com-isd-prepaid-planpg-desk-new.jpg" class="img-fluid postpaid">
                                </a>
                            </div>
                            <div class="bg-white p-3 mb-3 postpaid shadow">
                                <div class="d-flex justify-content-between">
                                    <small class="text-muted">Showing results for USA</small>
                                    <small class=""><i class="fas fa-sliders-h"></i><sup class="bg-danger rounded-circle px-1"></sup> Filter by country</small>
                                </div>
                            </div>
                            <small class="text-muted ps-2">Now get access to all countries with a single pack</small>
                            <div class="bg-white p-3 my-3 postpaid shadow">
                                <div class="row mx-auto">
                                    <div class="col-6 col-lg-2 ps-0">
                                        <small class="fs">PLAN</small>
                                        <h5 class="red"><i class="fas fa-rupee-sign"></i> 501</h5>
                                    </div>
                                    <div class="col-6 col-lg-2 ps-0">
                                        <small class="fs">VALIDITY</small>
                                        <h6 class="font-w">28 days</h6>
                                    </div>
                                    <div class="col-6 col-lg-2 ps-0">
                                        <small class="fs">ISD TALKTIME</small>
                                        <h6 class="font-w"><i class="fas fa-rupee-sign"></i> 424.58</h6>
                                    </div> 
                                    <div class="col-6 col-lg-2 ps-0">
                                    </div>
                                    <div class="col-lg-4 ps-0 text-end mt-3">
                                        <a class="pre-View" href="#"><small>View Details</small></a>
                                        <button class="btn btn-buy ms-3 text-white px-5">Buy</button>
                                    </div>
                                </div>
                            </div>                     
                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item mb-3 shadow">
                                    <h2 class="accordion-header" id="headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            <h6 class="pt-2">Check out country area code wise ISD rates</h6>
                                        </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div class="accordion-body px-0">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <small><i>Note:</i></small>
                            <h6 class="text-muted pt-2">
                                <ol class="ps-3">
                                    <li><p>You can enjoy great rates for ISD calls for 230 countries across 14693 country area codes using Jio International Service.</p></li>
                                    <li><p>The monetary value offered in ISD Combo Pack can be used only for making ISD calls as per applicable tariffs & send ISD SMS @ Rs.5/SMS.</p></li>
                                    <li><p>The ISD Combo Pack also offers 5 International SMSs free in addition to the talk time benefit.</p></li>
                                    <li><p>In order to make an INMARSAT/SATELLITE call, credit limit of more than Rs.600 is required, in case there is no sufficient credit limit on your account, click <a href="">https://www.jio.com/dl/billpay</a> to make an advance payment</p></li>
                                </ol>
                            </h6>
                            <div class="text-center my-5">
                                <a href="">
                                    <h6 class="terms">Terms & Conditions</h6>
                                </a>
                            </div>
                        </div>
                        <div class="tab-pane container fade px-0" id="menu2">
                            <div class="mb-4">
                                <a href="">
                                    <img src="../../../assets/images/postpaid/ir-newplandesktv02+(1).jpg" class="img-fluid postpaid">
                                </a>
                            </div>
                            <div class="bg-white p-3 mb-3 postpaid shadow">
                                <div class="d-flex justify-content-between">
                                    <small class="text-muted">Showing results for USA</small>
                                    <small class=""><i class="fas fa-sliders-h"></i><sup class="bg-danger rounded-circle px-1"></sup> Filter by country</small>
                                </div>
                            </div>
                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item mb-3 shadow">
                                    <h2 class="accordion-header" id="headingFour">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                            <h5 class="pt-2">Value Packs without Wifi Calling</h5>
                                        </button>
                                    </h2>
                                    <div id="collapseFour" class="accordion-collapse collapse show" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                        <div class="accordion-body px-0">
                                            <div class="border-bottom px-3 mt-3 pb-3">
                                                <div class="row mx-auto">
                                                    <div class="col-6 col-lg-2 ps-0">
                                                        <small class="fs">PLAN</small>
                                                        <h5 class="red"><i class="fas fa-rupee-sign"></i> 1101</h5>
                                                    </div>
                                                    <div class="col-6 col-lg-2 ps-0">
                                                        <small class="fs">VALIDITY</small>
                                                        <h6 class="font-w">28 days</h6>
                                                    </div>
                                                    <div class="col-6 col-lg-2 ps-0">
                                                        <small class="fs">IR USAGE</small>
                                                        <h6 class="font-w"><i class="fas fa-rupee-sign"></i> 933.05</h6>
                                                    </div> 
                                                    <div class="col-6 col-lg-2 ps-0">
                                                    </div>
                                                    <div class="col-lg-4 ps-0 text-end mt-3">
                                                        <a class="pre-View" href="#"><small>View Details</small></a>
                                                        <button class="btn btn-buy ms-3 text-white px-4">Buy</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="px-3 mt-3">
                                               <div class="">
                                                   <ul>
                                                       <li class="text-muted li-bold"><small>Value Pack <i class="fas fa-rupee-sign"></i> 1101 - Applicable for 100+ Countries</small></li>
                                                       <li class="text-muted li-bold"><small>Value Pack <i class="fas fa-rupee-sign"></i> 1201 - Applicable for 169 Countries</small></li>
                                                       <li class="text-muted li-bold"><small>Incoming calls on Wi-Fi Calling can be received from anywhere in the world at <i class="fas fa-rupee-sign"></i> 1</small></li>
                                                       <li class="text-muted li-bold"><small>Outgoing calls over Wi-Fi Calling are not allowed</small></li>
                                                   </ul>
                                               </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item mb-3 shadow">
                                    <h2 class="accordion-header" id="headingFive">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                            <h5 class="pt-2">Value Packs with Wifi Calling</h5>
                                        </button>
                                    </h2>
                                    <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                        <div class="accordion-body px-0">
                                            <div class="border-bottom px-3 mt-3 pb-3">
                                                <div class="row mx-auto">
                                                    <div class="col-6 col-lg-2 ps-0">
                                                        <small class="fs">PLAN</small>
                                                        <h5 class="red"><i class="fas fa-rupee-sign"></i> 1102</h5>
                                                    </div>
                                                    <div class="col-6 col-lg-2 ps-0">
                                                        <small class="fs">VALIDITY</small>
                                                        <h6 class="font-w">28 days</h6>
                                                    </div>
                                                    <div class="col-6 col-lg-2 ps-0">
                                                        <small class="fs">IR USAGE</small>
                                                        <h6 class="font-w"><i class="fas fa-rupee-sign"></i> 933.90</h6>
                                                    </div> 
                                                    <div class="col-6 col-lg-2 ps-0">
                                                    </div>
                                                    <div class="col-lg-4 ps-0 text-end mt-3">
                                                        <a class="pre-View" href="#"><small>View Details</small></a>
                                                        <button class="btn btn-buy ms-3 text-white px-4">Buy</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="px-3 mt-3">
                                               <div class="">
                                                   <ul>
                                                       <li class="text-muted li-bold"><small>Value Pack <i class="fas fa-rupee-sign"></i> 1102 - Applicable for 100+ Countries</small></li>
                                                       <li class="text-muted li-bold"><small>Value Pack <i class="fas fa-rupee-sign"></i> 1202 - Applicable for 169 Countries</small></li>
                                                       <li class="text-muted li-bold"><small>Wi-Fi calling facility is allowed only for call back to India</small></li>
                                                       <li class="text-muted li-bold"><small>Incoming calls on Wi-Fi Calling can be received from anywhere in the world at <i class="fas fa-rupee-sign"></i> 1</small></li>
                                                       <li class="text-muted li-bold"><small>Outgoing SMS over Wi-Fi Calling is not allowed. All incoming text messages will be delivered without any charge</small></li>
                                                       <li class="text-muted li-bold"><small>Voice Calling through Wi-Fi Calling will be charged at <i class="fas fa-rupee-sign"></i> 1 per minute to India</small></li>
                                                       <li class="text-muted li-bold"><small>Video calls through Wi-Fi Calling can be made on a Jio number only. You will be charged at `1 per minute plus the data deduction will happen from the data balance available in your base plan (The actual data usage of your video call may vary)</small></li>
                                                       <li class="text-muted li-bold"><small>For IR 1202 pack iPhone users, Wi-Fi calling facility is available in limited countries</small></li>
                                                   </ul>
                                               </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item mb-3 shadow">
                                    <h2 class="accordion-header" id="headingSix">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                            <h5 class="pt-2">Unlimited Packs without Wifi Calling</h5>
                                        </button>
                                    </h2>
                                    <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                        <div class="accordion-body px-0">
                                            <div class="border-bottom px-3 mt-3 pb-3">
                                                <div class="row mx-auto">
                                                    <div class="col-6 col-lg-2 ps-0">
                                                        <small class="fs">PLAN</small>
                                                        <h5 class="red"><i class="fas fa-rupee-sign"></i> 575</h5>
                                                    </div>
                                                    <div class="col-6 col-lg-2 ps-0">
                                                        <small class="fs">VALIDITY</small>
                                                        <h6 class="font-w">1 days</h6>
                                                    </div>
                                                    <div class="col-6 col-lg-2 ps-0">
                                                        <small class="fs">IR USAGE</small>
                                                        <h6 class="font-w">250 MB, 100 mins and 100 sms</h6>
                                                    </div> 
                                                    <div class="col-6 col-lg-2 ps-0">
                                                    </div>
                                                    <div class="col-lg-4 ps-0 text-end mt-3">
                                                        <a class="pre-View" href="#"><small>View Details</small></a>
                                                        <button class="btn btn-buy ms-3 text-white px-4">Buy</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="border-bottom px-3 mt-3 pb-3">
                                                <div class="row mx-auto">
                                                    <div class="col-6 col-lg-2 ps-0">
                                                        <small class="fs">PLAN</small>
                                                        <h5 class="red"><i class="fas fa-rupee-sign"></i> 2875</h5>
                                                    </div>
                                                    <div class="col-6 col-lg-2 ps-0">
                                                        <small class="fs">VALIDITY</small>
                                                        <h6 class="font-w">7 days</h6>
                                                    </div>
                                                    <div class="col-6 col-lg-2 ps-0">
                                                        <small class="fs">IR USAGE</small>
                                                        <h6 class="font-w">250 MB/day, 100 mins/day and 100 SMS/day</h6>
                                                    </div> 
                                                    <div class="col-6 col-lg-2 ps-0">
                                                    </div>
                                                    <div class="col-lg-4 ps-0 text-end mt-3">
                                                        <a class="pre-View" href="#"><small>View Details</small></a>
                                                        <button class="btn btn-buy ms-3 text-white px-4">Buy</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="border-bottom px-3 mt-3 pb-3">
                                                <div class="row mx-auto">
                                                    <div class="col-6 col-lg-2 ps-0">
                                                        <small class="fs">PLAN</small>
                                                        <h5 class="red"><i class="fas fa-rupee-sign"></i> 5751</h5>
                                                    </div>
                                                    <div class="col-6 col-lg-2 ps-0">
                                                        <small class="fs">VALIDITY</small>
                                                        <h6 class="font-w">30 days</h6>
                                                    </div>
                                                    <div class="col-6 col-lg-2 ps-0">
                                                        <small class="fs">IR USAGE</small>
                                                        <h6 class="font-w">5 GB, 1500 mins and 1500 sms</h6>
                                                    </div> 
                                                    <div class="col-6 col-lg-2 ps-0">
                                                    </div>
                                                    <div class="col-lg-4 ps-0 text-end mt-3">
                                                        <a class="pre-View" href="#"><small>View Details</small></a>
                                                        <button class="btn btn-buy ms-3 text-white px-4">Buy</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="px-3 mt-3">
                                               <div class="">
                                                   <ul>
                                                       <li class="text-muted li-bold"><small>Applicable for 22 Countries</small></li>
                                                       <li class="text-muted li-bold"><small>Incoming calls from anywhere in the world by enabling Wi-Fi calling feature will be Free</small></li>
                                                       <li class="text-muted li-bold"><small>Outgoing calls over Wi-Fi Calling are not allowed</small></li>
                                                   </ul>
                                               </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <small><i>Note:</i></small>
                            <h6 class="text-muted pt-2">
                                <ol class="ps-3">
                                    <li><p>If you are activating the IR pack for the first time, kindly ensure your number is connected to Jio network.</p></li>
                                    <li><p>International roaming services do not work on JioFi & JioPhone device.</p></li>
                                    <li><p>The pack benefits are applicable only on the preferred partner network in the visited country, if any other partner is chosen then standard rates will be applicable.</p></li>
                                    <li><p>Please restart your handset 15 mins after purchasing the pack.</p></li>
                                </ol>
                            </h6>
                            <div class="text-center my-5">
                                <a href="">
                                    <h6 class="terms">Standard PayGo Rates<span class="px-2">|</span>International WiFi Calling T&C<span class="px-2">|</span>IR Plans T&C</h6>
                                </a>
                            </div>
                        </div>
                        <div class="tab-pane container fade px-0" id="menu3">
                            <div class="mb-4">
                                <a href="">
                                    <img src="../../../assets/images/postpaid/ir-newplandesktv02+(1).jpg" class="img-fluid postpaid">
                                </a>
                            </div>
                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item mb-3 shadow">
                                    <h2 class="accordion-header" id="headingSeven">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven">
                                            <h5 class="pt-2">Pre on Post Inflight IR Pack</h5>
                                        </button>
                                    </h2>
                                    <div id="collapseSeven" class="accordion-collapse collapse show" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                                        <div class="accordion-body px-0">
                                            <div class="border-bottom px-3 mt-3 pb-3">
                                                <div class="row mx-auto">
                                                    <div class="col-6 col-lg-2">
                                                        <small class="fs">PLAN</small>
                                                        <h5 class="red"><i class="fas fa-rupee-sign"></i> 499</h5>
                                                    </div>
                                                    <div class="col-6 col-lg-2">
                                                        <small class="fs">VALIDITY</small>
                                                        <h6 class="font-w">1 days</h6>
                                                    </div>
                                                    <div class="col-6 col-lg-2">
                                                        <small class="fs">IR USAGE</small>
                                                        <h6 class="font-w">250 MB data, 100 mins and 100 SMS</h6>
                                                    </div> 
                                                    <div class="col-6 col-lg-2">
                                                    </div>
                                                    <div class="col-lg-4 text-end mt-3">
                                                        <a class="pre-View" href="#"><small>View Details</small></a>
                                                        <button class="btn btn-buy ms-3 text-white px-4">Buy</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="border-bottom px-3 mt-3 pb-3">
                                                <div class="row mx-auto">
                                                    <div class="col-6 col-lg-2">
                                                        <small class="fs">PLAN</small>
                                                        <h5 class="red"><i class="fas fa-rupee-sign"></i> 699</h5>
                                                    </div>
                                                    <div class="col-6 col-lg-2">
                                                        <small class="fs">VALIDITY</small>
                                                        <h6 class="font-w">1 days</h6>
                                                    </div>
                                                    <div class="col-6 col-lg-2">
                                                        <small class="fs">IR USAGE</small>
                                                        <h6 class="font-w">500 MB data, 100 mins and 100 SMS</h6>
                                                    </div> 
                                                    <div class="col-6 col-lg-2">
                                                    </div>
                                                    <div class="col-lg-4 text-end mt-3">
                                                        <a class="pre-View" href="#"><small>View Details</small></a>
                                                        <button class="btn btn-buy ms-3 text-white px-4">Buy</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="border-bottom px-3 mt-3 pb-3">
                                                <div class="row mx-auto">
                                                    <div class="col-6 col-lg-2">
                                                        <small class="fs">PLAN</small>
                                                        <h5 class="red"><i class="fas fa-rupee-sign"></i> 999</h5>
                                                    </div>
                                                    <div class="col-6 col-lg-2">
                                                        <small class="fs">VALIDITY</small>
                                                        <h6 class="font-w">1 days</h6>
                                                    </div>
                                                    <div class="col-6 col-lg-2">
                                                        <small class="fs">IR USAGE</small>
                                                        <h6 class="font-w">1 GB data, 100 mins and 100 SMS</h6>
                                                    </div> 
                                                    <div class="col-6 col-lg-2">
                                                    </div>
                                                    <div class="col-lg-4 text-end mt-3">
                                                        <a class="pre-View" href="#"><small>View Details</small></a>
                                                        <button class="btn btn-buy ms-3 text-white px-4">Buy</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="px-3 mt-3">
                                               <div class="">
                                                   <ul>
                                                       <li class="text-muted li-bold"><small>Applicable for 22 International Partner Airlines</small></li>
                                                       <li class="text-muted li-bold"><small>Pack benefits are only applicable on our Partner Airlines and destination. Please review the same by clicking ‘View Details’ before purchasing the pack</small></li>
                                                       <li class="text-muted li-bold"><small>Data and SMS services are available in all our Partner Airlines. However, voice services are available only in select Airlines.</small></li>
                                                       <li class="text-muted li-bold"><small>Incoming calls are not allowed on these packs</small></li>
                                                       <li class="text-muted li-bold"><small>Incoming SMS is Free</small></li>
                                                       <li class="text-muted li-bold"><small>Usage entitlements applicable only for Inflight communications</small></li>
                                                       <li class="text-muted li-bold"><small>Data speed may vary from Airline to Airline</small></li>
                                                       <li class="text-muted li-bold"><small>Voice data and SMS service availability will differ from airline to airline, please check the detail before opting the pack</small></li>
                                                   </ul>
                                               </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="text-center my-5">
                                <a href="">
                                    <h6 class="terms">In-Flight Service T&C</h6>
                                </a>
                            </div>
                        </div>
                        <div class="tab-pane container fade px-0" id="menu4">
                            <div class="mb-4">
                                <!-- Carousel -->
                                <div id="demo" class="carousel slide" data-bs-ride="carousel">

                                    <!-- Indicators/dots -->
                                    <div class="carousel-indicators carousel-post d-flex justify-content-end me-1">
                                        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                                        <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                                    </div>

                                    <!-- The slideshow/carousel -->
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                        <img src="../../../assets/images/postpaid/JPPP-desktop-1253x212-postpaid.jpg" alt="Los Angeles" class="d-block img-fluid postpaid">
                                        </div>
                                        <div class="carousel-item">
                                        <img src="../../../assets/images/postpaid/partner-desktop.jpg" alt="Chicago" class="d-block img-fluid postpaid">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item mb-3 shadow">
                                    <h2 class="accordion-header" id="headingEight">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="true" aria-controls="collapseEight">
                                            <h5 class="pt-2">Pre on Post Inflight IR Pack</h5>
                                        </button>
                                    </h2>
                                    <div id="collapseEight" class="accordion-collapse collapse show" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                                        <div class="accordion-body px-0">
                                            <div class="border-bottom px-3 mt-3 pb-3">
                                                <div class="row mx-auto">
                                                    <div class="col-6 col-lg-2">
                                                        <small class="fs">PLAN</small>
                                                        <h5 class="red"><i class="fas fa-rupee-sign"></i> 399</h5>
                                                    </div>
                                                    <div class="col-6 col-lg-2">
                                                        <small class="fs">VALIDITY</small>
                                                        <h6 class="font-w">365 days</h6>
                                                    </div>
                                                    <div class="col-6 col-lg-2">
                                                    </div> 
                                                    <div class="col-6 col-lg-2">
                                                    </div>
                                                    <div class="col-lg-4 text-end mt-3">
                                                        <a class="pre-View" href="#"><small>View Details</small></a>
                                                        <button class="btn btn-buy ms-3 text-white px-4">Buy</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="px-3 mt-3 pb-3">
                                                <div class="row mx-auto">
                                                    <div class="col-6 col-lg-2">
                                                        <small class="fs">PLAN</small>
                                                        <h5 class="red"><i class="fas fa-rupee-sign"></i> 99</h5>
                                                    </div>
                                                    <div class="col-6 col-lg-2">
                                                        <small class="fs">VALIDITY</small>
                                                        <h6 class="font-w">30 days</h6>
                                                    </div>
                                                    <div class="col-6 col-lg-2">
                                                    </div> 
                                                    <div class="col-6 col-lg-2">
                                                    </div>
                                                    <div class="col-lg-4 text-end mt-3">
                                                        <a class="pre-View" href="#"><small>View Details</small></a>
                                                        <button class="btn btn-buy ms-3 text-white px-4">Buy</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-white py-5" v-if="activeTab == 'home'">
                                <div>
                                    <h2 class="text-center pb-3">Existing Jio Postpaid user?</h2>
                                    <div class="row mx-auto">
                                        <div class="col-md-6 mb-3">
                                            <div class="card p-4" style="height: 350px;">
                                                <div class="text-center">
                                                    <img src="../../../assets/images/postpaid/credit-limit.svg" class="w-25">
                                                </div>
                                                <div class="card-body text-center">
                                                    <h4 class="card-title">Increase credit limit</h4>
                                                    <p class="card-text">Increase your Credit Limit to your desired amount and enjoy Jio service without restrictions</p>
                                                    <button class="btn btn-now px-4 py-2">Increase now</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <div class="card p-4" style="height: 350px;">
                                                <div class="text-center">
                                                    <img src="../../../assets/images/postpaid/international-roaming.svg" class="w-25">
                                                </div>
                                                <div class="card-body text-center">
                                                    <h4 class="card-title">Active international roaming</h4>
                                                    <p class="card-text">Roam worry-free with unlimited voice and data packs</p>
                                                    <button class="btn btn-now px-4 py-2 mt-4">Active now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
           </div>
        </div>
        
    </div>    
</template>

<script>
export default {
    data(){
        return{
            activeTab:'home',
        }
    }
}
</script>

<style lang="scss">
.bg {
    background-color: #f5f6fb;
        a {
            text-decoration: none;
        }
        .terms {
            color: #214796;
            span {
                color: lightgray !important;
            }
        }
        .fa-sliders-h {
            color: #214796;
        }
        .btn-now {
             border: 1px solid #214796;
             color: #214796;
        }
        .carousel-post {
            margin-bottom: -22px;
            button {
                background-color: #214796;
            }
        }
        .postpaid {
            border-radius: 15px;
            .pre-clr {
                color: #214796;
                font-weight: 500;
            }
            .pre-plan {
                border-bottom: 4px solid #214796;
            }
            .nav-item {
                .nav-link:link {
                    color: gray;
                    border-bottom: 1px solid lightgray;
                }
                .active {
                    color: #214796 !important;
                    border-right: 4px solid #214796;
                    background-color: rgba(201, 237, 245, 0.4);
                }
            }
        }
        .accordion-button:focus {
            box-shadow: none;
        }
        .accordion-button:not(.collapsed) {
            color: black;
            background-color: white;
        }
        .accordion-item {
            border: none;
            .accordion-header {
                border-radius: 50px;
            }
            .accordion-body {
                .border-bottom {
                    border-bottom: 1px solid lightgray;
                }
                .badge {
                    font-size: 9px;
                }
                .blue {
                    background-color: #214796;
                }
                .fs {
                    font-size: 11px;
                    color: gray;
                }
                .fam {
                    font-size: 13px;
                }
                .font-w {
                    font-size: 18px;
                }
                .red {
                    color: #ec1200;
                    font-weight: 700;
                }
                .pre-View {
                    color: #214796;
                }
                .btn-buy {
                    background-color: #214796;
                }
            }
        }
        .li-bold {
            font-size: 15px;
            font-weight: 600;
        }
        .fs {
            font-size: 11px;
            color: gray;
        }
        .fam {
            font-size: 13px;
        }
        .font-w {
            font-size: 18px;
        }
        .red {
            color: #ec1200;
            font-weight: 700;
        }
        .pre-View {
            color: #214796;
        }
        .btn-buy {
            background-color: #214796;
        }
}  
</style>