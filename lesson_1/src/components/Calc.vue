<template>
    <div class="main">
        <label for="op1">
            <input id="op1" type="number" placeholder="0" v-model.number="op1">
        </label>
        <label for="op2">
            <input id="op2" type="number" placeholder="0" v-model.number="op2">
        </label>
        = {{ result }}

    </div>
    <div>
        <button @click="result = op1 + op2">+</button>
        <button @click="sub">-</button>
        <button @click="div">/</button>
        <button @click="mult">*</button>
        <!-- <button @click="power">Power</button>
        <button @click="integerDiv">Integer division</button> -->
    </div>
</template>

<script>
export default {
    name: "CalcComponent",
    data() {
        return {
            op1: 0,
            op2: 0,
            result: 0,
        };
    },
    methods: {
        sub (){
            this.result = this.op1 - this.op2
        },
        div (){
            this.result = this.op1 / this.op2
        },
        mult (){
            this.result = this.op1 * this.op2
        },
        // power () {
        //     this.result = this.op1 ** this.op2
        // },
        // integerDiv () {
        //     this.result = parseInt(this.op1/this.op2)
        // }
    }
};
</script>

<style scoped>

</style>