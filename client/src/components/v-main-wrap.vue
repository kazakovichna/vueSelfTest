<template>
  <div class="v-main-wrap">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>

export default {
    name: "v-main-wrap",
    data() {
        return {
            title: 'Main Wrapper'
        }
    }
}
</script>

<style>
</style>
