<template>
    <button @click="increase">Clicked {{ counter }} times</button>
</template>

<script>
export default {
    name: "CounterComp",
    data () {
        return {
            counter: 0,
        }
    },
    methods: {
        increase (){
            this.counter += 1;
        }
    },
}

</script>

<style scoped>

</style>