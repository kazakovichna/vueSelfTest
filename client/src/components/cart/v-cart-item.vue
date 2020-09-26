<template>
  <div class="v-cart-item">
    <div class="container">
      <div class="row justify-content-sm-center">
        <div class="col item">
          <div class="row">
            <div class="col">
              <img :src="require('../../assets/image/' + cart_data.image)"
                 class="image"
                 alt="img"
                 width="250" >
            </div>
            <div class="col">{{cart_data.name}}</div>
          </div>
        </div>
        <div class="col item">
          <div>Price: {{cart_data.price}}p.</div>
        </div>
        <div class="col item">
          <button class="btn">
            <div @click="upper">/\</div>
          </button>
          <div>{{cart_data.quantity}}</div>
          <button class="btn">
            <div @click="undo">\/</div>
          </button>
        </div>
        <div class="col item">
          <button class="btn" >
            <div @click="delete_from_cart">
              DELETE
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "v-cart-item",
        data() {
            return{}
        },
        props: {
            cart_data: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        mounted() {
            this.$set(this.cart_data, 'quantity', 1)
        },
        methods: {
            undo() {
                this.$emit('undo');
            },
            upper() {
                this.$emit('upper');
            },
            delete_from_cart() {
                this.$emit('delete_from_cart');
            }
        }
    }
</script>

<style>
</style>
