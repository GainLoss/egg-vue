<template>
<div class="test">
    {{msg}}
</div>
</template>
<script>
export default {
    name:'test',
    props:{
        msg:String
    },

    mounted () {
        this.$http.get('http://127.0.0.1:7001/test').then(response => (this.info = response))
    }
}
</script>