<template>
  <div>
    <div class="payments__table-header">
                <!-- <span>#</span> -->
                <span class="amount">Amount</span>
                <span class="type">Category</span>
                <span class="date">Date</span>
            </div>
    <div class="payments__table" v-for="(item, index) in items" :key="index">
      <!-- <span>{{ index + 1 }}</span> -->
      <span class="amount">{{ item.value }}</span>
      <span class="type">{{ item.category }}</span>
      <span class="date">{{ item.date }}</span>
      <button :name="index" @click="openCloseEditContextMenu(index)">
        ...
      </button>
    </div>
    <transition name="fade">
      <EditContextMenu v-if="showEditContextMenu" :activeTarget="activeTarget"
    /></transition>
  </div>
</template>

<script scope>
export default {
  name: "PaymentsDisplay",
  data() {
    return {
      showEditContextMenu: false,
      activeTarget: 0,
    };
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    curPage: {
      type: Number,
      default: () => Number,
    },
  },
  components: {
    EditContextMenu: () => import("./EditContextMenu.vue"),
  },
  methods: {
    openCloseEditContextMenu(index) {
      if (!this.showEditContextMenu) {
        this.$editContextMenu.show("show");
        this.activeTarget = index + (this.curPage * 5 - 5);
      } else {
        this.$editContextMenu.hide("hide");
      }
    },
    showContextMenu() {
      this.showEditContextMenu = true;
    },
    hideContextMenu() {
      this.showEditContextMenu = false;
    },
  },
  mounted() {
    this.$editContextMenu.EventBus.$on("show", this.showContextMenu);
    this.$editContextMenu.EventBus.$on("hide", this.hideContextMenu);
  },
  beforeDestroy() {
    this.$editContextMenu.EventBus.$off("show", this.showContextMenu);
    this.$editContextMenu.EventBus.$off("hide", this.hideContextMenu);
  },
};
</script>

<style>
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
