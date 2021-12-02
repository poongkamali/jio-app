<template>
<div class="py-5 my-5">
    
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
           
            JioFi: 'JioFi'
        }
    },
}
</script>
<style lang="sass" scoped>

</style>