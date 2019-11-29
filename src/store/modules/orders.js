const state = {
    orders: [],
}

const mutations = {
    addOrder: (state, order) => state.orders.push(order),
}

const getters = {
    numberOfOrders: state => state.orders.length,
}

const actions = {

}

export default {
    state,
    mutations,
    getters,
    actions,
}