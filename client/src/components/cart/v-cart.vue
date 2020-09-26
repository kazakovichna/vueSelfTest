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
          return{}
      },
      methods: {
          ...mapActions([
              'UNDO',
              'UPPER',
              'DELETE_FROM_CART'
          ]),
          undo(index) {
              this.UNDO(index)
          },
          upper(index) {
              this.UPPER(index)
          },
          delete_from_cart(index) {
              this.DELETE_FROM_CART(index)
          }
      }
  }
</script>

<style>
</style>
