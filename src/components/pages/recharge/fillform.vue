<template>
    <div class="bglight text-secondary">
        <div class="container-fluid py-4">
            <div class="head m-3 text-center">
                <span class="text-secondary">Enter your Jio number linked with {{ mobile }} {{ fiber }} {{ jiolink }}</span>
            </div>
            <div class="container">
                <div class="form-group">
                    <label for="Joinumber" class="pr-1"> Jio number</label>
                    <input type="text" class="form-control p-3 round_border" placeholder="Enter your Jio number here">
                    <button type="button" width="15rem" height="2.875rem" disabled="" class="form-Button align-items-center">Submit</button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'fillform',
    props: ['mobile', 'fiber', 'jiolink'],
    data() {
        return {
            
        }
    },
}
</script>


<style lang="scss" scoped>
.round_border{
    border-radius: 15px !important;
}
.bglight{
    background-color: #F6F6F6;
    height: 100vh;
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
    width: 15rem!important;
    display: block;
}
.container{
    width:550px;
    @media (max-width:992px) {
        width:100%;
    }
}
</style>
