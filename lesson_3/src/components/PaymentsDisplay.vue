<template>
    <div>
        <!-- <div v-if="showItems">
    Prop is true
        </div> -->
        <!-- {{ items }} -->
        <div class="payments__table-header">
                <span>#</span>
                <span class="amount">Amount</span>
                <span class="type">Category</span>
                <span class="date">Date</span>
            </div>
        <div v-for="(item, index) in items" :key="index"> 
            
            <div class="payments__table">
                <span>{{ index+1 }}</span>
                <span class="amount">{{ item.amount }}</span>
                <span class="type">{{ item.type }}</span>
                <span class="date">{{ item.date }}</span>
            </div><hr>
        </div>
    </div>     
</template>

<script>
export default {
    name: 'PaymentsDisplay',
    props: {
        items: {
            type: Array,
            // required: true,
            default: () => {[]},
        },
        showItems: {
            type: Boolean,
            default: false,
        }
    }
}
</script>

<style scoped>
body {
    margin: 0 auto;
}
.payments__table {
    display: flex;
    width: 600px;
    margin-left: 150px;
    padding-top: 20px;
    
}

.payments__table-header {
    font-weight: 600;
    display: flex;
    margin-left: 150px;
    width: 600px;
    margin-top: 20px;
}
.amount, .type, .date {
    width: 25%;
}
</style>