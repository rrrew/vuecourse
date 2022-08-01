export default {
    state() {
        return {categoryList: []};
    },
    getters: {
        categoryList: (state) => state.categoryList,

    },
    mutations: {
        SET_CATEGORY_LIST(state, categoryList) {
            state.categoryList = categoryList;
        },
    },
    actions: {
        fetchCategoryListData({commit}) {
            setTimeout( () => {
                const categoryList = ['Food', 'Transport', 'Education', 'Sport'];
                commit('SET_CATEGORY_LIST', categoryList)
            }, 1000);
        },
    },
};