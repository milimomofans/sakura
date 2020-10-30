<template>
    <div>
        <div class="title">
            <v-text-field 
                label="文章标题" 
                v-model="title.value"
                :rules="title.rules" 
            />
            <v-text-field 
                label="文章简介"
                v-model="content.value"
                :rules="content.rules"
            />
        </div>
        <mavon-editor v-model="markdown.md" @change="changeMd" :ishljs="true" />
        <div @click="save">保存</div>
    </div>
</template>
<script>
import {testService,articleMoridfy} from '../../service/test'
export default {
    data(){
        return {
            markdown:{
                html:'',
                md:''
            },
            title:{
                value:'',
                rules:[
                    value => value.length > 0 || '请输入文章标题'
                ]
            },
            content:{
                value:'',
                rules:[
                    value => value.length > 0 || '请输入文章简介内容'
                ]
            }
        }
    },
    mounted(){
        this.getList()
    },
    methods:{
        changeMd(value,render){
            this.markdown = {
                html:value,
                md:render
            }
        },
        getList(){
            testService().then(res=>{
                console.log(res)
            })
            .catch(error=>{
                console.log(error)
            })
        },
        save(){
            let {
                markdown,
                title,
                content
            } = this
            let apiParam = {
                title:title.value,
                content:content.value,
                html:markdown.html,
                md:markdown.md
            }
            console.log(apiParam)
            articleMoridfy(apiParam).then(res=>{
                console.log(res)
            })
        }
    }
}
</script>
<style lang="scss">
    .title{
        width:80%;
        margin:1rem auto;
    }
</style>