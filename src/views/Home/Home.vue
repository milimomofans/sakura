<template>
    <div>
        <Header></Header>
        <img :src="CDN('pixiv/hello-mio-web')" :style="bgSize">
    </div>
</template>
<script>
import {CDN} from 'utils/util'
export default {
    mounted(){
        console.log(window)
        let bgSize = {
            width:window.innerWidth,
            height:window.innerHeight
        }
        this.bgSize = bgSize
    },
    data(){
        return {
            bgSize:{}
        }
    },
    methods:{
        CDN
    }
}
</script>
<style scoped>

</style>