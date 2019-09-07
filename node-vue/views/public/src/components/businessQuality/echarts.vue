<template>
<div class="ee" id="ee"></div>
</template>

<script>
export default {
    name:'DrawInit',
    mounted(){
        this.drawLine();
    },
    methods:{
        drawLine(){

        },
        drawBar(){
             // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById('ee'))
            // 绘制图表
            var option={
                title: { text: '在Vue中使用echarts' },
                tooltip: {},
                xAxis: {
                    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            }
            myChart.setOption(option)
        }
    }
}
</script>

<style scpoed>
.ee{
    width:100%;
    height:100%
}
</style>