<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p>-parent</p>
    <child v-bind:msg="message"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Child from '@/components/Child.vue'

export default {
  name: 'parent',
  components: {
    'child': Child
  },
  data() {
    return {
      message: 'Hello World'
    }
  }
}
</script>
