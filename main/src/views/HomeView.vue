<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// import {minxin} from '@/mixin/minxin.js';
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  // mixins: [minxin],
  components: {
    HelloWorld
  }
}
</script>
