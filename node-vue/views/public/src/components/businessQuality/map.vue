<template>
<div id="map" class="map"></div>
</template>

<script>

export default {
    name:'Map',
    mounted(){
        this.drawMap();
    },
    methods:{
        //地图
        drawMap(){
            let myChart = this.$echarts.init(document.getElementById('map'))
            function randomData() {
                return Math.round(Math.random()*100);
            }
            var data = [

                {
                    name: '齐齐哈尔'
                }, {
                    name: '盐城'
                }, {
                    name: '青岛'
                }, {
                    name: '金昌'
                }, {
                    name: '泉州'
                }, {
                    name: '拉萨'
                }, {
                    name: '上海浦东'
                }, {
                    name: '攀枝花'
                }, {
                    name: '威海'
                }, {
                    name: '承德'
                }, {
                    name: '汕尾'
                }, {
                    name: '克拉玛依'
                }, {
                    name: '重庆市'
                }

            ];
            var geoCoordMap = {

                '齐齐哈尔': [123.97, 47.33],
                '盐城': [120.13, 33.38],
                '青岛': [120.33, 36.07],
                '金昌': [102.188043, 38.520089],
                '泉州': [118.58, 24.93],
                '拉萨': [91.11, 29.97],
                '上海浦东': [121.48, 31.22],
                '攀枝花': [101.718637, 26.582347],
                '威海': [122.1, 37.5],
                '承德': [117.93, 40.97],
                '汕尾': [115.375279, 22.786211],
                '克拉玛依': [84.77, 45.59],
                '重庆市': [108.384366, 30.439702],

            };
            myChart.setOption({
                series: [{
                    type: 'map',
                    map: 'china'
                }]
            });
            var convertData = function(data) {
                var res = [];
                for (var i = 0; i < data.length; i++) {
                    var geoCoord = geoCoordMap[data[i].name];

                    if (geoCoord) {
                        res.push({
                            name: data[i].name,
                            value: geoCoord.concat(data[i].value)
                        });
                    }
                }

                return res;
            };
            var option = {


                title: {
                    text: '中国大区分布图',
                    subtext: '中国的八大区分布',
                    sublink: '#',

                    itemGap: 30,

                    left: 'center',
                    textStyle: {

                        color: '#1a1b4e',

                        fontStyle: 'normal',

                        fontWeight: 'bold',

                        fontSize: 30

                    },

                    subtextStyle: {


                        color: '#58d9df',

                        fontStyle: 'normal',

                        fontWeight: 'bold',

                        fontSize: 16


                    }
                },

                tooltip: {
                    trigger: 'item'

                },

                visualMap: {
                    min: 0,
                    max: 100,
                    left: 'left',
                    top: 'bottom',
                    text: ['高', '低'],
                    calculable: true,
                    inRange: {
                        color: ['#ffffff', '#E0DAFF', '#ADBFFF', '#9CB4FF', '#6A9DFF', '#3889FF']
                    }
                },
                toolbox: {
                    show: true,
                    orient: 'vertical',
                    left: 'right',
                    top: 'center',
                    feature: {
                        dataView: {
                            readOnly: false
                        },
                        restore: {},
                        saveAsImage: {}
                    }
                },


                geo: {
                    map: 'china',
                    zoom: 1.2,
                    label: {
                        normal: {

                            show: true,
                            color: '#c1c4c8'
                        },
                        emphasis: {
                            show: false,
                            color: '#292929'
                        }
                    },
                    roam: true,
                    itemStyle: {
                        normal: {
                            areaColor: '#fbfbfb',
                            borderColor: '#b9b4b7'

                        },
                        emphasis: {
                            areaColor: '#05ff09'
                        }
                    }
                },
                series: [{
                    name: '供需占比',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    data: convertData(data),
                    symbolSize: 10,
                    showEffectOn: 'render',
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    hoverAnimation: true,
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: false
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#c60fff',
                            shadowBlur: 10,
                            shadowColor: '#333'
                        }
                    }
                }, {
                    type: 'map',
                    mapType: 'china',
                    geoIndex: 0,
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data: [{
                        name: '北京',
                        value: randomData()
                    }, {
                        name: '天津',
                        value: randomData()
                    }, {
                        name: '上海',
                        value: randomData()
                    }, {
                        name: '重庆',
                        value: randomData()
                    }, {
                        name: '河北',
                        value: randomData()
                    }, {
                        name: '河南',
                        value: randomData()
                    }, {
                        name: '云南',
                        value: randomData()
                    }, {
                        name: '辽宁',
                        value: randomData()
                    }, {
                        name: '黑龙江',
                        value: randomData()
                    }, {
                        name: '湖南',
                        value: randomData()
                    }, {
                        name: '安徽',
                        value: randomData()
                    }, {
                        name: '山东',
                        value: randomData()
                    }, {
                        name: '新疆',
                        value: randomData()
                    }, {
                        name: '江苏',
                        value: randomData()
                    }, {
                        name: '浙江',
                        value: randomData()
                    }, {
                        name: '江西',
                        value: randomData()
                    }, {
                        name: '湖北',
                        value: randomData()
                    }, {
                        name: '广西',
                        value: randomData()
                    }, {
                        name: '甘肃',
                        value: randomData()
                    }, {
                        name: '山西',
                        value: randomData()
                    }, {
                        name: '内蒙古',
                        value: randomData()
                    }, {
                        name: '陕西',
                        value: randomData()
                    }, {
                        name: '吉林',
                        value: randomData()
                    }, {
                        name: '福建',
                        value: randomData()
                    }, {
                        name: '贵州',
                        value: randomData()
                    }, {
                        name: '广东',
                        value: randomData()
                    }, {
                        name: '青海',
                        value: randomData()
                    }, {
                        name: '西藏',
                        value: randomData()
                    }, {
                        name: '四川',
                        value: randomData()
                    }, {
                        name: '宁夏',
                        value: randomData()
                    }, {
                        name: '海南',
                        value: randomData()
                    }, {
                        name: '台湾',
                        value: randomData()
                    }, {
                        name: '香港',
                        value: randomData()
                    }, {
                        name: '澳门',
                        value: randomData()
                    }, {
                        name: '南海诸岛',
                        value: randomData()
                    }]
                }]
            };
            myChart.setOption(option);
        }
    }
}
</script>

<style scpoed>
.map{
    width:calc(100% - 420px);
    height:400px;
    float:left;
}
</style>