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
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active col-12 buton  p-1" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
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
           <!-- <card/> -->
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    // component:{
    //     card,
    // }
}
</script>

<style lang="scss" scoped>
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
    font-family:'Times New Roman', Times, serif;
    color: #000;
    background: #fff;
    z-index: 1;  
    border: 0px !important;
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

</style>