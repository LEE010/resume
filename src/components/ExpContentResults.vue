<template>
    <div class="exp_results">
        <ul class="results">
            <li class="result" v-for="res in expResults" :key="'result'+ res">
                <button class="result_icon" :class="'logo_' + res" :title="res" @click="showResModal(res)">
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

    const showResModal = (resName) => {
      emitter.emit('showResModal', resName)
    }

    return { showResModal }
  },
  props: {
    expResults: Array
  }
}
</script>
