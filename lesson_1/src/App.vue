<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App" :show="true"/>
  <p>{{ msg }}</p> -->
  <!-- <button @click="inc(2, $event)">{{ counter }}</button>
  <button @click="reset">Reset counter</button> -->
  <!-- <label for="someText">
  <input 
    id="someText"
    type="text"
    placeholder="text"
    v-model="someText"
    @focus="focus"
    @blur="blur">
    </label>
    <p>{{ someText }}</p>
    <CalcComponent /> -->
    <!-- <div>
      {{ collection }}
    </div>
    <div v-for="(item, index) in collection" :key="index">
      {{ index }}: {{ item }}
    </div>
    <button @click="addElementInCollection">Add</button>
    <button @click="removeElementFromElement">Remove</button> -->
    <!-- <div v-for="item of filteredArr" :key="item.text">
      {{ item }}
    </div> -->
    <div id="app">
      <Counter></Counter>
    </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
// import CalcComponent from './components/Calc.vue';
// import CounterComp from './components/Counter.vue';
import Counter from './components/Counter.vue';

export default {
  name: 'App',
  data() {
    return {
      msg: 'Hello Vue!',
      counter: 0,
      someText: '',
      collection: [1,2,3,4,5,6,7],
      arr: [
        {
          text: 'qwe',
          show: true
        },
        {
          text: 'asd',
          show: true
        },
        {
          text: 'zxc',
          show: false
        },
      ]
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
    },
    addElementInCollection () {
      const nextElementValue = this.collection [this.collection.length - 1] + 1;
      this.collection.push(nextElementValue);
    },
    removeElementFromElement () {
      this.collection.pop();
    }
  },
  computed: {
    filteredArr() {
      return this.arr.filter(({ show }) => show);
    },
  },
  components: {
    // HelloWorld,
    // CalcComponent,
    Counter,
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
