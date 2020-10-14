<template>
    <div class="header" 
        @mouseenter="()=>{    
            if(!showList) return showList=true
        }" 
        @mouseleave="()=>{
            if(showList) return showList=false
        }"
    >
        <v-row
           style="align-items:center;position:relative"
           justify="space-between"
        >
            <v-col>
                <h1 class="name">{{ $t('authorInfo.name') }}</h1>
            </v-col>
            <div class="header_list" v-show="showList">
                <v-row
                    align="center"
                    justify="space-around"
                >
                    <v-col class="list_item" v-for="(i,index) in List" :key="i.key" @mousemove="moveHandler(index)" @mouseout="outHandler">
                        <img :src="index === listIndex ? CDN(i.img + '.cur.png') : CDN(i.img + '.png')" :class="index === listIndex ? i.key + 'Animal' : 'defIcon'">
                        <span :class="index === listIndex && 'curSpan'">{{ i.name }}</span>
                    </v-col>
                </v-row>
            </div>
            <v-col cols="3" class="serach-avatar" >
                <span><i class="fas fa-search" style="font-size:32px;"></i></span>
                <v-avatar
                    size="48"
                >
                    <v-img
                        width="30"
                        :lazy-src="CDN('imgs/loadcat.gif')"
                        :src="CDN('pixiv/avatar.jpg')"
                    >
                    </v-img>
                </v-avatar>
            </v-col>
        </v-row>
    </div>
</template>
<script>
import {CDN} from '../../utils/cdn'
export default {
    props:{
        List:{
            type:Array,
            default:()=>{
                return []
            }
        }
    },
    data(){
        return {
            listIndex:-1,
            showList:false
        }
    },
    mounted(){
        console.log(this.List)
    },
    methods:{
        CDN,
        moveHandler(index){
            if(this.listIndex === index) return
            this.listIndex = index
        },
        outHandler(){
            this.listIndex = -1
        }
    }
}
</script>
<style lang="scss" scoped>
    @import url('../../assets/keyframes.css');
    .header{
        width: 100%;
        height:75px;
        background: rgba(255,255,255,0);
        padding:0 3rem;
        transition: background .3s;
    }

    .name{
        color:#464646;
        font-weight: 400;
        &:hover{
            color: #e67474;
            transition: color .2s ease-out,border .2s ease-out,opacity .2s ease-out
        }
    }
    .header_list{
        max-width:680px;
        position: absolute;
        left:30%;
        -webkit-animation: tilt-in-fwd-tr 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        animation: tilt-in-fwd-tr 0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }
    .serach-avatar{
        display:flex;
        align-items:center;
        justify-content: space-around;
    }
    .list_item{
        display: flex;
        align-items: center;
        img{
            width:1.7rem;
            height: 1.7rem;
            margin-right: .2rem;
            // opacity: 0;
          
        }
        span{
            transition: color .2s ease-out,border .2s ease-out,opacity .2s ease-out;
        }
    }
    .defIcon{
        animation-name: showImg;
        animation-timing-function: ease-out;
        animation-duration: 2s;
    }
    @keyframes showImg {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    .curSpan{
        color:#FFA500;
    }
    .homeAnimal{
        -webkit-animation: shake-horizontal 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
        animation: shake-horizontal 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
    }

    .listAnimal{
        -webkit-animation: jello-horizontal 0.9s both;
        animation:jello-horizontal 0.9s both;
    }
    .moodAnimal{
        -webkit-animation: heartbeat 1.5s ease-in-out both;
        animation: heartbeat 1.5s ease-in-out both;
    }
    .cameraAnimal{
        -webkit-animation: blink-1 0.6s both;
        animation: blink-1 0.6s both;
    }

</style>