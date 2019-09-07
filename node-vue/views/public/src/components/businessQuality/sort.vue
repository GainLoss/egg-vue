<template>
<div class="sort">
    <div class="sortTitle">{{msg[0]}}</div>
    <div class="sortCon"><DrawInit/></div>
</div>
</template>

<script>
import DrawInit from './echarts.vue'
export default {
    name:'Sort',
    props:{
        msg:Array[String,String]
    },
    components:{
        DrawInit
    }
}
</script>

<style scoped>
.sort{
    width:200px;
    height:200px;
    border:1px solid #00ffff;
    border-radius:3px;
    margin-bottom:20px;
    color:#00ffff;
}
.sortTitle{
    width:100%;
    height:30px;
    background:url(../../assets/img/icon1.png) no-repeat;
    background-size:100% 100%;
    font-size:14px;
    text-align:left;
    line-height:30px;
}
.sortCon{
    width:100%;
    height:calc(100% - 20px)
}
</style>