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
                            <div class="form-group my-2">
                                <label for="Joinumber" class="pr-1"> Customer Name :</label>
                                <input type="text" v-model="name"  class="form-control round_border" placeholder="Enter your Name here">
                               
                            </div>
                            <div class="form-group my-2">
                                <label for="Joinumber" class="pr-1"> Location :</label>
                                <input type="text" v-model="location" class="form-control round_border" placeholder="Enter your Location here">
                                
                            </div>
                            <div class="form-group my-2">
                                <label for="Joinumber" class="pr-1"> Jio number</label>
                                <input type="text" v-model="number" class="form-control round_border" placeholder="Enter your Jio number here">
                                <button type="button" width="15rem"  height="2.875rem" class="form-Button align-items-center btn btn-primary" @click.prevent="signin">Signin</button>
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
import {index} from '@/customer'
export default {
    name:'jiowifi',
    props: ['mobile', 'fiber', 'jiolink', 'JioFi'],
    data() {
        return {
           
        }
    },
    methods: {
        signin(){
            this.customers.push({
                name:this.name,
                location:this.location,
                number:this.number,
            })
            this.name='',
            this.location='',
            this.number='',
            this.$router.push( {
                    path: this.$route.query.redirect || '/customer'
            })
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
