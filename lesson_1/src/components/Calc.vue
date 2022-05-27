<template>
    <div class="main">
        <label for="op1">
            <input id="op1" type="number" placeholder="0" v-model.number="operand1">
        </label>
        <label for="op2">
            <input id="op2" type="number" placeholder="0" v-model.number="operand2">
        </label>
        = {{ result }} <br/>
    <!-- Fibonacci = {{ fibResult }} -->
    </div>
    <div v-show="error">
        {{ error }}
    </div>
    <!-- <div>
        <button @click="sum">+</button>
        <button @click="sub">-</button>
        <button @click="div">/</button>
        <button @click="mult">*</button>
        <button @click="power">Power</button>
        <button @click="integerDiv">Integer division</button>
    </div> -->
    <!-- <div class="messages">
        <template v-if="result < 0">Отрицательное число</template>
        <template v-else-if="result < 100">В первой сотне</template>
        <template v-else>Просто условие</template>
    </div> -->
    <div>
        <button v-for="operator of operators" :key="operator" @click="calculate(operator)">{{ operator }}</button>
    </div>
    <div>
        <label for="showkeyboard">
        <input type="checkbox" id="showkeyboard" v-model="checked" @click="showkeyboard">Show keyboard on screen
        </label>
        <div v-show="show">
            <button v-for="key of keys" :key="key" @click="addToOperand(key)">{{ key }}</button>
            <button id="backspace" @click="removeFromOperand">&lArr;</button><br>
            <div id="v-model-radiobutton">
                <label for="one">
                    <input type="radio" id="radioOne" value="operand1" v-model="picked" />Operand 1
                </label>
                <label for="two">
                    <input type="radio" id="radioTwo" value="operand2" v-model="picked" />Operand 2
                    <p v-show="!show">{{ picked }}</p>
                </label>
            </div>
        </div>
    </div>
    <!-- <div class="logs">
        {{ logs }}
    </div> -->
</template>

<script>
export default {
    name: "CalcComponent",
    data() {
        return {
            operand1: 0,
            operand2: 0,
            result: 0,
            fibResult: 0,
            error: '',
            operators: ['+', '-', '/', '*'],
            logs: {},
            keys: [0,1,2,3,4,5,6,7,8,9],
            checked: false,
            picked: 'operand1',
        };
    },
    methods: {
        addToOperand(key) {
            if (this.picked == "operand2") {
                this.operand2 = +(String(this.operand2) + key);
            } else {
                this.operand1 = +(String(this.operand1) + key);
            }
        },
        removeFromOperand() {
            if (this.picked == "operand2") {
                this.operand2 = Number(String(this.operand2).replace(/[0-9]\b/, ""));
            } else {
                this.operand1 = Number(String(this.operand1).replace(/[0-9]\b/, ""));
        }
        },
        calculate (operator){
            this.error ='';
            switch (operator) {
                case '+': this.sum(); break;
                case '-': this.sub(); break;
                case '/': this.div(); break;
                case '*': this.mult(); break;
            }
            // this.logs[Date.now()] = `${this.op1} ${operator} ${this.op2} = ${this.result}`;
            // this.logs = Object.assign (this.logs, { [Date.now()]: `${this.op1} ${operator} ${this.op2} = ${this.result}` });

            const newLog = {[Date.now()]: `${this.op1} ${operator} ${this.op2} = ${this.result}` };
            this.logs = {...this.logs, ...newLog}
        },
        sum () {
            const {operand1, operand2} = this;
            this.error = '';
            this.result = operand1 + operand2;
            this.fibResult = this.fib1 + this.fib2
        },
        sub (){
            const {operand1, operand2} = this;
            this.error = '';
            this.result = operand1 - operand2;
            this.fibResult = this.fib1 - this.fib2        
        },
        div (){
            const {operand1, operand2} = this;
            this.error = '';
            if (this.operand2 === 0) {
                this.error = 'На ноль делить нельзя!';
                return;
            }
            this.result = operand1 / operand2;
            this.fibResult = this.fib1 / this.fib2
        },
        mult (){
            const {operand1, operand2} = this;
            this.error = '';
            this.result = operand1 * operand2;
            this.fibResult = this.fib1 * this.fib2
        },
        power () {
            const {operand1, operand2} = this;
            this.error = '';
            this.result = operand1 ** operand2
        },
        integerDiv () {
            const {operand1, operand2} = this;
            this.error = '';
            this.result = parseInt(operand1/operand2)
        },
        fib(n) {
            console.log('fib');
            return n <= 1 ? n : this.fib(n - 1) + this.fib(n - 2);
        },
        showkeyboard () {
            this.show = !this.show;
        }
    },
    computed: {
        fib1 () {
            return this.fib(this.operand1);
        }, 
        fib2 () {
            return this.fib(this.operand2);
        },
    }
};
</script>

<style scoped>

</style>