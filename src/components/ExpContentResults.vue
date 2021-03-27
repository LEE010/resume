<template>
    <div class="exp_results">
        <strong class="results_title">Results.</strong>
        <ul class="results">
            <li class="result" v-for="res in expResults" :key="'result'+ res">
                <button class="result_icon" :class="'logo_' + res" :title="res" @click="setResModal(res)">
                    <span class="blind">{{ res }}</span>
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
import { useStore } from 'vuex'

export default {
  name: 'ExpContentResults',
  setup () {
    const emitter = useStore().state.emitter

    const setResModal = (resName) => {
      emitter.emit('showResModal', resName)
    }

    return { setResModal }
  },
  props: {
    expResults: Array
  }
}
</script>
