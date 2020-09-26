<template>
  <div class="v-catalog-item">
    <div class="container">
      <div class="row justify-content-sm-center">
        <div class="col item">
           <div class="row">
            <div class="col">
              <img :src="require('../../assets/image/' + product_data.image)"
                   class="image"
                   alt="img"
                   width="250">
            </div>
            <div class="col">{{product_data.name}}</div>
           </div>
        </div>
        <div class="col item">
          <div class="row">
           <h5>Price: {{product_data.price}}p.</h5>
          </div>
        </div>
        <div class="col item">
          <button class="btn" @click="add_to_cart">
            <h3>Add to Cart</h3>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "v-catalog-item",
  props: {
      product_data: {
          type: Object,
          default() {
              return {}
          }
      }
  },
  computed: {},
  data() {
      return{}
  },
  methods: {
      add_to_cart() {
          this.$emit('add_to_cart', this.product_data);
      }
  }
}
</script>

<style>
</style>
