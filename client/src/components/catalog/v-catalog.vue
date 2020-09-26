<template>
<div class="v-catalog list" :style="{'background-image': `url(${require('../../assets/image/back.jpg')})`}">
  <div class="row ">
   <!-- <div class="col header">
    </div>-->
    <div class="col header">
      <h1>CATAlOG</h1>
    </div>
    <router-link :to="{name: 'cart', params: {cart_data: CART}}">
      <div class="col header">
        <button class="btn">
          <h2>CART: {{CART.length}}</h2>
        </button>
      </div>
    </router-link>
  </div>
  <v-catalog-item
  v-for="product in PRODUCTS"
  :key="product.id"
  :product_data="product"
  @add_to_cart="add_to_cart">
   </v-catalog-item>
</div>
</template>

<script>
import vCatalogItem from './v-catalog-item'
import {mapActions, mapGetters} from 'vuex'

  export default {
      name: "v-catalog",
      components: { vCatalogItem },
      data() {
          return {
              products: [],
              backgroundImg: require('../../assets/image/back.jpg')
          }
      },
      methods: {
          ...mapActions([
              'GET_PRODUCTS_FROM_API',
              'ADD_TO_CART'
          ]),
          add_to_cart(data) {
              this.ADD_TO_CART(data);
              console.log("Emitter work's")
          },
          sorted_by_category() {

          }
      },
      computed: {
          ...mapGetters([
              "PRODUCTS",
              "CART"
          ])
      },
      mounted() {
          this.GET_PRODUCTS_FROM_API()
              .then((responde) => {
                  if(responde.data) {
                      console.log('Data was arrived!')
                  }
              })
      }
  }
</script>

<style>
</style>
