<template>
    <div class="py-5 my-5">
        <jiowifi  :jiolink="jiolink"></jiowifi>
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
            jiolink:'jiolink',
           
        }
    },
}
</script>
<style lang="sass" scoped>

</style>