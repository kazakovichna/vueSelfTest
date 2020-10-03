<template>
  <div class="v-cart list" :style="{'background-image': `url(${require('../../assets/image/back.jpg')})`}">
    <div class="row">
      <div class="col header">
        <h1>Cart</h1>
      </div>
      <router-link :to="{name: 'catalog'}">
        <div class="col header">
          <button class="btn">
            <h2>Back To CaTAloG</h2>
          </button>
        </div>
      </router-link>
    </div>
    <h2 v-if="!cart_data.length" style="color: white">There are no products in cart</h2>
    <v-cart-item
      v-for="(item, index) in cart_data"
      :key="item.id"
      :cart_data="item"
      @undo="undo(index)"
      @upper="upper(index)"
      @delete_from_cart="delete_from_cart(index)"
    />
    <div class="total" v-if="cart_data.length">
      <h2>Total: {{check_total}}</h2>
    </div>
  </div>
</template>

<script>
  import vCartItem from './v-cart-item'
  import { mapActions } from 'vuex'

  export default {
      name: "v-cart",
      components: {
          vCartItem
      },
      props: {
          cart_data: {
              type: Array,
              default() {
                  return []
              }
          }
      },
      data() {
          return{
            "cart_total": 0
          }
      },
      methods: {
          ...mapActions([
              'UNDO',
              'UPPER',
              'DELETE_FROM_CART'
          ]),
          undo(index) {
            this.UNDO(index)
            this.check_total()
          },
          upper(index) {
            this.UPPER(index)
            this.check_total()
          },
          delete_from_cart(index) {
            this.DELETE_FROM_CART(index)
            this.check_total()
          }
      },
      computed: {
        check_total() {
          let total = [];

          if(this.cart_data.length){
            for (let item of this.cart_data) {
              total.push(item.price * item.quantity)
            }
            total = total.reduce( function (sum, el) {
              return sum + el;
            });

            return total;

          } else {
            return 0
          }
        }
      }
  }
</script>

<style>
</style>
