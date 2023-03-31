<template>
    <div>
        <span :class="`${this.class} letterFlip`" v-for="(letter, index) in this.word" :style="'--i:'+index">{{letter === ' ' ? '&nbsp;&nbsp;' : letter }}</span>
    </div>
</template>

<script>
export default{
    name:'letterFlip',
    props:{
        word:{
            type:String
        },
        class:{
            type:String,
            default:''
        }
    },
}
</script>