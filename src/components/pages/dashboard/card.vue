<template>
    <div class="row justify-content-between" >
        <div class="col-md-4 col-12 flip-card my-2" v-for="(recharge,index) in reacharegeoffers" :key="index">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <div class="card border-0 plan-card-reset overflow-hidden bg-white px-3">
                        <div class="text-center text-white top-rounded">
                            <div class="top-circle-copy">
                                <div class="jio-badge text-white d-inline-flex justify-content-center align-items-center large pill secondaryred-100-bg border-0 mb-2">
                                    <div class="jio-badge-overline"> {{ recharge.jiodiscound }}</div>
                                </div>
                                <div class="display-2 font-black">
                                   <span class="jioFont-rupee h2 align-text-top mr-1 pt-2">&#8377;</span>{{ recharge.rate }}
                                </div>
                                <div class="h5 font-medium"> {{ recharge.jioexdensions }}</div>
                            </div>
                        </div>
                        <div class="circle-panel">
                            <div class="card-body p-0">
                                <div class="circle-plan-details">
                                    <div class="d-flex justify-content-between data-panel">
                                        <div class="">
                                            <div class="h6 font-medium mb-1">{{ recharge.validity }}</div>
                                            <div class="h5 font-bold">{{ recharge.days }}</div>
                                        </div>
                                        <div class="">
                                            <div class="h6 font-medium mb-1">{{ recharge.benefits }} </div>
                                            <div class="h5 font-bold"> {{ recharge.dailydata }}</div>
                                        </div>
                                    </div>
                                    <div class="d-flex app-icons-list align-items-end">
                                        <div class="app-icon">
                                            <img src="../../../assets/images/ic_jiotv-n.svg" alt="JioTV logo">
                                        </div>
                                        <div class="app-icon">
                                            <img src="../../../assets/images/ic_jiocinema-n.svg" alt="JioCinema logo">
                                        </div>
                                        <div class="d-flex align-items-center">
                                            <span class="overline-01 font-medium"><span class="d-block">+2 more</span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-action mt-auto d-flex justify-content-between align-items-center">
                                <a href="#" class="flip-toggle">
                                    <div class="button-lg font-medium">Know More</div>
                                </a>
                                <div class="common_btn">
                                    <button type="button" class="jds-btn text-decoration-none text-white text-center fixed-btn d-inline-flex align-items-center justify-content-center border-0" tabindex="0">
                                    <div class="button-lg">Recharge Now</div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flip-card-back">
                    <div class="card border-0 plan-card-reset overflow-hidden d-flex">
                        <div class="card-body">
                            <div class="card-back-inner p-0 border-0">
                                <div class="card-body-back-inner p-0 mb-5">
                                    <div class="h5 font-medium back-list mb-0">
                                        <div class="back-list-li"> {{ recharge.backvalitity }}</div>
                                        <div class="back-list-li"> {{ recharge.smslimit }}</div>
                                    </div>
                                </div>
                                <div class="jio-plan-app pt-5 mt-5">
                                    <h6 class="h6 font-medium neutral-70">JioApps &amp; Other Subscriptions</h6>
                                    <div class="d-flex justify-content-around flex-wrap app-icons-list multi-icons-list ">
                                        <div class="app-wrap-icon">
                                            <div class="app-icon">
                                            <img src="../../../assets/images/ic_jiotv-n.svg" alt="JioTV logo">
                                            </div>
                                        </div>
                                        <div class="app-wrap-icon">
                                            <div class="app-icon">
                                                <img src="../../../assets/images/ic_jiocinema-n.svg" alt="JioCinema logo">
                                            </div>
                                        </div>
                                        <div class="app-wrap-icon">
                                            <div class="app-icon">
                                                <img src="../../../assets/images/ic_jiosecurity-n.svg" alt="JioSecurity logo">
                                            </div>
                                        </div>
                                        <div class="app-wrap-icon">
                                            <div class="app-icon">
                                                <img src="../../../assets/images/ic_jiocloud-n.svg" alt="JioCloud logo">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-action mt-auto d-flex justify-content-between align-items-center">
                            <a href="#" class="flip-toggle">
                                <div class="button-lg font-medium">Back</div>
                            </a>
                            <div class="common_btn">
                                <button type="button" class="jds-btn text-decoration-none text-white text-center fixed-btn d-inline-flex align-items-center justify-content-center border-0" tabindex="0">
                                    <div class="button-lg">Recharge Now</div>
                                </button>
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
    name:'card',
    data() {
        return {
            reacharegeoffers:[
                {
                    id:1,
                    jiodiscound: '20% JioMart Maha Cashback',
                    jioexdensions: 'Truly Unlimited Calls!',
                    rate: '249',
                    validity: 'Validity',
                    days: '28 days',
                    benefits: 'Benefits',
                    dailydata: '2 GB/day',
                    backvalitity: 'Unlimited Voice Call',
                    smslimit: 'Unlimited SMS (100/day)',
                },
                {
                    id:2,
                    jiodiscound: '20% JioMart Maha Cashback',
                    jioexdensions: 'Truly Unlimited Calls!',
                    rate: '249',
                    validity: 'Validity',
                    days: '28 days',
                    benefits: 'Benefits',
                    dailydata: '2 GB/day',
                    backvalitity: 'Unlimited Voice Call',
                    smslimit: 'Unlimited SMS (100/day)',
                },
                {
                    id:3,
                    jiodiscound: '20% JioMart Maha Cashback',
                    jioexdensions: 'Truly Unlimited Calls!',
                    rate: '249',
                    validity: 'Validity',
                    days: '28 days',
                    benefits: 'Benefits',
                    dailydata: '2 GB/day',
                    backvalitity: 'Unlimited Voice Call',
                    smslimit: 'Unlimited SMS (100/day)',
                },
            ]
        }
    },  
}
</script>
<style lang="scss" scoped>
*{
    font-family: 'Times New Roman', Times, serif !important;
}
.flip-card{
    position: relative;   
    height: 392px;
    width:350px;
}
.flip-card-inner {
    position: absolute;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: all 0.5s ease;
}
.flip-card-inner:hover {
    transform: rotateY(180deg);
}
.flip-card-front  {
    position: absolute;
    width:100%;
    height: 100%;
    backface-visibility: hidden;    
}
.flip-card-back {
    position: absolute;
    width:100%;
    height: 100%;
    backface-visibility: hidden;
    background: #fafafa;
    color: #333;
    transform: rotateY(180deg);
}
.card-action {
    padding: 0.5rem 1.5rem 1.5rem;
}
.plan-card-reset {
    border-radius: 2.625rem;
    box-shadow: 0 0 10px #00000029;
    height: 100%;
}
.card {
    position: relative;
    word-wrap: break-word;
    background-clip: border-box;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: 0.25rem;}
    .plan-card-reset .top-rounded {
    position: relative;
}
.plan-card-reset .top-circle-copy {
    position: relative;
    z-index: 1;
    padding: 1.75rem 1rem 2rem;
}
.jio-badge.large.pill {
    min-width: 2rem;
    height: 2rem;
    line-height: 2rem;
    font-size: 1rem;
    padding: 0 0.75rem;
}
.jio-badge.large {
    min-width: 1rem;
    height: 1rem;
    border-width: 2px;
}
.jio-badge.pill {
    min-width: 1.5rem;
    width: auto;
    height: 1.5rem;
    line-height: 1.5rem;
    padding: 0 0.5rem;
}
.jio-badge {
    min-width: 0.75rem;
    height: 0.75rem;
    background-color: #c71720;
    border: 1px solid #fff;
    border-radius: 1.5rem;
    font-size: 14px;   
}
.primary-90-bg {
    background-color: #315cbb !important;
}
.plan-card-reset .top-rounded::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 180%;
    height: 500px;
    border-radius: 100%;
    background-color: #528eff;
}
.common_btn .fixed-btn {
    min-width: 160px;
}
button {
    cursor: pointer;
}
.jds-btn { 
    background-color: #315cbb;
    border-radius: 8px;
    height: 2.5rem;
    padding: 0 1rem;
    cursor: pointer;
    white-space: nowrap;
}
button, select {
    text-transform: none;
}
.font-black {
    font-family: 'Times New Roman', Times, serif;
    font-weight: 400;
}
.app-icons-list img {
    width: 100%;
}
.app-icons-list .app-icon {
    width: 52px !important;
    height: 52px !important;
    display: block;
}
.app-icons-list .app-icon {
    margin-right: 0.5rem;
}
.plan-card-reset {
    border-radius: 1.875rem;
}
.flip-card-back .card-body-back-inner {
   display: flex; 
 flex-direction: column;
}
</style>