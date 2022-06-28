<template>
  <div id="app">
    <!-- <CounterComp v-if="show"/>
    <CounterComp v-show="show"/>
    <button @click="show = !show">hide/show</button>
    <div id="hover">Hover Me</div> -->
  
  <header>
    <div class="header">My personal costs</div>
    <!-- <div :class=$style.header>My personal costs</div> -->


  </header>
  <main>
    <AddPaymentForm @add-payment="addNewPayment"/>
    <payments-display :items="paymentsList" showItems/>
  </main>
  </div>
</template>

<script>
// import CounterComp from './components/Counter.vue'
import PaymentsDisplay from './components/PaymentsDisplay.vue';
import addPaymentForm from './components/addPaymentForm.vue';
import AddPaymentForm from './components/addPaymentForm.vue';

export default {
  name: 'App',
  data() {
    return {
      show: true,
      paymentsList: []
    };
  },
  methods: {
    fetchData () {
      return [
        {
          amount: 169,
          type: 'Food',
          date: '28.03.2020',
        },
        {
          amount: 360,
          type: 'Transport',
          date: '24.03.2020',
        },
        {
          amount: 532,
          type: 'Food',
          date: '24.03.2020',
        },
      ]
    },
    addNewPayment (data) {
      console.log(data);
      this.paymentsList.push(data);
    }
  },
  computed: {

  },
  components: {
    // CounterComp
    PaymentsDisplay,
    addPaymentForm,
    AddPaymentForm
}, 
  created() {
    this.paymentsList = this.fetchData();
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
.header {
  color: #f00;
}
</style>
