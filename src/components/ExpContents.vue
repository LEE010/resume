<template>
    <div class="exp_wrap">
        <ul class="exps">
            <!-- {{exps}} -->
            <exp-content v-for="(exp, index) in exps" :key="'exp'+ index" :exp="exp"/>
        </ul>
    </div>
</template>

<script>
import ExpContent from '@/components/ExpContent'

export default {
  name: 'ExpContents',
  components: {
    ExpContent
  },
  props: {
    exps: Array
  }
}
</script>
