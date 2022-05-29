<template>
  <div id="app">
    <CounterComp/>
  </div>
</template>

<script>
import CounterComp from './components/Counter.vue'

export default {
  name: 'App',
  data() {
    return {

    };
  },
  methods: {
    
  },
  computed: {

  },
  components: {
    CounterComp
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
