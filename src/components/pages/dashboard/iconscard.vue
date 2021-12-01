<template>
    <div class="app-card-li app-card-size">
        <div class="jds-card border-0 app-card-reset overflow-hidden myjio_bg_card">
            <div class="app-icon-top">
                <span class="icon-img">
                    <img src="../../../assets/images/MyJio.svg" alt="MyJio">
                </span>
                <div class="mt-1 text-white fw-bold">MyJio</div>
            </div>
            <img src="../../../assets/images/card_images/myjiobg.jpg" class="w-100" alt="Myjio">
            <div class="jds-card-body p-0">
                <div class="circle-app-details myjio_bg text-white">
                    <h5 class="h5 font-black mb-2">Step into your<br>
                    digital life.</h5>
                    <div class="body-02 fw-medium">Recharge, check balance,<br>
                    install apps and more.
                    </div>
                </div>
            </div>
            <div class="app-card-footer myjio_bg_footer mt-auto">
                <div class="jds-chip large" tabindex="0">
                    <div class="body-02">Discover more</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'iconscard',
    props: ['Discover', 'iconstop', 'background'],
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
    background-color: #cd3400;
    border-radius: 25px !important;
}
.app-icon-top {
    position: absolute;
    top: 1rem;
    right: 1rem;
    text-align: center;
}
.icon-img {
    width: 35px !important;
    height: 35px !important;
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
.myjio_bg::before {
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
    padding: 0 1.25rem 2rem !important;
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