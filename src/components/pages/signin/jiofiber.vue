<template>
<div class="py-5 my-5">
    <jiowifi  :fiber="fiber"></jiowifi>
    <jiowifi  :jiolink="jiolink"></jiowifi>
    <jiowifi  :JioFi="JioFi"></jiowifi>
</div>
</template>
<script>
import jiowifi from './jiowifi.vue'
export default {
    name: 'icons',
    components:{
        jiowifi,
    },
    data() {
        return {
            mobile:'Mobile',
            fiber: 'Fiber',
           
        }
    },
}
</script>
<style lang="sass" scoped>

</style>