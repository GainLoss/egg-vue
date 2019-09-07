<template>
<div class="menu">
    <div class="menuTop">
        <div>
            <img src="../../assets/img/title.png"/>
            <p><img src="../../assets/img/m_huikan_menu.png">单播</p>
        </div>
        <div>
            <img src="../../assets/img/title.png"/>
            <p><img src="../../assets/img/m_play_menu.png">组播</p>
        </div>
    </div>
    <div class="menuLeft">
        <div>
            <img src="../../assets/img/title.png"/>
            <p><img src="../../assets/img/m_huikan_menu.png">综合</p>
        </div>
        <div>
            <img src="../../assets/img/title.png"/>
            <p><img src="../../assets/img/m_play_menu.png">直播</p>
        </div>
        <div>
            <img src="../../assets/img/title.png"/>
            <p><img src="../../assets/img/m_demand_menu.png">点播</p>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name:'Menu'
}
</script>
<style scoped>
.menuLeft{
    margin-top:100px;
    width:50px;
    float:left;
    color:#00ffff
}
.menuLeft div{
    position:relative;
    width:40px;
    height:202px;
}
.menuLeft div img:first-child{
    transform: rotate(90deg);
    width:200px;
    height:40px;
    margin-left: -69px;
    margin-top: 72px;
}
.menuLeft div img:last-child{
    width:25px;
    height:25px;
    margin-left: 0px;
    margin-top: 0px;
}
.menuLeft p{
    position:absolute;
    top:49px;
    left:18px;
    width:30px;
    text-align:center;
    font-size:18px;
}
.menuTop{
    width:500px;
    height:40px;
    margin-left:80px;
    color:#00ffff;
}
.menuTop div{
    width:180px;
    height:40px;
    float:left;
    position:relative;
}
.menuTop div img:first-child{
    transform: rotate(180deg);
    width:100%;
    height:100%
}
.menuTop div img:last-child{
    width:25px;
    height:25px;
    float:left;
}
.menuTop p{
    position:absolute;
    top:9px;
    left:54px;
    text-align:center;
    font-size:18px;
}

</style>