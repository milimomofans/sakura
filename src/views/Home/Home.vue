<template>
    <div>
        <Header></Header>
        <div class="web-container">
            <img :src="CDN('pixiv/hello-mio-web.jpg')" class="hello-mio-web">
            <i class="fas fa-play-circle" @click="playerHandler" style="font-size:40px;color:#ffffff"></i>
            <d-player ref="Dplayer" :options="playerOptions"></d-player>
        </div>
    </div>
</template>
<script>
import {CDN} from '@/utils/cdn'
import { createDplayerOptions } from '@/utils/dplayerOptions'
import VueDPlayer from 'vue-dplayer'
import 'vue-dplayer/dist/vue-dplayer.css'
export default {
    components:{
        'd-player':VueDPlayer
    },
    mounted(){
        const that = this
        window.onresize = () => {
            return (() => {
                window.screenWidth = document.body.clientWidth
                window.screenHeight = document.body.clientHeight
                that.windowScreen = {
                    width:window.screenWidth,
                    height:window.screenHeight
                }
            })()
        }
        const playerOptions =  createDplayerOptions()
        this.playerOptions = playerOptions
        this.video = this.$refs.Dplayer
    },
    data(){
        return {
            bgSize:{},
            screenWidth:0,
            screenHeight:0,
            windowScreen:{},
            playerOptions:{},
            video:null
        }
    },
    methods:{
        CDN,
        playerHandler(){
            this.video.play()
        },
    },
    watch:{
        windowScreen(val){
            if(!this.timer){
                this.windowScreen = val
                this.timer = true
                let that = this
                setTimeout(function(){
                    that.timer = false
                },400)
            }
        }
    }
}
</script>
<style lang='scss' scoped>
    .hello-mio-web{
        width: 100%;
        height:100%;
        position: fixed;
        top: 0;
        z-index:2;
        transition: all .3s;
    }
    .fa-play-circle{
        position: absolute;
        z-index: 3;
        bottom: 2rem;
        right:2rem;
    }
</style>