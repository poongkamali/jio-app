<template>
<div class="row justify-content-between my-5">
    <div class="col-lg-3 col-md-6 col-12 app-card-li app-card-size" v-for="jioapp in jioapps" :key="jioapp.id">
            <div  class="jds-card border-0 app-card-reset overflow-hidden myjio_bg_card" :v-for="(cardhex, index) in jioapp.cardhex"
                            :key="index"
                            :style="{ 'background-color': cardhex }">
                <div class="app-icon-top">
                    <span class="icon-img">
                        <img :src="jioapp.img" alt="MyJio"> 
                    </span>
                    <div class="mt-1 text-white fw-bold">MyJio</div>
                </div>
                <img  :src="jioapp.backgroundimg" class="w-100" alt="Myjio"> 
                <div class="jds-card-body p-0" v-for="(hex, index) in jioapp.hex"
                            :key="index"
                            :style="{ 'background-color': hex }"> {{ hex }}
                    <div class="circle-app-details myjio_bg text-white" v-for="(hoverhex, index) in jioapp.hoverhex"
                            :key="index"
                            :style="{ 'background-color': hoverhex }"> 
                        <h5 class="h5 font-black mb-2">Step into your<br>
                        digital life.</h5>
                        <div class="body-02 fw-medium">Recharge, check balance,<br>
                        install apps and more.
                        </div>
                        <div class="app-card-footer">
                    <div class="jds-chip large" tabindex="0">
                        <div class="body-02">Discover more</div>
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
    name: 'iconscard',
    data() {
        return {
            jioapps:[
                {
                    id:1,
                    img: require('../../../assets/images/MyJio.svg'),
                    backgroundimg: require('../../../assets/images/card_images/myjiobg.jpg'),
                    hex: ['#cd3400'],
                    hoverhex: ['#cd3400'],
                    cardhex: ['#cd3400'],
                },
                 {
                    id:2,
                    img: require('../../../assets/images/Saavan.svg'),
                    backgroundimg: require('../../../assets/images/card_images/jiosaavnbg.jpg'),
                    hex: ['#0ccdbc'],
                    hoverhex: ['#0ccdbc'],
                    cardhex: ['#0ccdbc'],
                },
                 {
                    id:3,
                    img: require('../../../assets/images/ic_jiotv.svg'),
                    backgroundimg: require('../../../assets/images/card_images/jiocinemabg.jpg'),
                    hex: ['#fa0025'],
                    hoverhex: ['#fa0025'],
                    cardhex: ['#fa0025'],
                },
                 {
                    id:4,
                    img: require('../../../assets/images/ic_jiocinema.svg'),
                    backgroundimg: require('../../../assets/images/card_images/jiotvbg.jpg'),
                    hex: ['#d63b8e'],
                    hoverhex: ['#d63b8e'],
                    cardhex: ['#d63b8e'],
                }
            ]
            
        }
    },
}
</script>
<style lang="scss" scoped>

.container h5 {
    font-size: 1rem;
    line-height: 1.375rem;
}
.jds-chip.large {
    height: 2rem;
    padding: 0 0.75rem;
}
.jds-card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    width: 100%;
}
.myjio_bg_card {
    // background-color: #cd3400;
    border-radius: 25px !important;
}
.app-icon-top {
    position: absolute;
    top: 1rem;
    right: 1rem;
    text-align: center;
}
.icon-img {
    margin:5px !important;
    width: 35px !important;
    height: 35px !important;
}
@media (min-width: 992px){
.col-lg-3 {
    flex: 0 0 auto;
    width: 24%;
}
}
.circle-app-details {
    border-top-right-radius: 50%;
    padding: 2rem 1.25rem 1.25rem;
    position: relative;
    margin-top: -4.5rem;
    z-index: 1;
    overflow: hidden;
}
.circle-app-details::before {
    content: "";
    position: absolute;
    top: 0;
    right: -23%;
    width: 200%;
    height: 400px;
    border-top-right-radius: 50%;
    border-top-left-radius: 50%;
    z-index: -1;
}
.myjio_bg {
    background-color: #cd3400;
}
.jds-chip.large {
    height: 2rem;
    padding: 0 0.75rem;
}
.app-card-footer .jds-chip {
    background-color: rgba(0,0,0,.3);
    color: #fff;
}
.body-02 {
    font-size: .875rem;
    line-height: 1.125rem;
}
.app-card-footer {
    position: relative !important;
    z-index: 1 !important;
    padding-top:15px !important;
    border-bottom-left-radius: 2.625rem !important;
    border-bottom-right-radius: 2.625rem !important;
}
.app-card-footer .jds-chip {
    background-color: rgba(0,0,0,.3) !important;
    color: #fff !important;
}
.jds-chip.large {
    height: 2rem !important;
    padding: 0 0.75rem !important;
}
.jds-chip {
    height: 1.5rem;
    background-color: #f5f6fb;
    border-radius: 1.5rem;
    padding: 0 0.5rem;
    color: #52555e;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.app-card-li {
    display: inline-block;
    padding: 0;
    transform: none;
}
</style>