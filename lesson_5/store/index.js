import Vue from 'vue';
import Vuex from 'vuex';
import categoryList from './categoryList';
import paymentsList from './paymentsList';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        // paymentsList: [],
    },
    getters: {
        // paymentsList(state){
        //     return state.paymentsList;
        // },
        // paymentsList: ({ paymentsList }) => paymentsList,
        // paymentsList: (state) => state.paymentsList,

    },
    mutations: {
        // SET_PAYMENTS_LIST(state, paymentsList) {
        //     state.paymentsList = paymentsList;
        // },
        // ADD_PAYMENTS_DATA(state, payment) {
        //     state.paymentsList.push(payment);
        // },
    },
    actions: {
        // fetchData({commit}) {
        //     setTimeout( () => {
                // const initialPaymentsList = [
                //     {
                //         amount: 169,
                //         type: 'Food',
                //         date: '28.03.2020',
                //     },
                //     {
                //         amount: 360,
                //         type: 'Transport',
                //         date: '24.03.2020',
                //     },
                //     {
                //         amount: 532,
                //         type: 'Food',
                //         date: '24.03.2020',
                //     },
                // ];
        //         commit('SET_PAYMENTS_LIST', initialPaymentsList)
        //     }, 1000);
        // },
        // addNewPayment({ commit }, payment) {
        //     commit('ADD_PAYMENTS_DATA', payment)
        // },
    },
    modules: {
        categoryList,
        paymentsList,
    }
});