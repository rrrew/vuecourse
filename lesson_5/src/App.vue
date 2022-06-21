<template>
  <div id="app"> 
  <header>
    <div class="header">My personal costs</div>
    <nav @click.prevent="pushHistory($event)">
      <!-- <a href="#dashboard" class="route-link">Dashboard</a>
      <a href="#about" class="route-link">About</a>
      <a href="#notfound" class="route-link">Not Found</a> -->
      <!-- <a href="dashboard" class="route-link">Dashboard</a>
      <a href="about" class="route-link">About</a>
      <a href="notfound" class="route-link">Not Found</a> -->
      <router-link to="dashboard" class="route-link">Dashboard</router-link>
      <router-link to="about" class="route-link">About</router-link>
      <router-link to="notfound" class="route-link">Not Found</router-link>
    </nav>
  </header>
  <main>
    <!-- <AddPaymentForm @add-payment="addNewPayment" :categoryList="categoryList"/>
    <payments-display :items="paymentsList" showItems/> -->
    <!-- <dashboard-page-vue v-if="page === 'dashboard'"/>
    <AboutPageVue v-if="page === 'about'"/>
    <NotFoundVue v-if="page === 'notfound'"/> -->
    <!-- <component :is=""></component> -->
    <router-view/>

  </main>
  </div>
</template>

<script>
// import PaymentsDisplay from './components/PaymentsDisplay.vue';
// import addPaymentForm from './components/addPaymentForm.vue';
// import AddPaymentForm from './components/addPaymentForm.vue';
// import { mapMutations, mapActions, mapGetters } from 'vuex';
// import DashboardPageVue from './views/DashboardPage.vue';
// import AboutPageVue from './views/AboutPage.vue';
// import NotFoundVue from './views/NotFound.vue';

export default {
  name: 'App',
  data() {
    return {
      // show: true,
      // paymentsList: []
      page: '',
    };
  },
  methods: {
    setPage() {
        this.page = window.location.pathname.slice(1);
    },
    pushHistory(e) {
      // e.preventDefault();
      // console.log(e);
      if (!e.target.classList.contains('route-link')) return;
      window.history.pushState({}, '', e.target.href);
      this.setPage();
    }
    // ...mapActions([
    //   'fetchData',
    //   'addNewPayment',
    //   'fetchCategoryListData',
    // ]),
    // ...mapMutations([
    //   'SET_PAYMENTS_LIST',
    // ]),
  },
  computed: {
    // ...mapGetters([
    //   'paymentsList',
    //   'categoryList',
    // ]),
  },
  components: {
    // PaymentsDisplay,
    // addPaymentForm,
    // AddPaymentForm
    // DashboardPageVue,
    // AboutPageVue,
    // NotFoundVue,
}, 
  created() {
  //   this.fetchData();
  //   this.fetchCategoryListData();
  // this.page = window.location.hash.slice(1);
  this.setPage();
  // window.addEventListener('hashchange', this.setPage);
  // window.addEventListener('popstate', this.setPage);

  
},
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
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.route-link {
  margin: 10px 5px;
}
</style>
