# public

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


#总结
1.安装
在cmd输入命令npm install -g @vue/cli
检测是否成功 vue --verison(如果没有成功，就是没有将npm放到系统变量path中https://blog.csdn.net/qq_26744901/article/details/76084139)
检测成功之后,在文件夹中创建vue create public(项目文件夹)
创建完成之后，执行npm run dev
2.资料：
https://juejin.im/post/5bc42a7c5188255c996bb3a8
3. 父组件传值给子组件
```js
 <Sort v-bind:msg="['省质差率Top5','1']"/>
```
```js
<template>
<div class="sortTitle">{{msg[0]}}</div>
</template>
<script>
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
```