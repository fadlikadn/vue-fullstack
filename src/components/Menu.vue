<template>
    <div class="row">
        {{ $route.params.items }}
        <div class="col-sm-12 col-md-6">
            <table class="table table-hover">
                <thead class="thead-default">
                    <tr>
                        <th>Size</th>
                        <th>Price</th>
                        <th>Add to basket</th>
                    </tr>
                </thead>
                <tbody v-for="item in getMenuItems" :key="item['.key']">
                    <tr>
                        <td><strong>{{ item.name}}</strong></td>
                    </tr>
                    <tr v-for="option in item.options">
                        <td>{{ option.size }}</td>
                        <td>{{ option.price | currency }}</td>
                        <td><button class="btn btn-sm btn-outline-success" 
                                    type="button"
                                    @click="addToBasket(item, option)">+</button></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- shopping basket -->
        <div class="col-sm-12 col-md-6">
            <div v-if="basket.length > 0">
                <table class="table">
                    <thead class="thead-default">
                        <tr>
                            <th>Quantity</th>
                            <th>Item</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody v-for="item in basket">
                        <tr>
                            <td>
                                <button class="btn btn-sm" 
                                        type="button"
                                        @click="decreaseQuantity(item)">-</button>
                                <span>{{ item.quantity }}</span>
                                <button class="btn btn-sm" 
                                        type="button"
                                        @click="increaseQuantity(item)">+</button>
                            </td>
                            <td>{{ item.name}} {{ item.size }}</td>
                            <td>{{ item.price * item.quantity | currency }}</td>
                        </tr>
                    </tbody>
                </table>
                <p>Order total: {{ total | currency }} </p>
                <button class="btn btn-success btn-block" @click="addNewOrder">Place Order</button>
            </div>
            <div v-else>
                <!-- <p>{{ basketText }}</p> {{ this.$store.state.orders}} -->
                <p>{{ basketText }}</p> 
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { dbOrdersRef } from '../firebaseConfig';

export default {
    data() {
        return {
            basket: [],
            basketText: 'Your basket is empty!',
        }
    },
    computed: {
        ...mapGetters ([
            'getMenuItems'
        ]),
        /*getMenuItems() {
            // return this.$store.state.menuItems
            return this.$store.getters.getMenuItems;
        }*/
        total() {
            var totalCost = 0;
            for(var items in this.basket) {
                var individualItems = this.basket[items];
                totalCost += individualItems.quantity * individualItems.price;
            }
            return totalCost;
        }
    },
    methods: {
        addToBasket(item, option) {
            console.log(item, option);
            this.basket.push({
                name: item.name,
                price: option.price,
                size: option.size,
                quantity: 1
            })
        },
        removeFromBasket(item) {
            this.basket.splice(this.basket.indexOf(item), 1);
        },
        decreaseQuantity(item) {
            item.quantity--;
            if (item.quantity === 0) {
                this.removeFromBasket(item);
            }
        },
        increaseQuantity(item) {
            item.quantity++;
        },
        addNewOrder() {
            // this.$store.commit('addOrder', this.basket);
            dbOrdersRef.push(this.basket);
            this.basket = [];
            this.basketText = "Thank you, you order hase been placed! :)";
        },
    }
}
</script>