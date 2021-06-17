
<template>
    <nav-bar />
    <router-view />
    <resume-footer />
    <result-modal
      v-show="state.resModalVisible"
      :resultName="state.curResName"
      v-bind="results[state.curResName]"
      @closeResModal="closeResModal"
    />
</template>

<script>
import { useStore } from 'vuex'
import { results } from '@/data.json'
import NavBar from '@/components/NavBar'
import ResumeFooter from '@/components/Footer'
import ResultModal from '@/components/ResultModal'

export default {
  name: 'App',
  setup () {
    const state = useStore().state
    const emitter = state.emitter

    emitter.on('showResModal', (resName) => {
      state.curResName = resName
      state.resModalVisible = true
    })

    emitter.on('closeResModal', () => {
      state.curResName = 'empty'
      state.resModalVisible = false
    })

    return { emitter, state }
  },
  components: {
    NavBar,
    ResumeFooter,
    ResultModal
  },
  data () {
    return { results }
  }
}
</script>

<style lang="scss">
  @import url(assets/scss/main.scss);
</style>
