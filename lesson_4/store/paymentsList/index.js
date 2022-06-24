export default {
    state: {
        paymentsList: [],
    },
    getters: {
        paymentsList: (state) => state.paymentsList,
    },
    mutations: {
        SET_PAYMENTS_LIST(state, paymentsList) {
            state.paymentsList = paymentsList;
        },
        ADD_PAYMENTS_DATA(state, payment) {
            state.paymentsList.push(payment);
        },
    },
    actions: {
        fetchData({ commit }) {
            setTimeout(() => {
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
                const initialPaymentsList = {
                    "page1": [
                    { "id": 1, "date": "20.03.2020", "type": "Food", "amount": 169 },
                    { "id": 2, "date": "21.03.2020", "type": "Navigation", "amount": 50 },
                    { "id": 3, "date": "22.03.2020", "type": "Sport", "amount": 450 }
                    ],
                    "page2": [
                    { "id": 4, "date": "23.03.2020", "type": "Entertaiment", "amount": 969 },
                    { "id": 5, "date": "24.03.2020", "type": "Education", "amount": 1500 },
                    { "id": 6, "date": "25.03.2020", "type": "Food", "amount": 200 }
                    ],
                    };
                    // if(this.fetchData.initialPaymentsList.page1) {
                    //     commit('SET_PAYMENTS_LIST', initialPaymentsList.page1);
                    // } else if (this.fetchData.initialPaymentsList.page2) {
                    //     commit('SET_PAYMENTS_LIST', initialPaymentsList.page2);
                    // }
                    commit('SET_PAYMENTS_LIST', initialPaymentsList.page1)
                }, 1000);
            },
            addNewPayment({ commit }, payment) {
                commit('ADD_PAYMENTS_DATA', payment);
        },
    },
};
