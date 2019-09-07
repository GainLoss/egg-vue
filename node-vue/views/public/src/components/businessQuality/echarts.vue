<template>
<div style="width:100%;height:100%">
    <div class="ee" :id="drawEchart[0]"></div>
</div>
</template>

<script>
export default {
    name:'DrawInit',
    props:{
        drawEchart:Array[String,String,String]
    },
    mounted(){
        this.drawLine(this.drawEchart[0]);
    },
    methods:{
        drawLine(id){
            let myChart = this.$echarts.init(document.getElementById(id))
            var option = {
                xAxis: {
                    type: 'category',
                    axisLabel:{
                        color:'#00ffff',
                    },
                    textStyle:{
                        color:'#00ffff'
                    },
                    splitLine:{
                        lineStyle:{
                            color:'#00ffff'
                        }
                    },
                    axisLine:{
                        lineStyle:{
                            color:'#00ffff'
                        }
                    },
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value',
                    axisLine:{
                        lineStyle:{
                            color:'#00ffff'
                        }
                    },
                    splitLine:{
                        lineStyle:{
                            color:'#00ffff'
                        }
                    },
                     axisLabel:{
                        color:'#00ffff',
                    },
                },
                series: [{
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line'
                }]
            };

            myChart.setOption(option)
        },
        drawBar(){
             // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById('ee'))
            var option = {
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [120, 200, 150, 80, 70, 110, 130],
                    type: 'bar'
                }]
            };

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