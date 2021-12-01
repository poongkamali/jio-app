<template>
    <div class="mt-5 pt-5">
        <div class="container-fluid">
        <div class="row">
            <div class="col-lg-4 col-md-6 col-12 my-5 py-5">
                <h2 class="text-dark my-2 text-center login-text-h1">Welcome</h2>
                <p class="login-text text-secondary text-center my-2">Login &amp; unlock the full experience</p>
                <ul class="nav nav-tabs border-0 align-item-center d-flex justify-content-center text-center" id="myTab" role="tablist">
                    <li class="nav-item text-dark border-0" role="presentation">
                        <button class="nav-link active border-0 text-underline d-flex text-center justify-content-center align-items-center" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">
                            <router-link to="/mobile"> 
                                <img src="../../../assets/images/ic_mobile.svg" alt="ic-mobile" class="ic-mobile">
                                <div class="span">Mobile</div>
                            </router-link>
                        </button>
                    </li>
                    <li class="nav-item text-dark border-0" role="presentation">
                        <button class="pt-4 nav-link active border-0 text-underline text-center align-items-center" id="contact-tab " data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">
                            <router-link to="/jiofi"> 
                                <img src="../../../assets/images/jiofi-login.svg" alt="ic-mobile" class="img-fluid">
                                <div class="span">JioFi</div>
                            </router-link>
                        </button>
                    </li>
                    <li class="nav-item text-dark border-0" role="presentation">
                        <button class="nav-link active border-0 text-underline" id="profile-tab " data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
                            <router-link to="/fiber"> 
                                <img src="../../../assets/images/ic_jiofiber.svg" alt="ic-mobile" class="ic-mobile">
                                <div class="span">JioFiber</div>
                            </router-link>
                        </button>
                    </li>
                    <li class="nav-item text-dark border-0" role="presentation">
                        <button class="nav-link active border-0 text-underline" id="contact-tab " data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">
                            <router-link to="/link"> 
                                <img src="../../../assets/images/ic_jiolink.svg" alt="ic-mobile" class="ic-mobile">
                                <div class="span">JioLink</div>
                            </router-link>
                        </button>
                    </li>
                   
                </ul>
                <div class="text-dark d-flex justify-content-center align-items-center text-center my-4">
                    <div class="hr"></div>
                    &nbsp; OR &nbsp; 
                    <div class="hr"></div> 
                </div>
                <div class="d-flex justify-content-center">
                    <a  href="#" class="sim-content text-left p-3 cursor-pointer rounded position-relative">
                    <div class="icon-left"></div>
                        <span class="sim-text">Lost your SIM? Login here</span>
                        <span class="sim-text-content">Suspend or resume services, get PUK code or track your phone</span>
                    </a>
                    
                </div>
            </div>
            <div class="col-lg-8 col-md-6 col-12">
                <div>
                    <img src="../../../assets/images/Background_Login_updated.jpg" class="img-fluid" alt="updated-background">
                </div>
               
            </div>
        </div>
        </div>  
    </div>
</template>

<script>

export default {
name:'signin',

data() {
    return {
        
    }
},
}
</script>

<style lang="scss" scoped>

.ic-mobile{
    width: 3rem; 
    height: 3rem;
    cursor: pointer;
}
.login-text{
    font-weight: 500;
}
.login-text-h1{
    font-weight: 700;
}
.nav-link{
    flex-direction: column;
}
.span{
    font-size: 14px;
}
.hr {
    height: 2px !important;
    width: 35px !important;
    color:rgb(170, 164, 164);
    background:rgb(177, 171, 171);
}
@media (max-width: 767px) and (min-width: 320px){
.sim-text-content {
    width: 90%;
}
}
.sim-text-content {
    width: 80%;
    display: inline-block;
}
.sim-text {
    color: #000;
    font-size: 14px;
}
.icon-left {
    height: 20px;
    width: 20px;
    background-image: url(../../../assets/images/settings_sprite.svg);
    display: block;
    float: right;
    background-position: -173px -545px!important;
}
.sim-content {
    max-width: 360px;
    margin: 20px auto;
    border: 0.6px solid #d7d7d7;
    display: inline-block;
    color: #7d7d7d;
    font-size: 12px;
    line-height: 1.6;
}

a {
    text-decoration: none;
}
</style>