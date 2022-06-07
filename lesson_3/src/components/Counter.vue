<template>
      <button @click="increase">Clicked {{ counter }} times</button>
</template>

<script>
export default {
  name: 'CounterComp',
  data () {
        return {
            counter: 0,
        }
    },
    methods: {
        increase (){
            this.counter += 1;
        },
        mouseOver() {
          console.log ('mouseOver');
        }
    },
    beforeCreate() {
      console.log ('beforeCreate');
    },
    created() {
      console.log('created');
    },
    beforeMount() {
      console.log('beforeMount');
    },
    mounted() {
      console.log('mounted');
      const div = document.querySelector('#hover');
      div.addEventListener('mouseover', this.mouseOver);
    },
    beforeUpdate() {
      console.log ('beforeUpdate');
    },
    updated() {
      console.log ('updated');
    },
    beforeDestroy() {
      console.log('beforeDestroy');
      const div = document.querySelector('#hover');
      div.removeEventListener('mouseover', this.mouseOver);
    },
    destroyed() {
      console.log('destroyed');
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
