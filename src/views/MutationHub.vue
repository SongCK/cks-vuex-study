<template>
  <div class="about">
    <h1>Mutation Hub</h1>
    <p>{{ getText }}</p>
    <p>{{ getNum }}</p>
    <div style="margin: 10px;">
      <span style="margin-right:10px;">mutate text</span>
      <input type="text" v-model="mutateText" @keyup.enter="changeText"/>
      <button style="margin-right:10px;" @click="changeText">Mutation</button>
      <button style="margin-right:10px;" @click="changeTextAction">Action</button>
    </div>
    <div style="margin: 10px;">
      <span style="margin-right:10px;">mutate add num</span>
      <input style="margin-right:10px;" type="text" v-model="mutateNum" @keyup.enter="changeNum">
      <button style="margin-right:10px;" @click="changeNum">Mutation</button>
      <button @click="changeNumAction">Action</button>
    </div>
    <div style="margin: 10px;">
      <span style="margin-right:10px;">mutate plus num</span>
      <button style="margin-right:10px;" @click="plusNum">num plus - Mutation</button>
      <button style="margin-right:10px;" @click="plusNumAction">num plus - Action</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      mutateText: '',
      mutateNum: 0
    }
  },
  computed: {
    ...mapGetters([
      'getText',
      'getNum'
      ])
  },
  methods: {
    changeText() {
      this.$store.commit('changeText', this.mutateText)
    },
    changeNum() {
      this.mutateNum = parseInt(this.mutateNum)
      this.$store.commit('addNum', this.mutateNum)
    },
    plusNum() {
      this.$store.commit('plusNum')
    },
    changeTextAction() {
      this.$store.dispatch('changeTextAsync', { text: this.mutateText })
    },
    changeNumAction() {
      this.mutateNum = parseInt(this.mutateNum)
      this.$store.dispatch('addNumAsync', { num : this.mutateNum })
    },
    plusNumAction() {
      this.$store.dispatch('plusNumAsync')
    },
  }
}
</script>
