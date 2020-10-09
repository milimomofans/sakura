<template>
    <div>
        <web-header v-if="screenWidth >= 1024"  :List="list"></web-header>
        <phone-header v-else></phone-header>
    </div>
</template>
<script>
import WebHeader from './WebHeader'
import PhoneHeader from './PhoneHeader'
export default {
    mounted(){
        const that = this
        window.onresize = () => {
            return (() => {
                window.screenWidth = document.body.clientWidth
                that.screenWidth = window.screenWidth
            })()
        }
    },
    data(){
        return {
            screenWidth: document.body.clientWidth,
            list:[
                {
                    name:'首页',
                    key:'home',
                    img:'imgs/home'
                },
                {
                    name:'清单',
                    key:'list',
                    img:'imgs/other'
                },
                {
                    name:'心情',
                    key:'mood',
                    img:'imgs/mood'
                },
                {
                    name:'画廊',
                    key:'camera',
                    img:'imgs/camera'
                }
            ]
        }
    },
    components:{
        WebHeader,
        PhoneHeader
    },
    methods:{

    },
    watch:{
        screenWidth(val){
            if(!this.timer){
                this.screenWidth = val
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
<style scoped>

</style>