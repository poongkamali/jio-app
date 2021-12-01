<template>
    <div class="mt-5 pt-5">
        <div class="">
            <h1 class="text-center fw-bold my-3">Recharge your Jio number</h1>
            <ul class="nav nav-tabs border-0 align-item-center d-flex justify-content-center text-center" id="myTab" role="tablist">
                <li class="nav-item border-0" role="presentation">
                    <button class="nav-link active border-0 text-underline d-flex text-center justify-content-center align-items-center" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true"><img src="../../../assets/images/ic_mobile.svg" alt="ic-mobile" class="ic-mobile"><div class="span">Mobile &amp; JioFi</div></button>
                </li>
                <li class="nav-item border-0" role="presentation">
                    <button class="nav-link border-0 text-underline" id="profile-tab " data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
                        <img src="../../../assets/images/ic_jiofiber.svg" alt="ic-mobile" class="ic-mobile"><div class="span">Profile</div></button>
                </li>
                <li class="nav-item border-0" role="presentation">
                    <button class="nav-link border-0 text-underline" id="contact-tab " data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">
                         <img src="../../../assets/images/ic_jiolink.svg" alt="ic-mobile" class="ic-mobile"><div class="span">Contact</div></button>
                </li>
            </ul>
            <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"> <fillform :mobile="mobile"></fillform></div>
            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"><fillform :fiber="fiber"></fillform></div>
            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"><fillform :jiolink="jiolink"></fillform></div>
            </div>
        </div>
    </div>  
</template>

<script>
import fillform from './fillform.vue'
export default {
 name:'index', 
 components:{
        fillform
       
    },
    data() {
        return {
            mobile: 'Mobile & JioFi',
            fiber: 'JioFiber',
            jiolink: 'JioLink',
        }
    },
}
</script>

<style lang="scss" scoped>
.ic-mobile{
    width: 3.75rem; 
    height: 3.75rem;
    cursor: pointer;
}
.nav-link{
    flex-direction: column;
}
.span{
    font-size: 14px;
}
</style>