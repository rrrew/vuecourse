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

            this.$emit('add-payment', data);
        }
    },
}
</script>

<style scoped></style>