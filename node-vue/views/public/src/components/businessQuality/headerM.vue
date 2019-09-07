<template>
<div class="header">
    <div class="time">时间插件</div>
    <div class="title">全国天翼质量情况监控</div>
    <div class="user">当前登录1人</div>
</div>
</template>

<script>
export default {
    name:'HeaderM'
}
</script>

<style>
.header{
    height:50px;line-height:50px;color:#fff;margin-bottom:20px;
}
.header .time{
    width:30%;float:left;
}
.header .title{
    width:40%;float:left;background:url(../../assets/img/title.png) no-repeat;background-size:100% 100%
}
.header .user{
    width:30%;float:left;
}
</style>