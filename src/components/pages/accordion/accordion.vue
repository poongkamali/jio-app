<template>
    <div class="mt-5 py-5 bg">
        <div class="d-lg-flex justify-content-center">
            <div class="row mx-auto w mt-2 px-0">
                <div class="col-lg-3 mb-3">
                    <div class="shadow prepaid-nav bg-white pb-5">
                        <p class="text-center pre-clr px-4 py-3 pre-plan">CHOOSE FROM THE BEST {{ title }} PLANS</p>
                        <!-- Nav tabs -->
                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <a class="nav-link pt-3 active" data-bs-toggle="tab" href="#home"><h6>{{ nav }}</h6></a>
                            </li>
                            <!-- <li class="nav-item">
                                <a class="nav-link pt-3" data-bs-toggle="tab" href="#menu1"><h6>No Daily Limit</h6></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link pt-3" data-bs-toggle="tab" href="#menu2"><h6>JioPhone</h6></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link pt-3" data-bs-toggle="tab" href="#menu3"><h6>Cricket Plans</h6></a>
                            </li> -->
                        </ul>
                    </div>
                </div>

                <div class="col-lg-9">
                    <!-- Tab panes -->
                    <div class="tab-content">
                        <div class="tab-pane container active px-0" id="{{ nav }}">
                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item mb-3 shadow">
                                    <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <h5 class="pt-2">20% JioMart Maha Cashback</h5>
                                    </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body pt-1 px-0">
                                            <div class="border-top px-3 pb-3">
                                                <span class="badge blue rounded-pill">20% JIOMART MAHA CASHBACK</span>
                                                <div class="row mx-auto">
                                                    <div class="col-6 col-lg-2 ps-0">
                                                        <small class="fs">PLAN</small>
                                                        <h5 class="red"><i class="fas fa-rupee-sign"></i> {{ amount }}</h5>
                                                    </div>
                                                    <div class="col-6 col-lg-2 ps-0">
                                                        <small class="fs">VALIDITY</small>
                                                        <h6 class="font-w">{{ days }} days</h6>
                                                    </div>
                                                    <div class="col-6 col-lg-2 ps-0">
                                                        <small class="fs">DATA</small>
                                                        <h6 class="font-w">{{ GB }} GB{{ day }}</h6>
                                                    </div> 
                                                    <div class="col-6 col-lg-2 ps-0">
                                                        <small class="fs">SUBSCRIPTIONS</small>
                                                        <p>
                                                            {{ img1 }}
                                                            {{ img2 }}
                                                            <small class="fs ps-2">+{{ more }} more</small>
                                                        </p>
                                                    </div>
                                                    <div class="col-lg-4 ps-0 text-end mt-3">
                                                        <a class="pre-View" href="#"><small>View Details</small></a>
                                                        <button class="btn btn-buy ms-3 text-white px-4">{{ btn }}</button>
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
            </div>
        </div>
    </div>                            
</template>

<script>
export default {
    name: 'accordion',
    props: [
        'title', 'nav'
    ]
    
}
</script>

<style lang="scss">
.bg {
    background-color: #f5f6fb;
    .w {
        @media only screen and (min-width: 992px) {
            width: 80%;
        }
        a {
            text-decoration: none;
        }
        .terms {
            color: #214796;
            span {
                color: lightgray !important;
            }
        }
        .prepaid-nav {
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
        // .accordion-item:first-of-type .accordion-button {
        //     border-top-left-radius: 10px;
        //     border-bottom-left-radius: 10px;
        // }
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
        
    }
}  
</style>