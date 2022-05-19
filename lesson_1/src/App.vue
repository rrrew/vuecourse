<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App" :show="true"/>
  <p>{{ msg }}</p>
  <!-- <button @click="inc(2, $event)">{{ counter }}</button>
  <button @click="reset">Reset counter</button> -->
  <label for="someText">
  <input 
    id="someText"
    type="text"
    placeholder="text"
    v-model="someText"
    @focus="focus"
    @blur="blur">
    </label>
    <p>{{ someText }}</p>
    <CalcComponent />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import CalcComponent from './components/Calc.vue';

export default {
  name: 'App',
  data() {
    return {
      msg: 'Hello Vue!',
      counter: 0,
      someText: ''
    };
  },
  methods: {
    inc(step, event) {
      console.log(event);
      this.counter += step;
    },
    reset () {
      this.counter = 0;
    },
    focus(){
      console.log ('focus');
    },
    blur () {
      console.log('blur');
    }
  },
  components: {
    HelloWorld,
    CalcComponent,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
