<template>
    <div>
        <section v-if="currentUser">
            <div class="row">
                <div class="col-sm-12 col-md-6">
                    <pp-new-pizza></pp-new-pizza>
                </div>
                <div class="col-sm-12 col-md-6">
                    <h3>Menu: </h3>
                    <table class="table table-hover">
                        <thead class="thead-default">
                            <tr>
                                <th>Item</th>
                                <th>Remove from menu</th>
                            </tr>
                        </thead>
                        <tbody v-for="item in getMenuItems" :key="item['.key']">
                            <tr>
                                <td>{{ item.name }}</td>
                                <td>
                                    <button class="btn btn-outline-danger btn-sm" @click="removeMenuItem(item['.key'])">x</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="row">
                <div class="col-sm-12">
                    <h3>Current Orders: {{ numberOfOrders }} </h3>
                    <table class="table table-sm" v-for="(orders, index) in getOrders" :key="orders['.key']">
                        <thead class="thead-default">
                            <tr>
                                <th>Item</th>
                                <th>Size</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                        </thead>

                        <tbody>
                            <div class="order-number">
                                <strong><em>Order Number: {{ index +1 }}</em></strong>
                                <button class="btn btn-outline-danger btn-sm" @click="removeOrderItem(orders['.key'])">x</button>
                            </div>
                            <tr v-for="ordersItem in orders">
                                <td>{{ ordersItem.name }}</td>
                                <td>{{ ordersItem.size }}</td>
                                <td>{{ ordersItem.quantity }}</td>
                                <td>{{ ordersItem.price | currency }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>        

        <hr>
        <div class="row">
            <div class="col-sm-12 col-lg-6">
                <pp-login></pp-login>
            </div>
        </div>
    </div>
</template>

<script>
import NewPizza from './NewPizza.vue';
import Login from './Login.vue';
import { mapGetters } from 'vuex';
import { dbMenuRef } from '../firebaseConfig';
import { dbOrdersRef } from '../firebaseConfig';

export default {
    components: {
        ppNewPizza: NewPizza,
        ppLogin: Login,
    },
    computed: {
        /*getMenuItems() {
            return this.$store.state.menuItems;
        },
        numberOfOrders() {
            return this.$store.getters.numberOfOrders;
        }*/
        ...mapGetters ([
            'numberOfOrders',
            'getMenuItems',
            'getOrders',
            'currentUser',
        ]),
    },
    methods: {
        removeMenuItem(key) {
            console.log(key);
            dbMenuRef.child(key).remove();
        },
        removeOrderItem(key) {
            console.log(key);
            dbOrdersRef.child(key).remove();
        },
    },
    beforeRouteLeave (to, from, next) { // guards
        if (confirm("Have your remembered to log out?") == true) {
            next();
        } else {
            next(false);
        }
    }
}
</script>

<style>
    .order-number {
        margin: 10px 0;
    }
</style>