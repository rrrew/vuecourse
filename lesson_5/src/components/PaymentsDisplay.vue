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
        <div v-for="(item, index) in pageList" :key="index"> 
            
            <div class="payments__table">
                <span>{{ index+1 }}</span>
                <span class="amount">{{ item.amount }}</span>
                <span class="type">{{ item.type }}</span>
                <span class="date">{{ item.date }}</span>
            </div><hr>
        </div>
        <!-- <div v-for="(item, index) in pageList" :key="index">{{ item }}</div> -->
    <!-- {{ pagCount }} -->
    <div class="paginate">
        <a
        href="#"
        class="page-link"
        :class="{ 'page-link_active': page === currentPage }"
        v-for="page of pagCount" :key="page"
        @click="selectPage(page)"
        >
            <button>{{ page }}</button>
        </a>
    </div>
    </div>     
</template>

<script>
export default {
    name: 'PaymentsDisplay',
    data() {
    return {
        currentPage: 1,
        pageSize: 5,
        };
    },
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
    },
    computed: {
        pagCount() {
            return Math.ceil(this.items.length / this.pageSize);
        },
        pageList() {
            const { currentPage, pageSize } = this;
            const start = (currentPage - 1) * pageSize;
            const end = start + pageSize;

            return this.items.slice(start, end);
        },
    },
    methods: {
        selectPage(page) {
            this.currentPage = page;
        },
    },
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

.paginate {
    display: flex;
    justify-content: center;
}
.page-link {
    display: flex;
    align-items: center;
    margin: 4px;
    text-decoration: none;
    color: #000;
}

.page-link:hover {
    cursor: pointer;
}

.page-link:active {
    color: dodgerblue;
    font-weight: 500;
}

</style>