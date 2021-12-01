<template>
    <div class="">
            <div class="row mx-auto text-secondary">
                <div class="col-lg-5 col-md-6 col-12">
                    <div class="">
                        <button type="button" aria-label="Back to previous page" class="arrow-cursor"></button>
                        <div class="head my-3 text-center">
                            <h2 class="text-dark"> {{ mobile }} {{ fiber }} {{ jiolink }} {{ JioFi }} Login </h2>
                        </div>
                        <div class="container  justify-content-center w-75">
                            <div class="form-group">
                                <label for="Joinumber" class="pr-1"> Jio number</label>
                                <input type="text" class="form-control round_border" placeholder="Enter your Jio number here">
                                <button type="button" width="15rem" height="2.875rem" disabled="" class="form-Button align-items-center">Generate OTP</button>
                            </div>
                            
                        </div>
                    </div>
                </div> 
                <div class="col-lg-7 col-md-6 col-12">
                    <div class="w-100">
                        <img src="../../../assets/images/Background_Login_updated.jpg" class="img-fluid" alt="updated-background">
                    </div>
            </div>
            </div>
    </div>
</template>
<script>
export default {
    name:'jiowifi',
    props: ['mobile', 'fiber', 'jiolink', 'JioFi'],
    data() {
        return {
            
        }
    },
}
</script>
<style lang="scss" scoped>
.round_border{
    border-radius: 15px !important;
    padding: 13px !important;
}
.bglight{
    background-color: #F6F6F6;
   
}
.text-color {
    color: #C4C9D9!important;
}
.form-Button {
    border: 1px solid;
    font-weight: 400!important;
    font-size: 1rem!important;
    border-radius: 0.625rem;
    background-color: #E7EAF4!important;
    border-color: #E7EAF4!important;
    margin: 1.875rem auto 1.875rem auto;
    color: #C4C9D9!important;
    height: 2.875rem!important;
    width: 13rem!important;
    display: block;
}
.arrow-cursor {
    width: 20px;
    height: 20px;
    background-image: url(../../../assets/images/Back.svg);
    display: block;
    background-repeat: no-repeat;
    background-color: transparent;
    cursor: pointer;
    border: none;
    position: relative;
    left:10%;
}
</style>
