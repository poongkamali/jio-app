<template>
    <div>
        <header>
            <nav class="navbar navbar-expand-lg bg-white fixed-top shadow">
                <div class="container">
                    <div class="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                            <router-link class="nav-link text-dark ps-0 active" to="/">DASHBOARD</router-link>
                            </li>
                            <li class="nav-item">
                            <router-link class="nav-link text-dark" to="/prepaid">PREPAID</router-link>
                            </li>
                            <li class="nav-item">
                            <router-link class="nav-link text-dark" to="/postpaid">POSTPAID</router-link>
                            </li>
                            <li class="nav-item">
                            <router-link class="nav-link text-dark" to="/apps">APPS</router-link>
                            </li>
                        </ul>
                    </div>
                    <a class="navbar-brand" href="#"><img class="jiologo" src="../../assets/images/jio-logo.svg"></a>
                    <button class="navbar-toggler bg-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon text-white"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                            <router-link class="nav-link text-dark" to="/recharge">RECHARGE</router-link>
                            </li>
                            <li class="nav-item">
                            <router-link class="nav-link text-dark" to="/customer">CUSTOMER</router-link>
                            </li>
                            <li class="nav-item">
                            <router-link class="nav-link text-dark" to="/signin">SIGN IN</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>          
        </header>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .nav-link{
        font-size: 17px;
        font-weight: 500;
    }
    // .nav-link.active {
    //     margin-bottom: 10px;
    //     border-bottom: 4px solid darkblue !important;
    //     color: darkblue;
    // }
    .jiologo {
        height: 50px;
    }
</style>