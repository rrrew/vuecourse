<template>
    <div>
        <!-- eslint-disable-next-line -->
        <button @click="show=!show">Add New Payment</button>
        <addPaymentForm v-show="show" @add-payment="addNewPayment" :categoryList="categoryList"/>
        <PaymentsDisplay :items="paymentsList"/>
    </div>
</template>

<script>
    import { mapMutations, mapActions, mapGetters } from 'vuex';
    import PaymentsDisplay from '../components/PaymentsDisplay.vue';
    import addPaymentForm from '../components/addPaymentForm.vue';
    export default {
    name: 'DashboardPage',
    props: {
        show: {
        type: Boolean,
        default: true,
        },
    },
    components: {
        PaymentsDisplay,
        addPaymentForm,
    },
    methods: {
        ...mapActions([
            'fetchData',
            'addNewPayment',
            'fetchCategoryListData',
        ]),
        ...mapMutations([
            'SET_PAYMENTS_LIST',
        ]),
    },
    computed: {
        ...mapGetters([
        'paymentsList',
        'categoryList',
        ]),
    },
    created() {
        this.fetchData();
        this.fetchCategoryListData();
        console.log (this.$route.query.amount);
    }
}
    
</script>

<style scoped>

</style>