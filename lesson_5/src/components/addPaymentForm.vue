<template>
    <div>
        <label for="amount">
            <input id="amount" type="text" placeholder="Amount" v-model="amount">
        </label> 
        <label for="type">
            <!-- <input id="type" type="text" placeholder="Type" v-model="type"> -->
            <select v-model="type" id="type">
                <option 
                v-for="category of categoryList"
                :value="category"
                :key="category">
                {{ category }}
                </option>
            </select>
        </label>
        <label for="date">
            <input id="date" type="text" placeholder="Date" v-model="date">
        </label>
        <button @click="addPayment">Add</button>
    </div>
</template>

<script>
export default {
    name: "addPaymentForm",
    props: {
        categoryList: {
            type: Array,
            default: () => ([]),
        }
    },
    data () {
        return {
            amount: '',
            type: '',
            date: '',
        };
    },
    computed: {
        paymentDate () {
            const currentDate = new Date();
            const day = currentDate.getDate();
            const month = currentDate.getMonth() + 1;
            const year = currentDate.getFullYear();

            return `${day}.${month}.${year}`;
        }
    },
    methods: {
        addPayment() {
            const data = {
                amount: +this.amount,
                type: this.type,
                date: this.date || this.paymentDate,
            };

            // this.$store.commit('ADD_PAYMENTS_DATA', data);
            setTimeout(() => {
                this.$store.commit('ADD_PAYMENTS_DATA', data);
            }, 1000);
        },
        // addPaymentviaRouter() {
        //     const data = {
        //         amount: +this.$route.query[amount],
        //         type: this.type,
        //         date: this.date || this.paymentDate,
        //     };
        //     data.type = this.$route.params.pathMatch.slice(1);
        //     // eslint-disable-next-line
        //     // data.amount = this.$route.query;

        //     this.$emit('add-payment', data);
        // }
},
        mounted() {
            const type = this.$route.params.pathMatch.slice(1);
            if(!type) {
                return 
            }
            this.type = type;
            const amount = this.$route.query.amount;
            console.log(amount)
            if(!amount) return 
            this.amount = amount
            if(this.amount && this.type) {
            this.addPayment();
            }
    }
}

</script>

<style scoped></style>